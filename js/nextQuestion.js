const questions = [];
const inpAnswers = [];
const rightAnswers = [];
// timer.js 에 이미 선언됨
// const submitBtn = document.querySelector('.btn-submit');
// const wrongConfirmBtn = document.querySelector('.btn-confirm');
const inpAnswer = document.querySelector('.input-box');
const rightAnswerBox = document.querySelector('.right-answer-box');
const rightAnswerOutput = document.querySelector('.right-answer');

submitBtn.addEventListener('click', successCheck);
wrongConfirmBtn.addEventListener('click', next);
// input 에 엔터키 이벤트 연결
inpAnswer.addEventListener('keydown', enterKeydown);

// 엔터키 입력 시 문제 제출 (오답보여줄때 작동 안되도록 수정필요)
function enterKeydown(e) {
  if (e.key == 'Enter') {
    successCheck();
  }
}

// 제출
function successCheck() {
  // 답란이 비어있다면 실행 X
  if (isEmpty()) return;
  // 정/오답 분기
  if (isAnswer(questionBox.innerText, inpAnswer.value)) {
    next();
  } else {
    showRightAnswer();
  }
}

// 정답일 경우
function next() {
  // 타이머 재시작
  reStartTimer();
  // 버튼 활성화
  submitBtn.removeAttribute('disabled');
  // 정답박스 접기
  rightAnswerBox.style.height = null;
  // 다음문제 출력
  showQuestion();
  // 답란 비우기
  clearInputBox();
  // 사용자 입력 데이터 저장
  inpAnswers.push(inpAnswer.value);
}

// 오답일 경우
function showRightAnswer() {
  // 타이머 정지
  pauseTimer();
  // 제출버튼 비활성화
  submitBtn.setAttribute('disabled', true);
  // 정답박스 열기
  rightAnswerBox.style.height = '100px';
}

// 테스트용
console.log(rightAnswers);

// 문제 출력
function showQuestion() {
  fetch('/data/data.json')
    .then((response) => response.json())
    .then((data) => {
      // 문제 데이터 저장 및 출력
      let question = getQuestion(data);
      questionBox.innerHTML = question;
      questions.push(question);
      rightAnswers.push(getAnswer(question));
      console.log(rightAnswers);
      // 정답박스 준비 (테스트용)
      rightAnswerOutput.innerHTML = `정답 : ${getAnswer(question)}`;
    });
}

// 답란이 비어있는지 체크
function isEmpty() {
  if (inpAnswer.value === '') {
    inpAnswer.focus();
    return true;
  }
  return false;
}

// 입력란 초기화
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
