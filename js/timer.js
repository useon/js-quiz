const timer = document.querySelector('.timer');
const startBtn = document.querySelector('#btn-init');
const nextBtn = document.querySelector('.btn-next');
okBtn = document.querySelector('.btn-ok');
let interval;

// centisecond 단위로 입력하면 됩니다
// TIME = 18000 -> time limit 3분으로 설정
let TIME = 18000;

function startTimer() {
  resetTimer();
  interval = setInterval(updateTimer, 10);
}

function resetTimer() {
  TIME = 18000;
}

function pauseTimer() {
  clearInterval(interval);
}

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
}

startBtn.addEventListener('click', startTimer);
nextBtn.addEventListener('click', pauseTimer);
okBtn.addEventListener('click', startTimer);

// 추가 구현 필요 : 0초 됐을 경우
