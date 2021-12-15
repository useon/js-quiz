const questionBox = document.querySelector('.question-box');
// timer.js 에 선언되어 있던것 가져옴.(선후관계)
const startBtn = document.querySelector('.btn-start');

// 시작버튼 이벤트 리스너
startBtn.addEventListener('click', testStart);

function testStart() {
  // 타이머 시작 timer.js > line: 37 에 이미 정의됨
  // startTimer();

  // .question-box 렌더링
  toggleToVisible();
  startBtn.remove();

  // 첫 문제 .question-box 에 출력
  // 데이터 로드 > 출력
  fetch('/data/data.json')
    .then((response) => response.json())
    .then((data) => {
      let question = getQuestion(data);
      questionBox.innerHTML = question;
      questions.push(question);

      // 첫문제 정답박스 준비
      rightAnswerOutput.innerHTML = `정답 : ${getAnswer(question)}`;
    });
}

function toggleToVisible() {
  document.querySelector('.invisible').classList.replace('invisible', 'visible');
  document.querySelector('.visible').classList.replace('visible', 'invisible');
}
