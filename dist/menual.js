const _0x56e5e6 = _0xea6c;
(function (_0xc61420, _0x613e05) {
  const _0x227ffa = _0xea6c,
    _0x75030 = _0xc61420();
  while (!![]) {
    try {
      const _0x51743e =
        (parseInt(_0x227ffa(0x9a)) / 0x1) * (-parseInt(_0x227ffa(0xa6)) / 0x2) +
        (parseInt(_0x227ffa(0x98)) / 0x3) * (parseInt(_0x227ffa(0xa3)) / 0x4) +
        (-parseInt(_0x227ffa(0xa0)) / 0x5) * (parseInt(_0x227ffa(0xa8)) / 0x6) +
        (parseInt(_0x227ffa(0x9d)) / 0x7) * (parseInt(_0x227ffa(0xa7)) / 0x8) +
        -parseInt(_0x227ffa(0x92)) / 0x9 +
        (parseInt(_0x227ffa(0xad)) / 0xa) * (parseInt(_0x227ffa(0x91)) / 0xb) +
        (-parseInt(_0x227ffa(0x97)) / 0xc) * (-parseInt(_0x227ffa(0x9b)) / 0xd);
      if (_0x51743e === _0x613e05) break;
      else _0x75030['push'](_0x75030['shift']());
    } catch (_0x24f5d5) {
      _0x75030['push'](_0x75030['shift']());
    }
  }
})(_0x32fb, 0x193b5);
const nextButton = document['querySelector']('.btn-menual-next'),
  prevButton = document['querySelector'](_0x56e5e6(0xa1)),
  menualContent = document[_0x56e5e6(0x9c)](_0x56e5e6(0x90));
nextButton[_0x56e5e6(0x96)]('click', nextMenual),
  prevButton[_0x56e5e6(0x96)](_0x56e5e6(0xa2), prevMenual);
function _0x32fb() {
  const _0x1e192a = [
    'click',
    '28yTVjBT',
    'innerHTML',
    'style',
    '104380neekhS',
    '1616YKITMC',
    '32550nmBnCu',
    '[문제\x20출력]\x20버튼을\x20눌러\x20시작하세요!',
    'block',
    '정답은\x20+10점,\x20오답은\x20-5점입니다.',
    '문제에\x20주어진\x20자바스크립트\x20표현식의\x20값을\x20답안으로\x20제출하시면\x20됩니다.',
    '210ZnTJvx',
    'none',
    '.box-manual\x20>\x20p',
    '62392KmATLu',
    '1648485zQqfUf',
    '제한시간\x203분이고,\x20정답을\x20맞추면\x20점수를\x20얻습니다.',
    'display',
    '[엔터키]를\x20사용하여\x20답안\x20제출이\x20가능합니다.',
    'addEventListener',
    '408xaudTR',
    '47847XDWAta',
    'length',
    '2ncajjX',
    '48971WvPkLb',
    'querySelector',
    '2051XPQLRc',
    '7연속\x20이상\x20정답을\x20맞추면\x20추가\x20시간을\x20얻을\x20수\x20있습니다.',
    'JS\x20퀴즈에서는\x20자바스크립트\x20문법을\x20활용한\x20문제가\x20출제됩니다.',
    '25kJJlzD',
    '.btn-menual-prev',
  ];
  _0x32fb = function () {
    return _0x1e192a;
  };
  return _0x32fb();
}
function _0xea6c(_0x297511, _0x56975f) {
  const _0x32fb1b = _0x32fb();
  return (
    (_0xea6c = function (_0xea6c52, _0x2c4047) {
      _0xea6c52 = _0xea6c52 - 0x8f;
      let _0x3f3098 = _0x32fb1b[_0xea6c52];
      return _0x3f3098;
    }),
    _0xea6c(_0x297511, _0x56975f)
  );
}
let menualArr = [
    'JS\x20퀴즈에\x20오신것을\x20환영합니다.\x20:)',
    _0x56e5e6(0x9f),
    _0x56e5e6(0x95),
    _0x56e5e6(0xac),
    '문자열은\x20따옴표로,\x20배열은\x20대괄호로,\x20객체는\x20중괄호로\x20감싸야\x20정답으로\x20인정됩니다.',
    _0x56e5e6(0x93),
    _0x56e5e6(0xab),
    '정답을\x20연속으로\x20맞추면\x20추가\x20점수를\x20얻을\x20수\x20있습니다.',
    _0x56e5e6(0x9e),
    _0x56e5e6(0xa9),
  ],
  menualCount = 0x0;
menualContent['innerHTML'] = menualArr[0x0];
function nextMenual() {
  const _0x79fda9 = _0x56e5e6;
  menualCount == menualArr[_0x79fda9(0x99)] - 0x2 &&
    (nextButton['style'][_0x79fda9(0x94)] = _0x79fda9(0x8f)),
    (menualContent[_0x79fda9(0xa4)] = menualArr[++menualCount]),
    (prevButton[_0x79fda9(0xa5)][_0x79fda9(0x94)] = _0x79fda9(0xaa));
}
function prevMenual() {
  const _0x2f3f7c = _0x56e5e6;
  menualCount == 0x1 && (prevButton[_0x2f3f7c(0xa5)][_0x2f3f7c(0x94)] = 'none'),
    (menualContent[_0x2f3f7c(0xa4)] = menualArr[--menualCount]),
    (nextButton[_0x2f3f7c(0xa5)][_0x2f3f7c(0x94)] = _0x2f3f7c(0xaa));
}
