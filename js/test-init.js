var questions = [];
var inpAnswers = [];

const questionBox = document.querySelector(".question-box");
const initButton = document.querySelector(".btn-init");
let inpAnswer = document.querySelector(".input-box");

// 시작버튼 이벤트 리스너
initButton.addEventListener("click", testInit);

// 다음 버튼 이벤트 리스너 (임시)
document.querySelector(".btn-next2").addEventListener("click", next);

function testInit() {
  // 타이머 시작 timer.js > line: 37 에 이미 정의됨
  // startTimer();

  // .question-box 렌더링
  toggleToVisible();
  initButton.remove();

  // 첫 문제 .question-box 에 출력
  // 데이터 로드 > 출력
  fetch("/data/data.json")
    .then((response) => response.json())
    .then((data) => {
      let question = getQuestion(data);
      questionBox.innerHTML = question;
      questions.push(question);
    });
}

function toggleToVisible() {
  document
    .querySelector(".invisible")
    .classList.replace("invisible", "visible");
  document.querySelector(".visible").classList.replace("visible", "invisible");
}

function next() {
  // 데이터 로드 > 출력
  fetch("/data/data.json")
    .then((response) => response.json())
    .then((data) => {
      // 문제 데이터 저장 및 출력
      let question = getQuestion(data);
      questionBox.innerHTML = question;
      questions.push(question);
    });
  // 사용자 입력 데이터 저장
  inpAnswers.push(inpAnswer.value);

  // test code
  // console.log(questions, inpAnswers);
}

// 최종 제출시 로컬스토리지에 데이터 저장 (버튼 클릭으로 테스트 -> 타이머 종료 구현시 수정)
const goBtn = document.querySelector(".go-result");
goBtn.addEventListener("click", function () {
  localStorage.setItem("questions", JSON.stringify(questions));
  localStorage.setItem("inpAnswers", JSON.stringify(inpAnswers));
  // 테스트용 페이지 전환
  location.href = "../page/result.html";
});
