const questionBox = document.querySelector('.question-box');
const initButton = document.querySelector('.btn-init');

// 시작버튼 이벤트 리스너
initButton.addEventListener('click', testInit);

function testInit() {
  // 타이머 시작 timer.js > line: 37 에 이미 정의됨
  // startTimer();

  // .question-box 렌더링
  toggleToVisible();
  initButton.remove();

  // 첫 문제 .question-box 에 출력
  // 데이터 로드 > 출력
  fetch('/data/data.json')
    .then((response) => response.json())
    .then((data) => {
      let question = getQuestion(data);
      questionBox.innerHTML = question;
      questions.push(question);

      // 아래에 정답 출력 (테스트용)
      const rightAnswerBox = document.querySelector('.right-answer-test');
      rightAnswerBox.innerHTML = `정답 : ${eval(question)}`;
    });
}

function toggleToVisible() {
  document.querySelector('.invisible').classList.replace('invisible', 'visible');
  document.querySelector('.visible').classList.replace('visible', 'invisible');
}
