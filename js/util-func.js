const convertToString = function (value) {
  const type = typeof value;
  switch (type) {
    case 'number': return num(value);
    case 'string': return str(value);
    case 'object':
      if (Array.isArray(value)) return arr(value);
      return object(value);
  }
};

const num = function (number) {
  if (number < 0) return `(${number})`;
  return number;
}

const str = function (value) {
  return `'${value}'`;
};

const arr = function (obj) {
  return `[${obj.join(', ')}]`
}

const object = function (obj) {
  const arr = [];
  Object.entries(obj)
    .forEach(([ key, value ]) => arr.push(`${key}: ${value}`));
  return `({${arr.join(', ')}})`;
};

const copy = function (target) {
  if (Array.isArray(target)) {
    return [...target];
  } else if (typeof target === 'object') {
    return {...target};
  }
  return target;
};

const randNum = (start, end) => {
  let num = Math.floor(Math.random() * (end - start + 1)) + start;
  return num;
};

// start 이상 end 이하의 랜덤한 정수를 반환
// count에 2 이상의 정수를 전달하면 동일한 범위에서 count번 랜덤한 정수를 배열에 담아 반환
const randRange = function (start, end, count = 1) {
  if (count === 1) {
    return randNum(start, end);
  } else if (Number.isInteger(count) && count > 1) {
    return [...Array(count)].map(() => randNum(start, end));
  }
};

// 배열 내에서 랜덤한 요소를 한 개 반환
const randElem = function (array) {
  return array[randNum(0, array.length - 1)];
};

// 배열 내에서 랜덤한 요소를 count개 뽑아서 배열로 반환
const randArray = function (array, count) {
  const tempArray = [...array];
  while (tempArray.length > count) {
    tempArray.splice(randNum(0, tempArray.length - 1), 1);
  }
  return tempArray;
};

const shuffle = function () {
  const arrayCopy = copy(this);
  const output = [];
  while (arrayCopy.length) {
    output.push(arrayCopy.splice(randNum(0, arrayCopy.length - 1), 1)[0]);
  }
  return output;
};
Array.prototype.shuffle = shuffle;

const insert = function (elem, index) {
  this.splice(index, 0, elem);
  return this;
};
Array.prototype.insert = insert;

const getTryCatch = exp => `try {\n  ${exp}\n} catch {\n  'error'\n}`;


const getBoolean = function () {
  return randElem(BOOLEAN);
};

const getNumber = function (form) {
  const candidate = [];
  if (form[0]) candidate.push(randRange(...form[0]));
  if (form[1]) candidate.push(`0.${randRange(...form[1])}`);
  if (form[2]) candidate.push(randElem(DIVISOR));
  return num(randElem(candidate));
};

const getString = function (form) {
  const candidate = [];
  if (form[0]) candidate.push(randRange(...form[0]));
  if (form[1]) candidate.push(randElem(ALPHABET));
  if (form[2]) candidate.push(randElem(FALSY_STRING));
  if (form[3]) candidate.push(randElem(DIVISOR));
  if (form[4]) candidate.push(randElem(SEPARATOR));
  return str(randElem(candidate));
};

const getArray = function (form) {
  const candidate = [];
  if (form[0]) candidate.push(randArray(NUM, randRange(...form[0])));
  if (form[1]) candidate.push(randArray(ALPHABET, randRange(...form[1])).map(str));
  return arr(randElem(candidate));
};

const getObject = function (form) {
  const obj = {};
  const rand = randRange(...form[0]);
  const alphabet = randArray(ALPHABET, rand);
  const number = randArray(NUM, rand);
  alphabet.forEach((v, i) => obj[v] = number[i]);
  return object(obj);
};

const getFalsy = function () {
  const rand = randNum(0, 6);
  switch (rand) {
    case 0: return str(FALSY[rand]);
    case 3: return arr(FALSY[rand]);
    case 4: return object(FALSY[rand]);
    default: return FALSY[rand] + '';
  }
}

const getValue = function (form) {
  const { type } = form;
  switch (type) {
    case 'number': return getNumber(form);
    case 'string': return getString(form);
    case 'array': return getArray(form);
    case 'object': return getObject(form);
    case 'boolean': return getBoolean();
    case 'falsy': return getFalsy();
  }
};