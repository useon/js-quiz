const _0x4dfc4d = _0x1f16;
(function (_0x5bf634, _0x3c2ebc) {
  const _0x34937a = _0x1f16,
    _0x2c05ff = _0x5bf634();
  while (!![]) {
    try {
      const _0x4cf601 =
        parseInt(_0x34937a(0x128)) / 0x1 +
        parseInt(_0x34937a(0x11a)) / 0x2 +
        parseInt(_0x34937a(0x14f)) / 0x3 +
        -parseInt(_0x34937a(0x121)) / 0x4 +
        (-parseInt(_0x34937a(0x120)) / 0x5) * (parseInt(_0x34937a(0x15b)) / 0x6) +
        (-parseInt(_0x34937a(0x145)) / 0x7) * (-parseInt(_0x34937a(0x130)) / 0x8) +
        (parseInt(_0x34937a(0x149)) / 0x9) * (-parseInt(_0x34937a(0x138)) / 0xa);
      if (_0x4cf601 === _0x3c2ebc) break;
      else _0x2c05ff['push'](_0x2c05ff['shift']());
    } catch (_0xf9891a) {
      _0x2c05ff['push'](_0x2c05ff['shift']());
    }
  }
})(_0x5356, 0x951fb);
const questions = [],
  subjects = [],
  inpAnswers = [],
  rightAnswers = [];
let right = 0x0,
  wrong = 0x0,
  isPause = ![];
const menualBox = document[_0x4dfc4d(0x151)](_0x4dfc4d(0x15c)),
  startBtn = document[_0x4dfc4d(0x151)](_0x4dfc4d(0x148)),
  questionBox = document['querySelector'](_0x4dfc4d(0x131)),
  inpAnswer = document[_0x4dfc4d(0x151)](_0x4dfc4d(0x14b)),
  submitBtn = document['querySelector'](_0x4dfc4d(0x124)),
  rightAnswerBox = document['querySelector'](_0x4dfc4d(0x155)),
  rightAnswerOutput = document[_0x4dfc4d(0x151)](_0x4dfc4d(0x141)),
  wrongConfirmBtn = document[_0x4dfc4d(0x151)](_0x4dfc4d(0x13d)),
  floatingText = document[_0x4dfc4d(0x151)](_0x4dfc4d(0x158));
function _0x5356() {
  const _0x212e38 = [
    '70px',
    'subjects',
    'var(--color-font-2)',
    '820870IpiZxq',
    'innerHTML',
    'rightAnswers',
    '.nick-name-input',
    'height',
    'animation',
    '\x20combo-1',
    'color',
    '22384bOoHjx',
    '.question-area',
    'push',
    'result',
    'setAttribute',
    'inc',
    'wrong',
    'var(--color-main-2)',
    '10AAcicK',
    'then',
    '/data/data.json',
    'code',
    'stringify',
    '.btn-confirm',
    'style',
    'setItem',
    'click',
    '.right-answer',
    'var(--color-main-5)',
    'combo-1',
    'addEventListener',
    '1106sKrcBT',
    'readonly',
    'white',
    '.btn-start',
    '2057598IRWOlK',
    'dec',
    '.input-box',
    'Enter',
    'disabled',
    'nickName',
    '2296575gsdOVJ',
    '.score-area',
    'querySelector',
    'combo-2',
    'keydown',
    'length',
    '.right-answer-box',
    'var(--color-main-1)',
    'inpAnswers',
    '.floating-text',
    'var(--color-main-3)',
    'json',
    '6195324DYAHwT',
    '.box-manual',
    '.go-result',
    'value',
    'remove',
    'zIndex',
    'focus',
    '.btn-nick-name',
    'var(--color-main-4)',
    '.combo-plus',
    'invisible',
    '.moniter',
    '2128018YyvxQU',
    'classList',
    'questions',
    'textContent',
    'removeAttribute',
    'opacity',
    '5GtAyoA',
    '4882004egtOQt',
    '.box-nick-name',
    'right',
    '.btn-submit',
  ];
  _0x5356 = function () {
    return _0x212e38;
  };
  return _0x5356();
}
startBtn[_0x4dfc4d(0x144)](_0x4dfc4d(0x140), testStart),
  inpAnswer[_0x4dfc4d(0x144)](_0x4dfc4d(0x153), enterKeydown),
  submitBtn[_0x4dfc4d(0x144)](_0x4dfc4d(0x140), successCheck),
  wrongConfirmBtn[_0x4dfc4d(0x144)]('click', next);
