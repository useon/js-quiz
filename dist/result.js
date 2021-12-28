const _0x533dfc = _0x1b5e;
(function (_0x4f146c, _0x59003b) {
  const _0x26f62b = _0x1b5e,
    _0x2e6bb4 = _0x4f146c();
  while (!![]) {
    try {
      const _0x6bc00 =
        (-parseInt(_0x26f62b(0x90)) / 0x1) * (parseInt(_0x26f62b(0xba)) / 0x2) +
        -parseInt(_0x26f62b(0xa4)) / 0x3 +
        (-parseInt(_0x26f62b(0xa9)) / 0x4) * (-parseInt(_0x26f62b(0x8d)) / 0x5) +
        (-parseInt(_0x26f62b(0x9f)) / 0x6) * (-parseInt(_0x26f62b(0xd3)) / 0x7) +
        parseInt(_0x26f62b(0x8c)) / 0x8 +
        parseInt(_0x26f62b(0xa1)) / 0x9 +
        (parseInt(_0x26f62b(0xb5)) / 0xa) * (-parseInt(_0x26f62b(0x9d)) / 0xb);
      if (_0x6bc00 === _0x59003b) break;
      else _0x2e6bb4['push'](_0x2e6bb4['shift']());
    } catch (_0xdd12bd) {
      _0x2e6bb4['push'](_0x2e6bb4['shift']());
    }
  }
})(_0x375a, 0x7a871);
let rankScore = [];
const showBtn = document['querySelector'](_0x533dfc(0x80)),
  resultBox = document[_0x533dfc(0xcb)](_0x533dfc(0x8a)),
  chartBox = document[_0x533dfc(0xcb)](_0x533dfc(0xd2));
showBtn[_0x533dfc(0x98)](_0x533dfc(0xd6), () => {
  const _0x6bd6c9 = _0x533dfc;
  showBtn['remove'](),
    (resultBox[_0x6bd6c9(0xcf)] =
      '총\x20' +
      (right + wrong) +
      _0x6bd6c9(0xbc) +
      right +
      _0x6bd6c9(0xaf) +
      myScore +
      _0x6bd6c9(0xa6));
});
const studyBtn = document[_0x533dfc(0xcb)](_0x533dfc(0xc6)),
  resultSlider = document['querySelector'](_0x533dfc(0x88));
studyBtn['addEventListener'](_0x533dfc(0xd6), showStudy);
const sliderItemWidth = 0x190;
let left = 0x0,
  childCount = 0x0,
  nowCount = 0x0;
const nextSlideBtn = document[_0x533dfc(0xcb)](_0x533dfc(0xc2)),
  prevSlideBtn = document[_0x533dfc(0xcb)](_0x533dfc(0xd1)),
  countBox = document[_0x533dfc(0xcb)]('.count-box'),
  endBtn = document['querySelector'](_0x533dfc(0xb8)),
  endBox = document[_0x533dfc(0xcb)]('.end-box'),
  endNo = document[_0x533dfc(0xcb)]('.end-btn-no');
endBtn[_0x533dfc(0x98)](_0x533dfc(0xd6), showEnd), endNo[_0x533dfc(0x98)](_0x533dfc(0xd6), offEnd);
const selectBox = document[_0x533dfc(0xcb)](_0x533dfc(0xc7)),
  rankingBtn = document[_0x533dfc(0xcb)](_0x533dfc(0xb1)),
  goSelectBoxBtn = document[_0x533dfc(0xcb)](_0x533dfc(0x93)),
  lankingTitle = document[_0x533dfc(0xcb)](_0x533dfc(0x94)),
  lankingBox = document['querySelector'](_0x533dfc(0x85));
rankingBtn[_0x533dfc(0x98)](_0x533dfc(0xd6), showLanking),
  goSelectBoxBtn[_0x533dfc(0x98)]('click', goSelectBox);
