const nextButton = document.querySelector('.btn-menual-next');
const prevButton = document.querySelector('.btn-menual-prev');
const menualContent = document.querySelector('.box-manual > p');
// 다음 버튼 이벤트 리스너
nextButton.addEventListener('click', nextMenual);
prevButton.addEventListener('click', prevMenual);
let menualArr = [
  'JS 퀴즈에 오신것을 환영합니다. :)',
  'JS 관련 문제를 준비했습니다.',
  '제한시간내에 문제를 최대한 푸셔야합니다. 제한시간은 3분입니다.',
  '[엔터키]를 사용하여 답안 제출이 가능합니다.',
  '정답은 +10점, 오답은 -10점입니다.',
  '정답*콤보*에 따라 점수가 더 많이 증가합니다. (ex: 5콤보일 시 10 + 5점)',
  '7콤보부터는 *제한시간*이 늘어납니다.',
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
