const getOptionPatterns = function (forms, options) {
  const { identical, permutation } = options;
  let left, right;
  if (identical) {
    left = getValue(forms[0]);
    right = copy(left);
  } else if (permutation) {
    left = getValue(randElem(forms));
    right = getValue(randElem(forms));
  }
  return [ left, right ];
};

const getExpression = function (operator, pattern, customForms = false, isRight = false) {
  let { forms, options } = pattern;
  let left, right;
  if (customForms) forms = [customForms];
  if (options) {
    [ left, right ] = getOptionPatterns(forms, options);
  } else {
    [ left, right ] = randElem(forms).map(getValue);
  }
  if (isRight) return `${operator} ${right}`;
  return `${left} ${operator} ${right}`;
};

const getFunction = function (expression, paramType) {
  switch (paramType) {
    case 'REDUCE': {
      const rand = randNum(0, 3);
      switch (rand) {
        case 0: return `function (acc, v) { return acc + v; }`;
        case 1: return `function (acc, v, i) { return acc + i; }`;
        case 2: return `(acc, v) => acc + v`;
        case 3: return `(acc, v, i) => acc + i`;
      }
    }
    case 'SORT': {
      const rand = randNum(0, 4);
      switch (rand) {
        case 0: return '';
        case 1: return 'function (a, b) { return a - b; }';
        case 2: return 'function (a, b) { return b - a; }';
        case 3: return '(a, b) => a - b';
        case 4: return '(a, b) => b - a';
      }
    }
  }

  const rand = randNum(0, 4);
  switch (rand) {
    case 0: return `function (v) { return v ${expression}; }`;
    case 1: return `function (v, i) { return i ${expression}; }`;
    case 2: return `(v) => v ${expression}`;
    case 3: return `v => v ${expression}`;
    case 4: return `(v, i) => i ${expression}`;
  }
};

const getCallback = function (paramType, data) {
  switch (paramType) {
    case 'MAP': {
      const { patterns } = data.find(v => v.category === '연산자1개');
      const operator = randElem(SIMPLE_OPERATOR);
      const pattern = patterns.find(v => v.operators.includes(operator));
      const expression = getExpression(operator, pattern, null, true);
      return getFunction(expression);
    }
    case 'REDUCE': case 'SORT': {
      return getFunction(null, paramType);
    }
    case 'CONDITION': {
      const rand = randNum(0, 1);
      const operator = randElem(COMPARISON_OPERATOR);
      const expression = `${operator} ${getNumber({ 0: [0, 10] })}`;
      if (rand) return getFunction(expression);
      const operator2 = randElem(SIMPLE_OPERATOR);
      const expression2 = `${operator2} ${getNumber({ 0: [2, 3] })}`;
      return getFunction(`${expression2} ${expression}`);
    }
  }
};

const getParameters = function (arrays, arrLength, data) {
  const { forms } = randElem(arrays);
  const { count, params } = randElem(forms);
  if (!count) return [];
  
  const paramType = randElem(params);
  let lastParam;
  return [...Array(count)]
    .map((_, i) => {
      switch (paramType) {
        case 'INT_INDEX':
          if (count > 1 && i > 0) return randNum(lastParam, arrLength - 1);
          lastParam = randNum(0, arrLength - 1);
          return lastParam;
        case 'M_INT_INDEX':
          if (count > 1 && i > 0) return randNum(lastParam, -1);
          lastParam = randNum(-arrLength, -1);
          return lastParam;
        case 'NUMBER':
          return randNum(0, 5);
        case 'ARRAY':
          return getArray({ 0: [1, 2], 1: [1, 2] });
        case 'SEPARATOR':
          return getString({ 4: true });
        case 'REDUCE':
          if (i === 0) return getCallback(paramType, data); 
          return randElem(INITIAL_ACC);
        default:
          return getCallback(paramType, data);
      }
    });
};


const getUnaryOperatorQuestion = function ({ patterns }) {
  const { operators, forms } = randElem(patterns);
  const term = getValue(randElem(forms));
  return `${randElem(operators)}${term}`;
};

const getOperatorQuestion = function ({ patterns }) {
  const pattern = randElem(patterns);
  const operator = randElem(pattern.operators);
  return getExpression(operator, pattern);
};

const getTwoOperatorsQuestion = function ({ patterns }, data) {
  let { operators, forms } = randElem(patterns);
  const [ leftOp, rightOp ] = operators.map(op => randElem(op));
  if (forms) {
    forms = [...Array(2)].map((_, i) => [randElem(forms[i]), randElem(forms[i])]);
  }
  const [ leftPattern, rightPattern ] = [ leftOp, rightOp ].map(op => {
    return data
      .find(v => v.category === '연산자1개').patterns
      .find(v => v.operators.includes(op));
  });
  const leftExp = getExpression(leftOp, leftPattern, forms?.[0]);
  const rightExp = getExpression(rightOp, rightPattern, forms?.[1], true);
  return `${leftExp} ${rightExp}`;
};

const getThreeOperatorsQuestion = function ({ patterns }, data) {
  let { operators } = randElem(patterns);
  const [ leftOp, centerOp, rightOp ] = operators.map(op => randElem(op));
  const [ leftPattern, rightPattern ] = [ leftOp, rightOp ].map(op => {
    return data
      .find(v => v.category === '연산자1개').patterns
      .find(v => v.operators.includes(op));
  });
  const leftExp = getExpression(leftOp, leftPattern);
  const rightExp = getExpression(rightOp, rightPattern);
  return `${leftExp} ${centerOp} ${rightExp}`;
};

const getArrayQuestion = function ({ patterns }, data) {
  const { methods, arrays } = randElem(patterns);
  const method = randElem(methods);
  const { array, lengthRange } = randElem(arrays);
  const arrLength = randNum(...lengthRange);
  // array 안에 있는 타입 정보로 배열을 만들어 줌
  const qArray = [...Array(arrLength)]
    .map(() => getValue(randElem(array)));
  // forms 중에 하나를 랜덤하게 뽑음.
  // 랜덤하게 뽑은 form의 count와 params를 넘겨서 매개변수에 들어갈 값들을 getParameters를 통해 받아온다.
  const qParams = getParameters(arrays, arrLength, data);
  // 질문 반환
  return `${arr(qArray)}.${method}(${qParams.join(', ')})`;
};

const getQuestion = function (data) {
  const randQuestion = randElem(data);
  const { category } = randQuestion;
  switch (category) {
    case '단항연산자':
      return getUnaryOperatorQuestion(randQuestion);
    case '연산자1개':
      return getOperatorQuestion(randQuestion);
    case '연산자2개':
      return getTwoOperatorsQuestion(randQuestion, data);
    case '연산자3개':
      return getThreeOperatorsQuestion(randQuestion, data);
    case '배열메소드':
      return getArrayQuestion(randQuestion, data);
  }
};

// console 에서 확인하기 위해 임시로 넣은 코드
// test.html에서 console에 문제 출력
fetch("/data/data.json")
  .then((response) => response.json())
  .then(data => console.log(getQuestion(data)));