function getData() {
  const _0x2e9da4 = _0x533dfc;
  (questions = JSON[_0x2e9da4(0xdb)](localStorage[_0x2e9da4(0xc5)](_0x2e9da4(0xb0)))),
    (subjects = JSON[_0x2e9da4(0xdb)](localStorage['getItem'](_0x2e9da4(0x9c)))),
    (inpAnswers = JSON[_0x2e9da4(0xdb)](localStorage['getItem'](_0x2e9da4(0xa2)))),
    (rightAnswers = JSON[_0x2e9da4(0xdb)](localStorage[_0x2e9da4(0xc5)]('rightAnswers'))),
    (right = JSON[_0x2e9da4(0xdb)](localStorage[_0x2e9da4(0xc5)](_0x2e9da4(0xbd)))),
    (wrong = JSON[_0x2e9da4(0xdb)](localStorage[_0x2e9da4(0xc5)](_0x2e9da4(0xb3)))),
    (nickName = JSON[_0x2e9da4(0xdb)](localStorage[_0x2e9da4(0xc5)](_0x2e9da4(0x83)))),
    (myScore = JSON[_0x2e9da4(0xdb)](localStorage[_0x2e9da4(0xc5)](_0x2e9da4(0x8e))));
}
function goSelectBox() {
  const _0x4501fb = _0x533dfc;
  (selectBox[_0x4501fb(0xc3)][_0x4501fb(0xd9)] = 'block'),
    (lankingBox[_0x4501fb(0xc3)][_0x4501fb(0xd9)] = _0x4501fb(0xa8)),
    (lankingTitle[_0x4501fb(0xc3)][_0x4501fb(0xd9)] = _0x4501fb(0xa8)),
    btnInvisible(prevSlideBtn),
    btnInvisible(nextSlideBtn),
    (countBox[_0x4501fb(0x8f)] = 'hello\x20:)');
}
function showLanking() {
  const _0xb0bb7c = _0x533dfc;
  (selectBox[_0xb0bb7c(0xc3)][_0xb0bb7c(0xd9)] = 'none'),
    (lankingBox[_0xb0bb7c(0xc3)][_0xb0bb7c(0xd9)] = _0xb0bb7c(0x92)),
    (lankingTitle[_0xb0bb7c(0xc3)]['display'] = _0xb0bb7c(0x92)),
    (countBox[_0xb0bb7c(0x8f)] = _0xb0bb7c(0xc1));
}
function showStudy() {
  const _0x491375 = _0x533dfc;
  selectBox[_0x491375(0xc3)][_0x491375(0xd9)] = _0x491375(0xa8);
  if (!wrong) {
    (resultSlider[_0x491375(0xcf)] = _0x491375(0x87)),
      (resultSlider[_0x491375(0xc3)][_0x491375(0xa7)] = sliderItemWidth + 'px');
    return;
  }
  if (0x1 < wrong) btnVisible(nextSlideBtn);
  else btnInvisible(nextSlideBtn);
  btnInvisible(prevSlideBtn), (countBox[_0x491375(0x8f)] = _0x491375(0xd8) + childCount);
}
function createStudyList(_0x37da7e) {
  const _0x5d6862 = _0x533dfc;
  for (let _0x7b6f28 = 0x0; _0x7b6f28 < inpAnswers[_0x5d6862(0xda)]; _0x7b6f28++) {
    if (isAnswer(questions[_0x7b6f28], inpAnswers[_0x7b6f28])) continue;
    childCount++;
    const _0x177680 = document[_0x5d6862(0xa5)](_0x5d6862(0xb9)),
      _0x27849b = document[_0x5d6862(0xa5)]('div'),
      _0x51f61d = document[_0x5d6862(0xa5)](_0x5d6862(0xb9)),
      _0xfe07ab = document['createElement'](_0x5d6862(0xb9));
    (_0xfe07ab[_0x5d6862(0xae)] += _0x5d6862(0x9e)),
      (_0x177680['innerHTML'] =
        _0x5d6862(0xdd) +
        subjects[_0x7b6f28] +
        '</p><div>' +
        questions[_0x7b6f28] +
        _0x5d6862(0xad)),
      _0xfe07ab[_0x5d6862(0xc4)](_0x177680),
      (_0x27849b[_0x5d6862(0x8f)] = _0x5d6862(0xd0) + rightAnswers[_0x7b6f28]),
      _0xfe07ab[_0x5d6862(0xc4)](_0x27849b),
      (_0x51f61d[_0x5d6862(0x8f)] = _0x5d6862(0xc0) + inpAnswers[_0x7b6f28]),
      _0xfe07ab['appendChild'](_0x51f61d),
      _0x37da7e[_0x5d6862(0xc4)](_0xfe07ab);
  }
  _0x37da7e[_0x5d6862(0xc3)][_0x5d6862(0xa7)] = childCount * sliderItemWidth + 'px';
}
function createLankingList() {
  const _0x5bce77 = _0x533dfc;
  let _0x192ac9 = 0x63;
  if (rankScore[_0x5bce77(0xda)] < _0x192ac9) _0x192ac9 = rankScore[_0x5bce77(0xda)];
  for (let _0x15e853 = 0x1; _0x15e853 <= _0x192ac9; _0x15e853++) {
    const _0x5a4742 = document[_0x5bce77(0xa5)]('div'),
      _0x1a03a9 = document[_0x5bce77(0xa5)](_0x5bce77(0xb9)),
      _0x242404 = document[_0x5bce77(0xa5)]('div'),
      _0x33e4c4 = document[_0x5bce77(0xa5)]('div');
    _0x33e4c4['className'] += _0x5bce77(0xc8);
    if (_0x15e853 == 0x1) _0x5a4742[_0x5bce77(0x8f)] = '👑';
    else {
      if (_0x15e853 == 0x2) _0x5a4742['textContent'] = '🥇';
      else {
        if (_0x15e853 == 0x3) _0x5a4742[_0x5bce77(0x8f)] = '🥈';
        else {
          if (_0x15e853 == 0x4) _0x5a4742['textContent'] = '🥉';
          else _0x5a4742[_0x5bce77(0x8f)] = _0x15e853;
        }
      }
    }
    _0x33e4c4[_0x5bce77(0xc4)](_0x5a4742),
      (_0x1a03a9[_0x5bce77(0x8f)] = '' + rankScore[_0x15e853 - 0x1][_0x5bce77(0xa3)]),
      _0x33e4c4[_0x5bce77(0xc4)](_0x1a03a9),
      (_0x242404[_0x5bce77(0x8f)] = '' + rankScore[_0x15e853 - 0x1][_0x5bce77(0x95)]),
      _0x33e4c4[_0x5bce77(0xc4)](_0x242404),
      lankingBox['appendChild'](_0x33e4c4);
  }
}
function _0x1b5e(_0x44be18, _0x45111b) {
  const _0x375aea = _0x375a();
  return (
    (_0x1b5e = function (_0x1b5ebf, _0x27227) {
      _0x1b5ebf = _0x1b5ebf - 0x7e;
      let _0x1fb089 = _0x375aea[_0x1b5ebf];
      return _0x1fb089;
    }),
    _0x1b5e(_0x44be18, _0x45111b)
  );
}
function loadData() {
  const _0x4f08dc = _0x533dfc;
  let _0xbde948 = ![],
    _0x267c89 = 0x0;
  const _0x137f0e = firebase[_0x4f08dc(0x8b)]()[_0x4f08dc(0xb2)]('data');
  _0x137f0e[_0x4f08dc(0xbe)](_0x4f08dc(0xca), (_0x3aeb23) => {
    const _0x4e43ce = _0x4f08dc,
      _0x320636 = _0x3aeb23['val']();
    for (let _0x320eda in _0x320636) {
      let _0x1fa8c1 = _0x320636[_0x320eda][_0x4e43ce(0xd7)],
        _0x361fcf = _0x320636[_0x320eda][_0x4e43ce(0x95)];
      nickName === _0x1fa8c1
        ? ((_0xbde948 = !![]), (_0x267c89 = _0x361fcf))
        : rankScore[_0x4e43ce(0xd5)]({ nick: _0x1fa8c1, score: _0x361fcf });
    }
    if (_0xbde948) {
      let _0x4ed824 = getMax(_0x267c89, myScore);
      setData(nickName, _0x4ed824),
        rankScore[_0x4e43ce(0xd5)]({ nick: nickName, score: _0x4ed824 });
    } else
      setData(nickName, myScore), rankScore[_0x4e43ce(0xd5)]({ nick: nickName, score: myScore });
  })['then'](() => rank());
}
function getMax(_0x47960d, _0x2a8759) {
  if (_0x47960d < _0x2a8759) return _0x2a8759;
  return _0x47960d;
}
function setData(_0x1dcd11, _0x5ebd32) {
  const _0x48c0e6 = _0x533dfc;
  firebase[_0x48c0e6(0x8b)]()
    [_0x48c0e6(0xb2)](_0x48c0e6(0xbf))
    [_0x48c0e6(0xb6)](nickName)
    [_0x48c0e6(0xb7)]({ nickname: _0x1dcd11, score: _0x5ebd32 });
}
function rank() {
  const _0x51f00e = _0x533dfc;
  rankScore = rankScore[_0x51f00e(0x86)](function (_0x4c1b62, _0x41b270) {
    const _0x25ca98 = _0x51f00e;
    return _0x41b270[_0x25ca98(0x95)] - _0x4c1b62[_0x25ca98(0x95)];
  });
  const _0x1a38f9 = rankScore[0x0][_0x51f00e(0x95)] + 0x1;
  let _0x23661b = Array[_0x51f00e(0xdc)]({ length: _0x1a38f9 }, () => 0x0);
  for (let _0x3ab2b9 of rankScore) {
    _0x23661b[_0x3ab2b9['score']]++;
  }
  loadChart(_0x23661b, _0x1a38f9), createLankingList();
}
function loadChart(_0x28c6c7, _0x52edbe) {
  const _0x4503af = _0x533dfc;
  chartBox[_0x4503af(0xcf)] = _0x4503af(0x9a);
  const _0x526071 = {
      labels: [...Array(_0x52edbe)][_0x4503af(0xb4)]((_0xcbb8fc, _0x2d336c) => _0x2d336c),
      datasets: [
        {
          label: _0x4503af(0x9b),
          borderColor: 'rgb(255,\x20255,\x20255)',
          data: _0x28c6c7,
          backgroundColor: 'rgb(255,\x2099,\x20132)',
        },
      ],
    },
    _0x2cb5e1 = 0x9c4,
    _0x29ba71 = _0x2cb5e1 / _0x526071['labels'][_0x4503af(0xda)],
    _0x551bb8 = (_0x350777) =>
      _0x350777[_0x4503af(0xcd)] === 0x0
        ? _0x350777['chart'][_0x4503af(0xab)]['y'][_0x4503af(0xde)](0x64)
        : _0x350777[_0x4503af(0xd4)]
            ['getDatasetMeta'](_0x350777[_0x4503af(0x97)])
            [_0x4503af(0xbf)][_0x350777[_0x4503af(0xcd)] - 0x1][_0x4503af(0xc9)](['y'], !![])['y'],
    _0x27ae99 = {
      x: {
        type: 'number',
        easing: 'linear',
        duration: _0x29ba71,
        from: NaN,
        delay(_0x1c9deb) {
          const _0x574b5f = _0x4503af;
          if (_0x1c9deb['type'] !== _0x574b5f(0xbf) || _0x1c9deb[_0x574b5f(0xcc)]) return 0x0;
          return (_0x1c9deb[_0x574b5f(0xcc)] = !![]), _0x1c9deb[_0x574b5f(0xcd)] * _0x29ba71;
        },
      },
      y: {
        type: _0x4503af(0x84),
        easing: _0x4503af(0x89),
        duration: _0x29ba71,
        from: _0x551bb8,
        delay(_0x7bada7) {
          const _0x578036 = _0x4503af;
          if (_0x7bada7[_0x578036(0x7f)] !== _0x578036(0xbf) || _0x7bada7[_0x578036(0x91)])
            return 0x0;
          return (_0x7bada7[_0x578036(0x91)] = !![]), _0x7bada7[_0x578036(0xcd)] * _0x29ba71;
        },
      },
    },
    _0x4b94c8 = {
      type: _0x4503af(0x96),
      data: _0x526071,
      options: {
        animation: _0x27ae99,
        interaction: { intersect: ![] },
        plugins: { legend: ![] },
        radius: 0x0,
        scales: {
          x: { grid: { display: ![] }, ticks: { font: { family: _0x4503af(0x81), size: 0x12 } } },
          y: { beginAtZero: !![], ticks: { font: { family: _0x4503af(0x81), size: 0x14 } } },
        },
      },
    },
    _0x3f65ca = new Chart(document[_0x4503af(0xcb)](_0x4503af(0xa0)), _0x4b94c8);
}
function prevSlider() {
  const _0x4069cd = _0x533dfc;
  nowCount--,
    (left += sliderItemWidth),
    checkListCount(),
    (resultSlider[_0x4069cd(0xc3)][_0x4069cd(0x7e)] = left + 'px'),
    (countBox[_0x4069cd(0x8f)] = nowCount + 0x1 + _0x4069cd(0x99) + childCount);
}
function nextSlider() {
  const _0x27271d = _0x533dfc;
  nowCount++,
    (left -= sliderItemWidth),
    checkListCount(),
    (resultSlider[_0x27271d(0xc3)][_0x27271d(0x7e)] = left + 'px'),
    (countBox[_0x27271d(0x8f)] = nowCount + 0x1 + _0x27271d(0x99) + childCount);
}
function _0x375a() {
  const _0x4d163e = [
    'from',
    '<p>💡\x20',
    'getPixelForValue',
    'left',
    'type',
    '.showResult',
    'DungGeunMo',
    'zIndex',
    'nickName',
    'number',
    '.lanking-box',
    'sort',
    '<p>틀린\x20문제가\x20없습니다.</p>',
    '.result-slider',
    'linear',
    '.result-box',
    'database',
    '4658280IaugwU',
    '874090SUNXnf',
    'myScore',
    'textContent',
    '1PVIqfy',
    'yStarted',
    'flex',
    '.go-select-box',
    '.lanking-title',
    'score',
    'line',
    'datasetIndex',
    'addEventListener',
    '\x20/\x20',
    '<canvas\x20id=\x22myChart\x22></canvas>',
    '점수\x20분포',
    'subjects',
    '22UDEZoH',
    'slider_contents',
    '1788McHHdL',
    '#myChart',
    '5620887wowKGU',
    'inpAnswers',
    'nick',
    '1804986ARHXvo',
    'createElement',
    '점\x20입니다.',
    'width',
    'none',
    '20XmWFyx',
    'disabled',
    'scales',
    'var(--color-font-1)',
    '</div>',
    'className',
    '문제를\x20맞추었습니다.\x20최종\x20점수는\x20',
    'questions',
    '.show-lanking-btn',
    'ref',
    'wrong',
    'map',
    '2001110CjpnTu',
    'child',
    'set',
    '.btn-end',
    'div',
    '1361134QCMByW',
    'color',
    '문제\x20중\x20',
    'right',
    'once',
    'data',
    '내\x20제출\x20:\x20',
    'Top\x20Lank',
    '.btn-next-slide',
    'style',
    'appendChild',
    'getItem',
    '.show-study-btn',
    '.select-box',
    'lanking-box-child',
    'getProps',
    'value',
    'querySelector',
    'xStarted',
    'index',
    'setAttribute',
    'innerHTML',
    '정답\x20:\x20',
    '.btn-prev-slide',
    '.chart',
    '2429ZxJUGg',
    'chart',
    'push',
    'click',
    'nickname',
    '1\x20/\x20',
    'display',
    'length',
    'parse',
  ];
  _0x375a = function () {
    return _0x4d163e;
  };
  return _0x375a();
}
function checkListCount() {
  if (nowCount === childCount - 0x1) btnInvisible(nextSlideBtn);
  else btnVisible(nextSlideBtn);
  if (nowCount === 0x0) btnInvisible(prevSlideBtn);
  else btnVisible(prevSlideBtn);
}
function btnVisible(_0x4caa90) {
  const _0x4be16d = _0x533dfc;
  (_0x4caa90[_0x4be16d(0xc3)][_0x4be16d(0xbb)] = _0x4be16d(0xac)),
    _0x4caa90['removeAttribute'](_0x4be16d(0xaa));
}
function btnInvisible(_0x58fa4d) {
  const _0xbfa20e = _0x533dfc;
  (_0x58fa4d[_0xbfa20e(0xc3)][_0xbfa20e(0xbb)] = 'var(--color-font-2)'),
    _0x58fa4d[_0xbfa20e(0xce)]('disabled', !![]);
}
function showEnd() {
  const _0x1df4a8 = _0x533dfc;
  endBox[_0x1df4a8(0xc3)][_0x1df4a8(0x82)] = '10';
}
function offEnd() {
  const _0x446653 = _0x533dfc;
  endBox[_0x446653(0xc3)]['zIndex'] = '-1';
}