const comboMoniter = document[_0x4dfc4d(0x151)](_0x4dfc4d(0x166)),
  comboDisplay = document['querySelector']('.combo-box'),
  comboPlusText = document[_0x4dfc4d(0x151)](_0x4dfc4d(0x164)),
  intervalCall300 = intervalCall(0x12c),
  nickNameBox = document['querySelector'](_0x4dfc4d(0x122)),
  nickNameInput = document[_0x4dfc4d(0x151)](_0x4dfc4d(0x12b)),
  nickNameBtn = document[_0x4dfc4d(0x151)](_0x4dfc4d(0x162));
nickNameBtn[_0x4dfc4d(0x144)]('click', nickNameConfirm);
const scoreArea = document['querySelector'](_0x4dfc4d(0x150));
function counterFactory() {
  var _0x45843c = 0x0;
  function _0x4921cb(_0x425aef) {
    _0x45843c = _0x425aef ?? _0x45843c;
    if (_0x45843c < 0x0) _0x45843c = 0x0;
    return _0x45843c;
  }
  return {
    inc: function (_0x4cc433) {
      return _0x4921cb(_0x4921cb() + 0xa + _0x4cc433);
    },
    dec: function () {
      return _0x4921cb(_0x4921cb() - 0x5);
    },
    result: function () {
      return _0x45843c;
    },
  };
}
var scoreCounter = counterFactory();
let nickName = '';
function nickNameConfirm() {
  const _0x5736f1 = _0x4dfc4d;
  if (isEmpty(nickNameInput)) return;
  (nickName = nickNameInput[_0x5736f1(0x15e)]), (nickNameBox['style'][_0x5736f1(0x160)] = -0x3);
}
function testStart() {
  const _0x1b4bc2 = _0x4dfc4d;
  startBtn[_0x1b4bc2(0x15f)](),
    menualBox[_0x1b4bc2(0x15f)](),
    goBtn['classList'][_0x1b4bc2(0x15f)](_0x1b4bc2(0x165)),
    submitBtn['removeAttribute'](_0x1b4bc2(0x14d)),
    inpAnswer[_0x1b4bc2(0x11e)](_0x1b4bc2(0x146)),
    (comboDisplay[_0x1b4bc2(0x11d)] = '0'),
    next();
}
function enterKeydown(_0x1bc480) {
  const _0x240df4 = _0x4dfc4d;
  _0x1bc480[_0x240df4(0x13b)] === _0x240df4(0x14c) &&
    intervalCall300(() => {
      isPause ? next() : successCheck();
    });
}
function intervalCall(_0x1757b7) {
  let _0x2c44ab = !![];
  return (_0x1e94fe) => {
    if (!_0x2c44ab) return;
    (_0x2c44ab = ![]),
      _0x1e94fe(),
      setTimeout(() => {
        _0x2c44ab = !![];
      }, _0x1757b7);
  };
}
function successCheck() {
  const _0x3e7fcd = _0x4dfc4d;
  if (isEmpty(inpAnswer)) return;
  inpAnswers[_0x3e7fcd(0x132)](inpAnswer['value']);
  isAnswer(questionBox['innerText'], inpAnswer[_0x3e7fcd(0x15e)])
    ? ((floatingText[_0x3e7fcd(0x13e)][_0x3e7fcd(0x12d)] = null),
      scoreCounter[_0x3e7fcd(0x135)](combo),
      combo++,
      right++,
      showCombo(comboPlusText),
      checkCombo(combo),
      next())
    : (scoreCounter[_0x3e7fcd(0x14a)](),
      (combo = 0x0),
      wrong++,
      (comboDisplay[_0x3e7fcd(0x13e)][_0x3e7fcd(0x12f)] = _0x3e7fcd(0x147)),
      checkCombo(combo),
      showRightAnswer());
  scoreArea['innerHTML'] = 'score\x20:\x20' + scoreCounter[_0x3e7fcd(0x133)]();
  if (0x3e8 <= scoreCounter[_0x3e7fcd(0x133)]())
    scoreArea[_0x3e7fcd(0x13e)]['color'] = _0x3e7fcd(0x127);
  else {
    if (0x1f4 <= scoreCounter[_0x3e7fcd(0x133)]()) scoreArea['style']['color'] = _0x3e7fcd(0x142);
    else {
      if (0x12c <= scoreCounter[_0x3e7fcd(0x133)]())
        scoreArea[_0x3e7fcd(0x13e)][_0x3e7fcd(0x12f)] = _0x3e7fcd(0x163);
      else {
        if (0x64 <= scoreCounter['result']())
          scoreArea[_0x3e7fcd(0x13e)][_0x3e7fcd(0x12f)] = _0x3e7fcd(0x159);
        else {
          if (0x32 <= scoreCounter[_0x3e7fcd(0x133)]())
            scoreArea[_0x3e7fcd(0x13e)][_0x3e7fcd(0x12f)] = _0x3e7fcd(0x137);
          else {
            if (0x19 <= scoreCounter[_0x3e7fcd(0x133)]())
              scoreArea[_0x3e7fcd(0x13e)][_0x3e7fcd(0x12f)] = _0x3e7fcd(0x156);
            else scoreArea[_0x3e7fcd(0x13e)][_0x3e7fcd(0x12f)] = _0x3e7fcd(0x147);
          }
        }
      }
    }
  }
}
function next() {
  const _0x534643 = _0x4dfc4d;
  reStartTimer(),
    (isPause = ![]),
    submitBtn[_0x534643(0x11e)](_0x534643(0x14d)),
    inpAnswer[_0x534643(0x11e)](_0x534643(0x146)),
    (rightAnswerBox[_0x534643(0x13e)]['height'] = null),
    showQuestion(),
    clearInputBox(),
    inpAnswer[_0x534643(0x161)]();
}
function showRightAnswer() {
  const _0x34704e = _0x4dfc4d;
  pauseTimer(),
    (isPause = !![]),
    submitBtn[_0x34704e(0x134)](_0x34704e(0x14d), !![]),
    inpAnswer['setAttribute'](_0x34704e(0x146), !![]),
    (rightAnswerBox[_0x34704e(0x13e)][_0x34704e(0x12c)] = _0x34704e(0x125)),
    (rightAnswerOutput[_0x34704e(0x129)] =
      '정답\x20:\x20' + getAnswer(questions[questions[_0x34704e(0x154)] - 0x1]));
}
function showQuestion() {
  const _0x477632 = _0x4dfc4d;
  fetch(_0x477632(0x13a))
    [_0x477632(0x139)]((_0x532d14) => _0x532d14[_0x477632(0x15a)]())
    [_0x477632(0x139)]((_0x503310) => {
      const _0x263bf7 = _0x477632,
        [_0x59db7b, _0x2e6aef] = getQuestion(_0x503310);
      (questionBox[_0x263bf7(0x129)] = _0x59db7b),
        questions[_0x263bf7(0x132)](_0x59db7b),
        subjects[_0x263bf7(0x132)](_0x2e6aef),
        rightAnswers['push'](getAnswer(_0x59db7b));
    });
}
function isEmpty(_0x211cd7) {
  const _0x51b735 = _0x4dfc4d;
  if (_0x211cd7['value'] === '') return _0x211cd7[_0x51b735(0x161)](), !![];
  return ![];
}
function clearInputBox() {
  inpAnswer['value'] = '';
}
const goBtn = document[_0x4dfc4d(0x151)](_0x4dfc4d(0x15d));
goBtn[_0x4dfc4d(0x144)](_0x4dfc4d(0x140), saveandLoad);
function saveandLoad() {
  const _0x40cee2 = _0x4dfc4d;
  localStorage[_0x40cee2(0x13f)](_0x40cee2(0x11c), JSON[_0x40cee2(0x13c)](questions)),
    localStorage[_0x40cee2(0x13f)](_0x40cee2(0x126), JSON['stringify'](subjects)),
    localStorage['setItem'](_0x40cee2(0x157), JSON[_0x40cee2(0x13c)](inpAnswers)),
    localStorage['setItem'](_0x40cee2(0x12a), JSON[_0x40cee2(0x13c)](rightAnswers)),
    localStorage[_0x40cee2(0x13f)](_0x40cee2(0x123), JSON[_0x40cee2(0x13c)](right)),
    localStorage[_0x40cee2(0x13f)](_0x40cee2(0x136), JSON[_0x40cee2(0x13c)](wrong)),
    localStorage['setItem']('myScore', JSON['stringify'](scoreCounter[_0x40cee2(0x133)]())),
    localStorage[_0x40cee2(0x13f)](_0x40cee2(0x14e), JSON['stringify'](nickName)),
    (location['href'] = 'result.html'),
    loadData();
}
function _0x1f16(_0x14ea65, _0x2bcbfd) {
  const _0x53563f = _0x5356();
  return (
    (_0x1f16 = function (_0x1f1678, _0x45a606) {
      _0x1f1678 = _0x1f1678 - 0x11a;
      let _0x44dbeb = _0x53563f[_0x1f1678];
      return _0x44dbeb;
    }),
    _0x1f16(_0x14ea65, _0x2bcbfd)
  );
}
function checkCombo(_0x2ba81e) {
  const _0x2c6da0 = _0x4dfc4d;
  comboDisplay['textContent'] = '' + _0x2ba81e;
  if (0x3 <= _0x2ba81e && _0x2ba81e < 0x7)
    (comboDisplay[_0x2c6da0(0x13e)]['color'] = 'var(--color-font-1)'),
      (comboMoniter['classList'] += _0x2c6da0(0x12e));
  else
    0x7 <= _0x2ba81e
      ? (floating(floatingText),
        (comboDisplay[_0x2c6da0(0x13e)][_0x2c6da0(0x12f)] = 'var(--color-font-2)'),
        comboMoniter['classList'][_0x2c6da0(0x15f)](_0x2c6da0(0x143)),
        (comboMoniter[_0x2c6da0(0x11b)] += '\x20combo-2'),
        (TIME += 0x12c))
      : (comboMoniter[_0x2c6da0(0x11b)]['remove'](_0x2c6da0(0x143)),
        comboMoniter[_0x2c6da0(0x11b)][_0x2c6da0(0x15f)](_0x2c6da0(0x152)));
}
function floating(_0x5732e3) {
  var _0x42efd8 = 0x64;
  function _0x2c5846() {
    const _0x457a28 = _0x1f16;
    _0x42efd8--,
      (_0x5732e3[_0x457a28(0x13e)]['top'] = _0x42efd8 + 0x32 + 'px'),
      (_0x5732e3[_0x457a28(0x13e)][_0x457a28(0x11f)] = _0x42efd8 / 0x64);
    if (_0x42efd8 == 0x0) clearInterval(_0x1c336d);
  }
  var _0x1c336d = setInterval(_0x2c5846, 0xa);
}
function showCombo(_0x59a174) {
  var _0x38f7fb = 0xa;
  function _0x588e02() {
    const _0x13f373 = _0x1f16;
    _0x38f7fb--,
      (_0x59a174[_0x13f373(0x13e)][_0x13f373(0x160)] = 0x1),
      _0x38f7fb == 0x0 &&
        ((_0x59a174[_0x13f373(0x13e)]['zIndex'] = -0x1), clearInterval(_0x2a4527));
  }
  var _0x2a4527 = setInterval(_0x588e02, 0x64);
}
