const checkStartEnd = function (string, start, end) {
  return string[0] === start && string[string.length - 1] === end;
};

const deleteQuotes = function (string) {
  const isSingle = checkStartEnd(string, '\'', '\'');
  const isDouble = checkStartEnd(string, '\"', '\"');
  const isBacktick = checkStartEnd(string, '`', '`');
  if (!(isSingle || isDouble || isBacktick)) return string;
  return string.slice(1, string.length - 1);
};

const isCorrectBoolean = function (value, answer) {
  return value + '' === answer;
};

const isCorrectNumber = function (value, answer) {
  if (Number.isNaN(value)) return answer === 'NaN';
  if (!Number.isFinite(value)) {
    if (value > 0) return answer === 'Infinity';
    return answer === '-Infinity';
  }
  return value === +answer;
};

const isCorrectString = function (value, answer) {
  const isSingle = checkStartEnd(answer, '\'', '\'');
  const isDouble = checkStartEnd(answer, '\"', '\"');
  const isBacktick = checkStartEnd(answer, '`', '`');
  if (!(isSingle || isDouble || isBacktick)) return false;
  return value === answer.slice(1, answer.length - 1);
};

const isCorrectUndefined = function (answer) {
  return answer === 'undefined';
};

const isCorrectNull = function (answer) {
  return answer === 'null';
};

const isCorrectArray = function (value, answer) {
  if (!checkStartEnd(answer, '[', ']')) return false;
  return value.toString() === answer
    .slice(1, answer.length - 1)
    .split(',')
    .map(v => deleteQuotes(v.trim()))
    .join(',');
};

// 지금은 key든 value든 따옴표 여부에 상관없이 안에 값만 맞으면 ok인데,
// 만약에 value가 문자열인 경우 answer에서 따옴표를 붙이지 않으면 틀린 것으로 처리해야 함!
// (그러나 지금 당장은 배열의 value로는 숫자만 들어가게 되어있어서 상관 X)
const isCorrectObject = function (value, answer) {
  if (!checkStartEnd(answer, '{', '}')) return false;
  if (Object.keys(value).length === 0) return answer === '{}';
  const entries = Object.entries(value);
  return answer
    .slice(1, answer.length - 1)
    .split(',')
    .map(v => v.trim().split(':').map(v => deleteQuotes(v.trim())))
    .every(([ k, v ], i) => k === entries?.[i]?.[0] && v === entries?.[i]?.[1] + '');
};

// 정답 여부를 boolean으로 반환함
// 단순히 eval()로 정답을 처리할 수 없는 경우(배열, 객체 리터럴)와
// 정답으로 인정할 수 있는 여러 경우(문자열 따옴표 '' "") 등을 해결하기 위해 별도의 함수를 만듦
const isAnswer = function (question, input) {
  const value = eval(question);
  const myAnswer = input.trim();
  switch (typeof value) {
    case 'boolean': return isCorrectBoolean(value, myAnswer);
    case 'number': return isCorrectNumber(value, myAnswer);
    case 'string': return isCorrectString(value, myAnswer);
    case 'undefined': return isCorrectUndefined(myAnswer);
    case 'object':
      if (value === null) {
        return isCorrectNull(myAnswer);
      } else if (Array.isArray(value)) {
        return isCorrectArray(value, myAnswer);
      } else {
        return isCorrectObject(value, myAnswer);
      }
  }
};

const getAnswer = function (question) {
  const value = eval(question);
  switch (typeof value) {
    case 'boolean':
    case 'number':
    case 'undefined':
      return value + '';
    case 'string':
      return str(value);
    case 'object':
      if (value === null) return 'null'
      if (Array.isArray(value)) return arr(value.map(v => {
        if (typeof v === 'string') return str(v);
        return v;
      }));
      const obj = object(value);
      return obj.slice(1, obj.length - 1);
  }
};