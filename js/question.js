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
  }
};

// console 에서 확인하기 위해 임시로 넣은 코드
// test.html에서 console에 문제 출력
fetch("/data/data.json")
  .then((response) => response.json())
  .then(data => console.log(getQuestion(data)));