const nextButton = document.querySelector('.btn-menual-next');
const prevButton = document.querySelector('.btn-menual-prev');
const menualContent = document.querySelector('.box-manual > p');
// 다음 버튼 이벤트 리스너
nextButton.addEventListener('click', nextMenual);
prevButton.addEventListener('click', prevMenual);
let menualArr = [
  'JS 퀴즈에 오신것을 환영합니다. :)',
  'JS 퀴즈에서는 자바스크립트 문법을 활용한 문제가 출제됩니다.',
  '[엔터키]를 사용하여 답안 제출이 가능합니다.',
  '문제에 주어진 자바스크립트 표현식의 값을 답안으로 제출하시면 됩니다.',
  '문자열은 따옴표로, 배열은 대괄호로, 객체는 중괄호로 감싸야 정답으로 인정됩니다.',
  '제한시간 3분이고, 정답을 맞추면 점수를 얻습니다.',
  '정답은 +10점, 오답은 -5점입니다.',
  '정답을 연속으로 맞추면 추가 점수를 얻을 수 있습니다.',
  '7연속 이상 정답을 맞추면 추가 시간을 얻을 수 있습니다.',
  '[문제 출력] 버튼을 눌러 시작하세요!',
];

let menualCount = 0;
menualContent.innerHTML = menualArr[0];

function nextMenual() {
  // 마지막 메뉴얼일때 다음 버튼 삭제
  if (menualCount == menualArr.length - 2) {
    nextButton.style.display = 'none';
  }
  menualContent.innerHTML = menualArr[++menualCount];
  prevButton.style.display = 'block';
}

function prevMenual() {
  // 마지막 메뉴얼일때 다음 버튼 삭제
  if (menualCount == 1) {
    prevButton.style.display = 'none';
  }
  menualContent.innerHTML = menualArr[--menualCount];
  nextButton.style.display = 'block';
}
