const timer = document.querySelector('.timer');
const startBtn = document.querySelector('#btn-init');
const nextBtn = document.querySelector('.btn-next');
okBtn = document.querySelector('.btn-ok');
let interval;

// centisecond 단위로 입력하면 됩니다
// TIME = 18000 -> time limit 3분으로 설정
let TIME = 18000;

// 타이머 일시정지
function pauseTimer() {
  clearInterval(interval);
}

// 타이머 시작 (리셋 및 시간줄이기)
function startTimer() {
  resetTimer();
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
// okBtn.addEventListener('click', startTimer);