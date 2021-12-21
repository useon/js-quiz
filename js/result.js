let right = 0;
let wrong = 0;

const showBtn = document.querySelector('.showResult');
const myScore = document.querySelector('.score');
//우진테스트
const studyBtn = document.querySelector('.studyBtn');
const resultSlider = document.querySelector('.result-slider');
studyBtn.addEventListener('click', showStudy);
const sliderItemWidth = 400;
let left = 0;
let childCount = 0;
let nowCount = 0;
const nextSlideBtn = document.querySelector('.btn-next-slide');
const prevSlideBtn = document.querySelector('.btn-prev-slide');
const countBox = document.querySelector('.count-box');
const endBtn = document.querySelector('.btn-end');
const endBox = document.querySelector('.end-box');
const endNo = document.querySelector('.end-btn-no');

endBtn.addEventListener('click', showEnd);
endNo.addEventListener('click', offEnd);

// 로컬스토리지에서 데이터 불러오기
function getData() {
  questions = JSON.parse(localStorage.getItem('questions'));
  inpAnswers = JSON.parse(localStorage.getItem('inpAnswers'));
  rightAnswers = JSON.parse(localStorage.getItem('rightAnswers'));
}

// 결과
showBtn.addEventListener('click', function showResult() {
  getData();
  // console.log(questions, inpAnswers);
  calResult();
  myScore.innerHTML = `<br/>${right} 개 맞추고<br /> ${wrong} 개 틀렸습니다!`;

  // 버튼 누르면 결과보이기
  showBtn.disabled = true;
  showBtn.classList.remove('btn-join');
  showBtn.innerHTML = '<h1>👏 👏 👏</h1>';

  // 파이어베이스로 결과 전송
  firebase.database().ref('data').push({
    nickname: '익명',
    result: right,
  });

  const readData = (result) => {
    return firebase
      .database()
      .ref('data')
      .orderByChild('result')
      .once('value')
      .then((snapshot) => {
        return snapshot.val() || [];
      });
  };
  // 구현 아직 덜 됐어요
  // 콘솔에서 Promise -> PromiseResult -> Object에서 불러온 데이터가 있습니다
  console.log(readData());
});

// 맞은 개수, 틀린 개수 계산
function calResult() {
  for (let i = 0; i < inpAnswers.length; i++) {
    isAnswer(questions[i], inpAnswers[i]) ? (right += 1) : (wrong += 1);
  }
}

// 여기부터 우진테스트

function createStudyList(resultSlider) {
  for (let i = 0; i < inpAnswers.length; i++) {
    // 틀린 문제만 요소로 생성
    if (isAnswer(questions[i], inpAnswers[i])) continue;
    childCount++;
    // 들어갈 요소 생성
    const resultQuestions = document.createElement('div');
    const resultRightAnswers = document.createElement('div');
    const resultInpAnswers = document.createElement('div');
    const resultChild = document.createElement('div');
    resultChild.className += 'slider_contents';
    // 문제
    resultQuestions.textContent = questions[i];
    resultChild.appendChild(resultQuestions);
    // 정답
    resultRightAnswers.textContent = `정답 : ${rightAnswers[i]}`;
    resultChild.appendChild(resultRightAnswers);
    // 답변
    resultInpAnswers.textContent = `내 제출 : ${inpAnswers[i]}`;
    resultChild.appendChild(resultInpAnswers);
    // 한 문제의 결과박스 슬라이더에 추가
    resultSlider.appendChild(resultChild);
  }
  btnVisible(nextSlideBtn);
  resultSlider.style.width = childCount * sliderItemWidth + 'px';
  countBox.textContent = `1 / ${childCount}`;
}

function showStudy() {
  getData();
  calResult();
  studyBtn.style.display = 'none';
  // 틀린 문제가 없을 경우
  if (!wrong) {
    resultSlider.innerHTML = '<p>틀린 문제가 없습니다.</p>';
    return;
  }
  btnInvisible(prevSlideBtn);
  btnVisible(nextSlideBtn);
  createStudyList(resultSlider);
}
function prevSlider() {
  nowCount--;
  left += sliderItemWidth;
  checkListCount();
  resultSlider.style.left = left + 'px';
  countBox.textContent = `${nowCount + 1} / ${childCount}`;
}

function nextSlider() {
  nowCount++;
  left -= sliderItemWidth;
  checkListCount();
  resultSlider.style.left = left + 'px';
  countBox.textContent = `${nowCount + 1} / ${childCount}`;
}

function checkListCount() {
  // 마지막 카운트
  if (nowCount === childCount - 1) {
    btnInvisible(nextSlideBtn);
  } else btnVisible(nextSlideBtn);

  if (nowCount === 0) btnInvisible(prevSlideBtn);
  else btnVisible(prevSlideBtn);
}

function btnVisible(btn) {
  btn.style.color = 'var(--color-font-1)';
  btn.removeAttribute('disabled');
}

function btnInvisible(btn) {
  btn.style.color = 'var(--color-font-2)';
  btn.setAttribute('disabled', true);
}

function showEnd() {
  endBox.style.zIndex = '10';
}

function offEnd() {
  endBox.style.zIndex = '-1';
}
