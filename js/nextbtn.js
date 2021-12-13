var questions = [];
var inpAnswers = [];
// timer.js 에 이미 선언됨
// const nextBtn = document.querySelector('.btn-next');
let inpAnswer = document.querySelector('.input-box');

nextBtn.addEventListener('click', next);

// input 에 keydown 이벤트 연결
inpAnswer.addEventListener('keydown', enterKeydown);

// 엔터키 입력 시 문제 제출 -> 다음 문제 출력
function enterKeydown(e) {
  if (e.key == 'Enter') {
    next();
  }
}

function next() {
  // 답란이 비어있다면 실행 X
  if (checkEmpty()) return;
  fetch('/data/data.json')
    .then((response) => response.json())
    .then((data) => {
      // 문제 데이터 저장 및 출력
      let question = getQuestion(data);
      questionBox.innerHTML = question;
      questions.push(question);

      // 아래에 정답 출력 (테스트용)
      const rightAnswerBox = document.querySelector('.right-answer-test');
      rightAnswerBox.innerHTML = `정답 : ${eval(question)}`;
    });
  // 사용자 입력 데이터 저장
  inpAnswers.push(inpAnswer.value);

  // 답란 비우기
  clearInputBox();
  // test code
  // console.log(questions, inpAnswers);
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
