var right = 0;
var wrong = 0;

const resBtn = document.querySelector(".showResult");
const resRight = document.querySelector(".right");
const resWrong = document.querySelector(".wrong");

resBtn.addEventListener("click", showResult());

function getData() {
  // 구현중
}

function showResult() {
  getData();
  console.log(questions, inpAnswers);
  calResult();
  resRight.innerHTML = "맞은 개수 : " + right;
  resWrong.innerHTML = "틀린 개수 : " + wrong;
}

function calResult() {
  for (let i = 0; i < inpAnswers.length; i++) {
    inpAnswers[i] == isAnswer(questions[i]) ? (right += 1) : (wrong += 1);
  }
}
