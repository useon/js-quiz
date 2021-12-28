const _0x5d35d1 = _0x36dc;
(function (_0x119e23, _0x469554) {
  const _0xd2142c = _0x36dc,
    _0x4c3c8c = _0x119e23();
  while (!![]) {
    try {
      const _0x2afa02 =
        (parseInt(_0xd2142c(0x212)) / 0x1) * (-parseInt(_0xd2142c(0x1f0)) / 0x2) +
        (parseInt(_0xd2142c(0x1f3)) / 0x3) * (parseInt(_0xd2142c(0x205)) / 0x4) +
        -parseInt(_0xd2142c(0x1d0)) / 0x5 +
        (-parseInt(_0xd2142c(0x1f6)) / 0x6) * (-parseInt(_0xd2142c(0x1fb)) / 0x7) +
        (-parseInt(_0xd2142c(0x1db)) / 0x8) * (parseInt(_0xd2142c(0x1de)) / 0x9) +
        -parseInt(_0xd2142c(0x201)) / 0xa +
        (-parseInt(_0xd2142c(0x1fe)) / 0xb) * (-parseInt(_0xd2142c(0x1ea)) / 0xc);
      if (_0x2afa02 === _0x469554) break;
      else _0x4c3c8c['push'](_0x4c3c8c['shift']());
    } catch (_0x2bcf73) {
      _0x4c3c8c['push'](_0x4c3c8c['shift']());
    }
  }
})(_0x4205, 0x8a718);
const questions = [],
  inpAnswers = [],
  rightAnswers = [];
let right = 0x0,
  wrong = 0x0,
  isPause = ![];
const menualBox = document[_0x5d35d1(0x1e2)](_0x5d35d1(0x1fd)),
  startBtn = document[_0x5d35d1(0x1e2)](_0x5d35d1(0x20e)),
  questionBox = document[_0x5d35d1(0x1e2)](_0x5d35d1(0x1f8)),
  inpAnswer = document[_0x5d35d1(0x1e2)](_0x5d35d1(0x1e6)),
  submitBtn = document['querySelector'](_0x5d35d1(0x1e8)),
  rightAnswerBox = document[_0x5d35d1(0x1e2)](_0x5d35d1(0x1d6)),
  rightAnswerOutput = document['querySelector'](_0x5d35d1(0x1f2)),
  wrongConfirmBtn = document[_0x5d35d1(0x1e2)](_0x5d35d1(0x1ef)),
  floatingText = document['querySelector'](_0x5d35d1(0x1f7));
startBtn[_0x5d35d1(0x1d7)](_0x5d35d1(0x1d4), testStart),
  inpAnswer[_0x5d35d1(0x1d7)]('keydown', enterKeydown),
  submitBtn[_0x5d35d1(0x1d7)](_0x5d35d1(0x1d4), successCheck),
  wrongConfirmBtn[_0x5d35d1(0x1d7)](_0x5d35d1(0x1d4), next);
const comboMoniter = document[_0x5d35d1(0x1e2)](_0x5d35d1(0x1d9)),
  comboDisplay = document['querySelector'](_0x5d35d1(0x217)),
  comboPlusText = document[_0x5d35d1(0x1e2)](_0x5d35d1(0x1cd)),
  intervalCall300 = intervalCall(0x12c),
  nickNameBox = document[_0x5d35d1(0x1e2)](_0x5d35d1(0x209)),
  nickNameInput = document[_0x5d35d1(0x1e2)]('.nick-name-input'),
  nickNameBtn = document[_0x5d35d1(0x1e2)](_0x5d35d1(0x200));
