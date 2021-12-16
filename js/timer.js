const timer = document.querySelector('.timer');

// 제출버튼
const submitBtn = document.querySelector('.btn-submit');
// 오답 확인버튼
const wrongConfirmBtn = document.querySelector('.btn-confirm');
let interval;

// centisecond 단위로 입력하면 됩니다
// TIME = 18000 -> time limit 3분으로 설정

// 타이머 일시정지
function pauseTimer() {
  // 우진 테스트 : 정답 후 오답시 실행됨
  console.log('pauseTimer()실행');
  clearInterval(interval);
}

// 타이머 시작 (리셋 및 시간줄이기)
function startTimer() {
  resetTimer();
  interval = setInterval(updateTimer, 10);
  // 10ms(10centisecond)마다 updateTimer 실행
}

// 타이머 재시작
function reStartTimer() {
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(updateTimer, 10);
  // 10ms(10centisecond)마다 updateTimer 실행
}

// 타이머 리셋 (남은 시간을 3분으로 설정)
function resetTimer() {
  TIME = 18000;
}

// 타이머 업데이트 (시간 html에 표시 및 남은시간 줄이기)
function updateTimer() {
  const checkMinutes = Math.floor(TIME / 6000);
  const minute = checkMinutes % 6000;
  const second = Math.floor((TIME % 6000) / 100);
  const centisecond = TIME % 100;

  timer.textContent = `
    ${minute < 10 ? `0${minute}` : minute}:
    ${second < 10 ? `0${second}` : second}:
    ${centisecond < 10 ? `0${centisecond}` : centisecond}
  `;

  TIME--;

  if (minute === 0 && second === 0 && centisecond === 0) {
    pauseTimer();
  }
}

startBtn.addEventListener('click', startTimer);
// wrongConfirmBtn.addEventListener('click', startTimer);
