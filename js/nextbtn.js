var questions = [];
var inpAnswers = [];
// timer.js 에 이미 선언됨
// const nextBtn = document.querySelector('.btn-next');
let inpAnswer = document.querySelector('.input-box');

nextBtn.addEventListener('click', next);
function next() {
  fetch('/data/data.json')
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
const goBtn = document.querySelector('.go-result');
goBtn.addEventListener('click', function () {
  localStorage.setItem('questions', JSON.stringify(questions));
  localStorage.setItem('inpAnswers', JSON.stringify(inpAnswers));
  // 테스트용 페이지 전환
  location.href = '../page/result.html';
});
