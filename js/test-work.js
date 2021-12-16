// 결과값 저장 배열선언
const questions = [];
const inpAnswers = [];
const rightAnswers = [];

let isPause = false;

// 시작 > 출력 > input > 제출 > 정답박스 > 오답확인
const startBtn = document.querySelector('.btn-start');
const questionBox = document.querySelector('.question-box');
const inpAnswer = document.querySelector('.input-box');
const submitBtn = document.querySelector('.btn-submit');
const rightAnswerBox = document.querySelector('.right-answer-box');
const rightAnswerOutput = document.querySelector('.right-answer');
const wrongConfirmBtn = document.querySelector('.btn-confirm');

// 시작 > 제출(=input) > 오답확인
startBtn.addEventListener('click', testStart);
inpAnswer.addEventListener('keydown', enterKeydown);
submitBtn.addEventListener('click', successCheck);
wrongConfirmBtn.addEventListener('click', next);

// 최초 시작버튼
function testStart() {
  // UI 렌더링 > 문제 시작
  toggleToVisible();
  startBtn.remove();
  next();
}

// 엔터키 입력 시 문제 제출 (오답보여줄때 작동 안되도록 수정필요)
function enterKeydown(e) {
  if (e.key == 'Enter') {
    // 정지상태라면 엔터 -> next()
    if (isPause) next();
    else successCheck();
  }
}

// 제출
function successCheck() {
  // 답란이 비어있다면 실행 X
  if (isEmpty()) return;
  // 사용자 입력 데이터 저장
  inpAnswers.push(inpAnswer.value);
  // 정/오답 분기
  if (isAnswer(questionBox.innerText, inpAnswer.value)) {
    next();
  } else {
    showRightAnswer();
  }
}

// 정답일 경우
function next() {
  // 타이머 재시작 > 버튼 활성화 > 정답박스 접기 > 다음문제 출력
  reStartTimer();
  isPause = false;
  submitBtn.removeAttribute('disabled');
  rightAnswerBox.style.height = null;
  showQuestion();
  clearInputBox();
}

// 오답일 경우
function showRightAnswer() {
  // 타이머 정지 > 제출버튼 비활성화 > 정답박스 열기
  pauseTimer();
  isPause = true;
  submitBtn.setAttribute('disabled', true);
  rightAnswerBox.style.height = '100px';
  // 정답박스 준비 (테스트용)
  rightAnswerOutput.innerHTML = `정답 : ${getAnswer(questions[questions.length - 1])}`;
}

// 문제 출력
function showQuestion() {
  fetch('/data/data.json')
    .then((response) => response.json())
    .then((data) => {
      // 문제 데이터 저장 및 출력
      let question = getQuestion(data);
      questionBox.innerHTML = question;
      // 결과에 사용 할 배열에 문제저장
      questions.push(question);
      rightAnswers.push(getAnswer(question));
      console.log(rightAnswers);
    });
}

// input 비어있는지 체크
function isEmpty() {
  if (inpAnswer.value === '') {
    inpAnswer.focus();
    return true;
  }
  return false;
}

// input 초기화
function clearInputBox() {
  inpAnswer.value = '';
}

// 최종 제출시 로컬스토리지에 데이터 저장 (버튼 클릭으로 테스트 -> 타이머 종료 구현시 수정)
const goBtn = document.querySelector('.go-result');
goBtn.addEventListener('click', function () {
  localStorage.setItem('questions', JSON.stringify(questions));
  localStorage.setItem('inpAnswers', JSON.stringify(inpAnswers));
  localStorage.setItem('rightAnswers', JSON.stringify(rightAnswers));
  // 테스트용 페이지 전환
  location.href = '../page/result.html';
});

function toggleToVisible() {
  document.querySelector('.invisible').classList.replace('invisible', 'visible');
  document.querySelector('.visible').classList.replace('visible', 'invisible');
}
