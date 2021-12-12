var right = 0;
var wrong = 0;

const resRight = document.querySelector(".right");
const resWrong = document.querySelector(".wrong");
const showBtn = document.querySelector(".showResult");

// 로컬스토리지에서 데이터 불러오기
function getData() {
  questions = JSON.parse(localStorage.getItem("questions"));
  inpAnswers = JSON.parse(localStorage.getItem("inpAnswers"));
}

// 결과
showBtn.addEventListener("click", function showResult() {
  getData();
  console.log(questions, inpAnswers);
  calResult();
  resRight.innerHTML = "맞은 개수 : " + right;
  resWrong.innerHTML = "틀린 개수 : " + wrong;
});

// 맞은 개수, 틀린 개수 계산
function calResult() {
  for (let i = 0; i < inpAnswers.length; i++) {
    isAnswer(questions[i], inpAnswers[i]) ? (right += 1) : (wrong += 1);
  }
}
