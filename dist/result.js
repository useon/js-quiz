const _0x164640=_0x34c6;(function(_0x13e175,_0x1fe29b){const _0x384298=_0x34c6,_0x34969a=_0x13e175();while(!![]){try{const _0xc6524c=parseInt(_0x384298(0xaf))/0x1+-parseInt(_0x384298(0x8b))/0x2*(-parseInt(_0x384298(0x9f))/0x3)+parseInt(_0x384298(0xbd))/0x4*(-parseInt(_0x384298(0x8c))/0x5)+parseInt(_0x384298(0x78))/0x6*(-parseInt(_0x384298(0xc8))/0x7)+parseInt(_0x384298(0xd7))/0x8*(parseInt(_0x384298(0xab))/0x9)+parseInt(_0x384298(0xa0))/0xa+-parseInt(_0x384298(0x77))/0xb*(-parseInt(_0x384298(0x85))/0xc);if(_0xc6524c===_0x1fe29b)break;else _0x34969a['push'](_0x34969a['shift']());}catch(_0x30a8e8){_0x34969a['push'](_0x34969a['shift']());}}}(_0x2070,0xc11a0));let rankScore=[];const showBtn=document[_0x164640(0x91)](_0x164640(0xcf)),resultBox=document[_0x164640(0x91)](_0x164640(0xa4)),chartBox=document[_0x164640(0x91)](_0x164640(0x98));showBtn[_0x164640(0x8e)](_0x164640(0xc9),()=>{const _0x503938=_0x164640;showBtn['remove'](),resultBox[_0x503938(0xc3)]='총\x20'+(right+wrong)+_0x503938(0xaa)+right+_0x503938(0xa1)+myScore+'점\x20입니다.';});const studyBtn=document[_0x164640(0x91)](_0x164640(0xd6)),resultSlider=document[_0x164640(0x91)](_0x164640(0xc0));studyBtn['addEventListener'](_0x164640(0xc9),showStudy);const sliderItemWidth=0x190;let left=0x0,childCount=0x0,nowCount=0x0;const nextSlideBtn=document[_0x164640(0x91)](_0x164640(0x97)),prevSlideBtn=document[_0x164640(0x91)](_0x164640(0xc5)),countBox=document[_0x164640(0x91)](_0x164640(0x7a)),endBtn=document[_0x164640(0x91)](_0x164640(0xa8)),endBox=document[_0x164640(0x91)](_0x164640(0xb1)),endNo=document[_0x164640(0x91)](_0x164640(0xb8));endBtn[_0x164640(0x8e)]('click',showEnd),endNo[_0x164640(0x8e)](_0x164640(0xc9),offEnd);const selectBox=document['querySelector'](_0x164640(0x7d)),rankingBtn=document['querySelector'](_0x164640(0xb0)),goSelectBoxBtn=document[_0x164640(0x91)](_0x164640(0xad)),lankingTitle=document['querySelector'](_0x164640(0xc1)),lankingBox=document[_0x164640(0x91)](_0x164640(0xc2));rankingBtn[_0x164640(0x8e)](_0x164640(0xc9),showLanking),goSelectBoxBtn[_0x164640(0x8e)](_0x164640(0xc9),goSelectBox);function getData(){const _0x7d6e44=_0x164640;questions=JSON[_0x7d6e44(0xb3)](localStorage[_0x7d6e44(0x83)](_0x7d6e44(0xbb))),inpAnswers=JSON['parse'](localStorage[_0x7d6e44(0x83)](_0x7d6e44(0xa9))),rightAnswers=JSON[_0x7d6e44(0xb3)](localStorage['getItem'](_0x7d6e44(0xa7))),right=JSON['parse'](localStorage[_0x7d6e44(0x83)](_0x7d6e44(0xa3))),wrong=JSON['parse'](localStorage[_0x7d6e44(0x83)](_0x7d6e44(0xd2))),nickName=JSON['parse'](localStorage[_0x7d6e44(0x83)](_0x7d6e44(0x94))),myScore=JSON['parse'](localStorage[_0x7d6e44(0x83)]('myScore'));}function goSelectBox(){const _0x59bf08=_0x164640;selectBox[_0x59bf08(0x9b)][_0x59bf08(0xba)]=_0x59bf08(0xa2),lankingBox[_0x59bf08(0x9b)][_0x59bf08(0xba)]='none',lankingTitle[_0x59bf08(0x9b)][_0x59bf08(0xba)]='none',btnInvisible(prevSlideBtn),btnInvisible(nextSlideBtn),countBox[_0x59bf08(0xc4)]=_0x59bf08(0x82);}function showLanking(){const _0x21581d=_0x164640;selectBox[_0x21581d(0x9b)]['display']=_0x21581d(0xd0),lankingBox[_0x21581d(0x9b)][_0x21581d(0xba)]=_0x21581d(0xb2),lankingTitle['style'][_0x21581d(0xba)]=_0x21581d(0xb2),countBox[_0x21581d(0xc4)]=_0x21581d(0x9c);}function showStudy(){const _0x42a0eb=_0x164640;selectBox[_0x42a0eb(0x9b)]['display']=_0x42a0eb(0xd0);if(!wrong){resultSlider[_0x42a0eb(0xc3)]=_0x42a0eb(0x88),resultSlider['style'][_0x42a0eb(0x86)]=sliderItemWidth+'px';return;}if(0x1<wrong)btnVisible(nextSlideBtn);else btnInvisible(nextSlideBtn);btnInvisible(prevSlideBtn),countBox[_0x42a0eb(0xc4)]='1\x20/\x20'+childCount;}function createStudyList(_0x13110a){const _0x26a1be=_0x164640;for(let _0xeb79bb=0x0;_0xeb79bb<inpAnswers[_0x26a1be(0x93)];_0xeb79bb++){if(isAnswer(questions[_0xeb79bb],inpAnswers[_0xeb79bb]))continue;childCount++;const _0x4c0868=document[_0x26a1be(0xc7)](_0x26a1be(0xbf)),_0x12211f=document['createElement'](_0x26a1be(0xbf)),_0x2e22f3=document[_0x26a1be(0xc7)]('div'),_0x4943d2=document[_0x26a1be(0xc7)](_0x26a1be(0xbf));_0x4943d2[_0x26a1be(0xd4)]+='slider_contents',_0x4c0868['textContent']=questions[_0xeb79bb],_0x4943d2[_0x26a1be(0x9a)](_0x4c0868),_0x12211f[_0x26a1be(0xc4)]=_0x26a1be(0x84)+rightAnswers[_0xeb79bb],_0x4943d2[_0x26a1be(0x9a)](_0x12211f),_0x2e22f3[_0x26a1be(0xc4)]='내\x20제출\x20:\x20'+inpAnswers[_0xeb79bb],_0x4943d2[_0x26a1be(0x9a)](_0x2e22f3),_0x13110a[_0x26a1be(0x9a)](_0x4943d2);}_0x13110a['style'][_0x26a1be(0x86)]=childCount*sliderItemWidth+'px';}function createLankingList(){const _0x38962f=_0x164640;let _0xca6327=0x63;if(rankScore[_0x38962f(0x93)]<_0xca6327)_0xca6327=rankScore['length'];for(let _0x4499ff=0x1;_0x4499ff<=_0xca6327;_0x4499ff++){const _0x31311f=document[_0x38962f(0xc7)]('div'),_0x13f36a=document['createElement'](_0x38962f(0xbf)),_0x51d8b4=document['createElement'](_0x38962f(0xbf)),_0x32081b=document[_0x38962f(0xc7)](_0x38962f(0xbf));_0x32081b[_0x38962f(0xd4)]+=_0x38962f(0x8a);if(_0x4499ff==0x1)_0x31311f[_0x38962f(0xc4)]='👑';else{if(_0x4499ff==0x2)_0x31311f[_0x38962f(0xc4)]='🥇';else{if(_0x4499ff==0x3)_0x31311f['textContent']='🥈';else{if(_0x4499ff==0x4)_0x31311f[_0x38962f(0xc4)]='🥉';else _0x31311f['textContent']=_0x4499ff;}}}_0x32081b['appendChild'](_0x31311f),_0x13f36a[_0x38962f(0xc4)]=''+rankScore[_0x4499ff-0x1]['nick'],_0x32081b[_0x38962f(0x9a)](_0x13f36a),_0x51d8b4[_0x38962f(0xc4)]=''+rankScore[_0x4499ff-0x1][_0x38962f(0xcb)],_0x32081b['appendChild'](_0x51d8b4),lankingBox['appendChild'](_0x32081b);}}function loadData(){const _0xb995cf=_0x164640;let _0xc95fe9=![],_0x1bc431=0x0;const _0x37312e=firebase[_0xb995cf(0xb5)]()[_0xb995cf(0x7b)](_0xb995cf(0xae));_0x37312e[_0xb995cf(0x79)]('value',_0x38d38b=>{const _0x515043=_0xb995cf,_0x12621f=_0x38d38b[_0x515043(0x96)]();for(let _0x28e962 in _0x12621f){let _0x1cf267=_0x12621f[_0x28e962][_0x515043(0xac)],_0x4fd01a=_0x12621f[_0x28e962][_0x515043(0xcb)];nickName===_0x1cf267?(_0xc95fe9=!![],_0x1bc431=_0x4fd01a):rankScore['push']({'nick':_0x1cf267,'score':_0x4fd01a});}if(_0xc95fe9){let _0x56b7ec=getMax(_0x1bc431,myScore);setData(nickName,_0x56b7ec),rankScore[_0x515043(0xcc)]({'nick':nickName,'score':_0x56b7ec});}else setData(nickName,myScore),rankScore[_0x515043(0xcc)]({'nick':nickName,'score':myScore});})[_0xb995cf(0xca)](()=>rank());}function getMax(_0x5458e5,_0x522815){if(_0x5458e5<_0x522815)return _0x522815;return _0x5458e5;}function setData(_0x1a6b87,_0x363fb8){const _0x4017e5=_0x164640;firebase[_0x4017e5(0xb5)]()[_0x4017e5(0x7b)](_0x4017e5(0xae))[_0x4017e5(0xb7)](nickName)[_0x4017e5(0x7c)]({'nickname':_0x1a6b87,'score':_0x363fb8});}function rank(){const _0x57478d=_0x164640;rankScore=rankScore['sort'](function(_0x242b5d,_0x44974e){const _0x4b28a=_0x34c6;return _0x44974e[_0x4b28a(0xcb)]-_0x242b5d[_0x4b28a(0xcb)];});const _0x3bb739=rankScore[0x0]['score']+0x1;let _0x501b6d=Array['from']({'length':_0x3bb739},()=>0x0);for(let _0x386a37 of rankScore){console[_0x57478d(0xd1)](_0x386a37);}for(let _0xab3a1 of rankScore){_0x501b6d[_0xab3a1['score']]++;}loadChart(_0x501b6d,_0x3bb739),createLankingList();}function loadChart(_0x304cbd,_0x1d5aad){const _0x7f1fd9=_0x164640;chartBox[_0x7f1fd9(0xc3)]=_0x7f1fd9(0x87);const _0x2ddd29={'labels':[...Array(_0x1d5aad)][_0x7f1fd9(0x81)]((_0x40c2c0,_0x45c580)=>_0x45c580),'datasets':[{'label':_0x7f1fd9(0xa6),'borderColor':_0x7f1fd9(0xbc),'data':_0x304cbd,'backgroundColor':_0x7f1fd9(0x9d)}]},_0x3a44db=0x9c4,_0x3baf5a=_0x3a44db/_0x2ddd29[_0x7f1fd9(0xd3)]['length'],_0x566006=_0x3193ad=>_0x3193ad[_0x7f1fd9(0xb9)]===0x0?_0x3193ad[_0x7f1fd9(0xa5)]['scales']['y']['getPixelForValue'](0x64):_0x3193ad[_0x7f1fd9(0xa5)][_0x7f1fd9(0x9e)](_0x3193ad[_0x7f1fd9(0x95)])[_0x7f1fd9(0xae)][_0x3193ad[_0x7f1fd9(0xb9)]-0x1][_0x7f1fd9(0x89)](['y'],!![])['y'],_0x5d3676={'x':{'type':_0x7f1fd9(0xcd),'easing':_0x7f1fd9(0xc6),'duration':_0x3baf5a,'from':NaN,'delay'(_0x216f87){const _0x209b8f=_0x7f1fd9;if(_0x216f87['type']!==_0x209b8f(0xae)||_0x216f87[_0x209b8f(0x8f)])return 0x0;return _0x216f87['xStarted']=!![],_0x216f87[_0x209b8f(0xb9)]*_0x3baf5a;}},'y':{'type':_0x7f1fd9(0xcd),'easing':_0x7f1fd9(0xc6),'duration':_0x3baf5a,'from':_0x566006,'delay'(_0x11ab13){const _0x1cca1d=_0x7f1fd9;if(_0x11ab13[_0x1cca1d(0x90)]!==_0x1cca1d(0xae)||_0x11ab13[_0x1cca1d(0xb6)])return 0x0;return _0x11ab13[_0x1cca1d(0xb6)]=!![],_0x11ab13['index']*_0x3baf5a;}}},_0x262bd0={'type':_0x7f1fd9(0xd5),'data':_0x2ddd29,'options':{'animation':_0x5d3676,'interaction':{'intersect':![]},'plugins':{'legend':![]},'radius':0x0,'scales':{'x':{'grid':{'display':![]},'ticks':{'font':{'family':'DungGeunMo','size':0x12}}},'y':{'beginAtZero':!![],'ticks':{'font':{'family':_0x7f1fd9(0xce),'size':0x14}}}}}},_0x275b30=new Chart(document['querySelector'](_0x7f1fd9(0xb4)),_0x262bd0);}function prevSlider(){const _0x3245df=_0x164640;nowCount--,left+=sliderItemWidth,checkListCount(),resultSlider[_0x3245df(0x9b)][_0x3245df(0x99)]=left+'px',countBox[_0x3245df(0xc4)]=nowCount+0x1+_0x3245df(0x7e)+childCount;}function nextSlider(){const _0x496999=_0x164640;nowCount++,left-=sliderItemWidth,checkListCount(),resultSlider[_0x496999(0x9b)][_0x496999(0x99)]=left+'px',countBox[_0x496999(0xc4)]=nowCount+0x1+_0x496999(0x7e)+childCount;}function checkListCount(){if(nowCount===childCount-0x1)btnInvisible(nextSlideBtn);else btnVisible(nextSlideBtn);if(nowCount===0x0)btnInvisible(prevSlideBtn);else btnVisible(prevSlideBtn);}function btnVisible(_0x9f1121){const _0x24d3d8=_0x164640;_0x9f1121[_0x24d3d8(0x9b)]['color']=_0x24d3d8(0x8d),_0x9f1121[_0x24d3d8(0xbe)](_0x24d3d8(0x80));}function _0x34c6(_0x13c8ac,_0xe9f563){const _0x207027=_0x2070();return _0x34c6=function(_0x34c616,_0x4b9df8){_0x34c616=_0x34c616-0x77;let _0x40c7a2=_0x207027[_0x34c616];return _0x40c7a2;},_0x34c6(_0x13c8ac,_0xe9f563);}function _0x2070(){const _0x294e2e=['push','number','DungGeunMo','.showResult','none','log','wrong','labels','className','line','.show-study-btn','404424PXmCSW','4037CubMvt','5214wNNIVL','once','.count-box','ref','set','.select-box','\x20/\x20','zIndex','disabled','map','hello\x20:)','getItem','정답\x20:\x20','19308MPinco','width','<canvas\x20id=\x22myChart\x22></canvas>','<p>틀린\x20문제가\x20없습니다.</p>','getProps','lanking-box-child','11642CgmbUB','10mVwsqb','var(--color-font-1)','addEventListener','xStarted','type','querySelector','color','length','nickName','datasetIndex','val','.btn-next-slide','.chart','left','appendChild','style','Top\x20Lank','rgb(255,\x2099,\x20132)','getDatasetMeta','9ndfVkN','5086120iEnnOy','문제를\x20맞추었습니다.\x20최종\x20점수는\x20','block','right','.result-box','chart','점수\x20분포','rightAnswers','.btn-end','inpAnswers','문제\x20중\x20','36ZzJXTD','nickname','.go-select-box','data','927816TOGNLj','.show-lanking-btn','.end-box','flex','parse','#myChart','database','yStarted','child','.end-btn-no','index','display','questions','rgb(255,\x20255,\x20255)','1673868YqkOpM','removeAttribute','div','.result-slider','.lanking-title','.lanking-box','innerHTML','textContent','.btn-prev-slide','linear','createElement','4984gDwCwb','click','then','score'];_0x2070=function(){return _0x294e2e;};return _0x2070();}function btnInvisible(_0x2d90f3){const _0x579e68=_0x164640;_0x2d90f3[_0x579e68(0x9b)][_0x579e68(0x92)]='var(--color-font-2)',_0x2d90f3['setAttribute']('disabled',!![]);}function showEnd(){const _0x5aec17=_0x164640;endBox[_0x5aec17(0x9b)][_0x5aec17(0x7f)]='10';}function offEnd(){endBox['style']['zIndex']='-1';}