nickNameBtn['addEventListener']('click', nickNameConfirm);
const scoreArea = document[_0x5d35d1(0x1e2)](_0x5d35d1(0x1fc));
function counterFactory() {
  var _0x1e52ac = 0x0;
  function _0x20efd8(_0x3ce015) {
    _0x1e52ac = _0x3ce015 ?? _0x1e52ac;
    if (_0x1e52ac < 0x0) _0x1e52ac = 0x0;
    return _0x1e52ac;
  }
  return {
    inc: function (_0x373912) {
      return _0x20efd8(_0x20efd8() + 0xa + _0x373912);
    },
    dec: function () {
      return _0x20efd8(_0x20efd8() - 0x5);
    },
    result: function () {
      return _0x1e52ac;
    },
  };
}
var scoreCounter = counterFactory();
let nickName = '';
function nickNameConfirm() {
  const _0x3771c6 = _0x5d35d1;
  if (isEmpty(nickNameInput)) return;
  (nickName = nickNameInput[_0x3771c6(0x213)]),
    (nickNameBox[_0x3771c6(0x1ff)][_0x3771c6(0x1cc)] = -0x3);
}
function _0x4205() {
  const _0x3f46bf = [
    '.moniter',
    'setAttribute',
    '3944152gLpwVs',
    'var(--color-font-2)',
    'myScore',
    '9xCrDOe',
    'classList',
    'white',
    'var(--color-main-3)',
    'querySelector',
    'then',
    'textContent',
    'dec',
    '.input-box',
    'var(--color-main-4)',
    '.btn-submit',
    'setItem',
    '504MpaYRz',
    '70px',
    'innerHTML',
    'focus',
    'color',
    '.btn-confirm',
    '1715978zELyUV',
    '/data/data.json',
    '.right-answer',
    '15UgLVqx',
    'combo-1',
    'right',
    '942RoZQEM',
    '.floating-text',
    '.question-area',
    'result',
    '.go-result',
    '28945JVguik',
    '.score-area',
    '.box-manual',
    '572198VDTnnc',
    'style',
    '.btn-nick-name',
    '3135690CTZeXl',
    'innerText',
    'code',
    'animation',
    '217720PxsPZq',
    'readonly',
    'push',
    'var(--color-main-2)',
    '.box-nick-name',
    'wrong',
    'var(--color-font-1)',
    'result.html',
    'disabled',
    '.btn-start',
    '\x20combo-1',
    'nickName',
    'inc',
    '1wCQLJe',
    'value',
    'rightAnswers',
    'removeAttribute',
    'Enter',
    '.combo-box',
    'zIndex',
    '.combo-plus',
    '\x20combo-2',
    'var(--color-main-1)',
    '4372300bxGyEO',
    'questions',
    'remove',
    '정답\x20:\x20',
    'click',
    'length',
    '.right-answer-box',
    'addEventListener',
    'stringify',
  ];
  _0x4205 = function () {
    return _0x3f46bf;
  };
  return _0x4205();
}
function testStart() {
  const _0x9148a3 = _0x5d35d1;
  startBtn[_0x9148a3(0x1d2)](),
    menualBox[_0x9148a3(0x1d2)](),
    goBtn[_0x9148a3(0x1df)]['remove']('invisible'),
    submitBtn['removeAttribute'](_0x9148a3(0x20d)),
    inpAnswer[_0x9148a3(0x215)]('readonly'),
    (comboDisplay[_0x9148a3(0x1e4)] = '0'),
    next();
}
function enterKeydown(_0x471ceb) {
  const _0xfd57eb = _0x5d35d1;
  _0x471ceb[_0xfd57eb(0x203)] === _0xfd57eb(0x216) &&
    intervalCall300(() => {
      isPause ? next() : successCheck();
    });
}
function intervalCall(_0x504867) {
  let _0xddd93f = !![];
  return (_0x23f434) => {
    if (!_0xddd93f) return;
    (_0xddd93f = ![]),
      _0x23f434(),
      setTimeout(() => {
        _0xddd93f = !![];
      }, _0x504867);
  };
}
function successCheck() {
  const _0x4ca428 = _0x5d35d1;
  if (isEmpty(inpAnswer)) return;
  inpAnswers['push'](inpAnswer[_0x4ca428(0x213)]);
  isAnswer(questionBox[_0x4ca428(0x202)], inpAnswer[_0x4ca428(0x213)])
    ? ((floatingText['style'][_0x4ca428(0x204)] = null),
      scoreCounter[_0x4ca428(0x211)](combo),
      combo++,
      right++,
      showCombo(comboPlusText),
      checkCombo(combo),
      next())
    : (scoreCounter[_0x4ca428(0x1e5)](),
      (combo = 0x0),
      wrong++,
      (comboDisplay[_0x4ca428(0x1ff)]['color'] = 'white'),
      checkCombo(combo),
      showRightAnswer());
  scoreArea[_0x4ca428(0x1ec)] = 'score\x20:\x20' + scoreCounter[_0x4ca428(0x1f9)]();
  if (0x3e8 <= scoreCounter[_0x4ca428(0x1f9)]())
    scoreArea[_0x4ca428(0x1ff)][_0x4ca428(0x1ee)] = _0x4ca428(0x1dc);
  else {
    if (0x1f4 <= scoreCounter[_0x4ca428(0x1f9)]())
      scoreArea[_0x4ca428(0x1ff)][_0x4ca428(0x1ee)] = 'var(--color-main-5)';
    else {
      if (0x12c <= scoreCounter[_0x4ca428(0x1f9)]())
        scoreArea['style'][_0x4ca428(0x1ee)] = _0x4ca428(0x1e7);
      else {
        if (0x64 <= scoreCounter[_0x4ca428(0x1f9)]())
          scoreArea[_0x4ca428(0x1ff)][_0x4ca428(0x1ee)] = _0x4ca428(0x1e1);
        else {
          if (0x32 <= scoreCounter[_0x4ca428(0x1f9)]())
            scoreArea[_0x4ca428(0x1ff)][_0x4ca428(0x1ee)] = _0x4ca428(0x208);
          else {
            if (0x19 <= scoreCounter[_0x4ca428(0x1f9)]())
              scoreArea[_0x4ca428(0x1ff)]['color'] = _0x4ca428(0x1cf);
            else scoreArea[_0x4ca428(0x1ff)]['color'] = _0x4ca428(0x1e0);
          }
        }
      }
    }
  }
}
function next() {
  const _0x4bce85 = _0x5d35d1;
  reStartTimer(),
    (isPause = ![]),
    submitBtn['removeAttribute']('disabled'),
    inpAnswer[_0x4bce85(0x215)](_0x4bce85(0x206)),
    (rightAnswerBox['style']['height'] = null),
    showQuestion(),
    clearInputBox(),
    inpAnswer[_0x4bce85(0x1ed)]();
}
function showRightAnswer() {
  const _0x3ef9ad = _0x5d35d1;
  pauseTimer(),
    (isPause = !![]),
    submitBtn[_0x3ef9ad(0x1da)](_0x3ef9ad(0x20d), !![]),
    inpAnswer[_0x3ef9ad(0x1da)](_0x3ef9ad(0x206), !![]),
    (rightAnswerBox['style']['height'] = _0x3ef9ad(0x1eb)),
    (rightAnswerOutput['innerHTML'] =
      _0x3ef9ad(0x1d3) + getAnswer(questions[questions[_0x3ef9ad(0x1d5)] - 0x1]));
}
function showQuestion() {
  const _0x227c07 = _0x5d35d1;
  fetch(_0x227c07(0x1f1))
    ['then']((_0x2b818e) => _0x2b818e['json']())
    [_0x227c07(0x1e3)]((_0x285259) => {
      const _0x3b5b6f = _0x227c07;
      let _0x45c336 = getQuestion(_0x285259);
      (questionBox[_0x3b5b6f(0x1ec)] = _0x45c336),
        questions[_0x3b5b6f(0x207)](_0x45c336),
        rightAnswers[_0x3b5b6f(0x207)](getAnswer(_0x45c336));
    });
}
function isEmpty(_0x3354f2) {
  const _0x181e59 = _0x5d35d1;
  if (_0x3354f2[_0x181e59(0x213)] === '') return _0x3354f2[_0x181e59(0x1ed)](), !![];
  return ![];
}
function _0x36dc(_0x27ef53, _0x454cec) {
  const _0x4205fd = _0x4205();
  return (
    (_0x36dc = function (_0x36dc9e, _0x562c44) {
      _0x36dc9e = _0x36dc9e - 0x1cc;
      let _0x179e25 = _0x4205fd[_0x36dc9e];
      return _0x179e25;
    }),
    _0x36dc(_0x27ef53, _0x454cec)
  );
}
function clearInputBox() {
  const _0x397d99 = _0x5d35d1;
  inpAnswer[_0x397d99(0x213)] = '';
}
const goBtn = document[_0x5d35d1(0x1e2)](_0x5d35d1(0x1fa));
goBtn[_0x5d35d1(0x1d7)](_0x5d35d1(0x1d4), saveandLoad);
function saveandLoad() {
  const _0x5b55ee = _0x5d35d1;
  localStorage[_0x5b55ee(0x1e9)](_0x5b55ee(0x1d1), JSON['stringify'](questions)),
    localStorage['setItem']('inpAnswers', JSON[_0x5b55ee(0x1d8)](inpAnswers)),
    localStorage['setItem'](_0x5b55ee(0x214), JSON[_0x5b55ee(0x1d8)](rightAnswers)),
    localStorage['setItem'](_0x5b55ee(0x1f5), JSON['stringify'](right)),
    localStorage[_0x5b55ee(0x1e9)](_0x5b55ee(0x20a), JSON[_0x5b55ee(0x1d8)](wrong)),
    localStorage[_0x5b55ee(0x1e9)](
      _0x5b55ee(0x1dd),
      JSON['stringify'](scoreCounter[_0x5b55ee(0x1f9)]())
    ),
    localStorage['setItem'](_0x5b55ee(0x210), JSON['stringify'](nickName)),
    (location['href'] = _0x5b55ee(0x20c)),
    loadData();
}
function checkCombo(_0x4fa9c9) {
  const _0x1fd699 = _0x5d35d1;
  comboDisplay[_0x1fd699(0x1e4)] = '' + _0x4fa9c9;
  if (0x3 <= _0x4fa9c9 && _0x4fa9c9 < 0x7)
    (comboDisplay[_0x1fd699(0x1ff)][_0x1fd699(0x1ee)] = _0x1fd699(0x20b)),
      (comboMoniter[_0x1fd699(0x1df)] += _0x1fd699(0x20f));
  else
    0x7 <= _0x4fa9c9
      ? (floating(floatingText),
        (comboDisplay['style'][_0x1fd699(0x1ee)] = _0x1fd699(0x1dc)),
        comboMoniter[_0x1fd699(0x1df)][_0x1fd699(0x1d2)](_0x1fd699(0x1f4)),
        (comboMoniter[_0x1fd699(0x1df)] += _0x1fd699(0x1ce)),
        (TIME += 0x12c))
      : (comboMoniter[_0x1fd699(0x1df)][_0x1fd699(0x1d2)](_0x1fd699(0x1f4)),
        comboMoniter['classList']['remove']('combo-2'));
}
function floating(_0x455d32) {
  var _0x787b32 = 0x64;
  function _0x533a40() {
    const _0x473319 = _0x36dc;
    _0x787b32--,
      (_0x455d32[_0x473319(0x1ff)]['top'] = _0x787b32 + 0x32 + 'px'),
      (_0x455d32[_0x473319(0x1ff)]['opacity'] = _0x787b32 / 0x64);
    if (_0x787b32 == 0x0) clearInterval(_0x1dd3d8);
  }
  var _0x1dd3d8 = setInterval(_0x533a40, 0xa);
}
function showCombo(_0x1a755b) {
  var _0x43df7e = 0xa;
  function _0x3e4999() {
    const _0x43f0b3 = _0x36dc;
    _0x43df7e--,
      (_0x1a755b[_0x43f0b3(0x1ff)]['zIndex'] = 0x1),
      _0x43df7e == 0x0 && ((_0x1a755b['style']['zIndex'] = -0x1), clearInterval(_0x35b44d));
  }
  var _0x35b44d = setInterval(_0x3e4999, 0x64);
}
