const nextButton = document.querySelector('.btn-menual');

// 다음 버튼 이벤트 리스너
nextButton.addEventListener('click', nextMenual);

let menualArr = [
  'JS 입문과 관련된 문제를 준비했습니다.',
  '다음 페이지에서 시작! 버튼을 누르면 문제가 시작됩니다.',
  '제한시간내에 문제를 최대한 푸셔야합니다. 제한시간은 5분입니다.',
  '문제 유형은 ~와 ~가 있습니다(관련사진이나 문구)',
  '자! 이제 아래 문제풀러가기 버튼을 눌러 시작해주세요.',
];

let menualCount = 0;

function nextMenual() {
  document.querySelector('.box-manual > p').innerHTML = menualArr[menualCount];
  menualCount++;
  // 마지막 메뉴얼일때 다음 버튼 삭제
  if (menualCount == menualArr.length) {
    nextButton.remove();
  }
}
