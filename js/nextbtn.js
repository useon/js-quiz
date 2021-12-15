var questions = [];
var inpAnswers = [];
// timer.js 에 이미 선언됨
// const nextBtn = document.querySelector('.btn-next');
let inpAnswer = document.querySelector('.input-box');
let okBtn = document.querySelector('.btn-ok');
let rightAnswerBox = document.querySelector('.right-answer-box');

nextBtn.addEventListener('click', successCheck);
okBtn.addEventListener('click', next);
// input 에 keydown 이벤트 연결
inpAnswer.addEventListener('keydown', enterKeydown);

// 엔터키 입력 시 문제 제출 -> 다음 문제 출력
function enterKeydown(e) {
  if (e.key == 'Enter') {
    next();
  }
}

// 틀렸을 때 정답 띄우기
function showRightAnswer() {
  // 타이머 일시정지
  // timerPause();

  // 버튼 비활성화
  nextBtn.setAttribute('disabled', true);
  // 정답박스 열기
  rightAnswerBox.style.height = '100px';
}

function successCheck() {
  // 답란이 비어있다면 실행 X
  if (checkEmpty()) return;
  // 정답 체크 분기 (미완성)
  // 첫번째 분기 : 정답일때
  // else : 오답일때 정답보여주기
  if (0) {
    next();
  } else {
    showRightAnswer();
  }
}

function next() {
  // 버튼 활성화
  nextBtn.removeAttribute('disabled');
  // 정답박스 접기
  rightAnswerBox.style.height = null;

  // 다음문제 출력
  showQuestion();
  // 사용자 입력 데이터 저장
  inpAnswers.push(inpAnswer.value);
  // 답란 비우기
  clearInputBox();
}

// 문제 출력
function showQuestion() {
  fetch('/data/data.json')
    .then((response) => response.json())
    .then((data) => {
      // 문제 데이터 저장 및 출력
      let question = getQuestion(data);
      questionBox.innerHTML = question;
      questions.push(question);

      // 정답박스 준비 (테스트용)
      rightAnswerBox.innerHTML = `정답 : ${eval(question)}`;
    });
}

// 답란이 비어있는지 체크
function checkEmpty() {
  if (inpAnswer.value === '') {
    inpAnswer.focus();
    return true;
  }
  return false;
}

function clearInputBox() {
  inpAnswer.value = '';
}

// 최종 제출시 로컬스토리지에 데이터 저장 (버튼 클릭으로 테스트 -> 타이머 종료 구현시 수정)
const goBtn = document.querySelector('.go-result');
goBtn.addEventListener('click', function () {
  localStorage.setItem('questions', JSON.stringify(questions));
  localStorage.setItem('inpAnswers', JSON.stringify(inpAnswers));
  // 테스트용 페이지 전환
  location.href = '../page/result.html';
});
