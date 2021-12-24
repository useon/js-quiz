let rankScore = []; // 랭킹 배열

const showBtn = document.querySelector('.showResult'); // 결과보기 버튼

// 차트 동적생성 준비
const chartBox = document.querySelector('.chart');

// 버튼 누르면 결과보기
showBtn.addEventListener('click', () => {
  // 버튼 삭제 > 결과 내용 추가
  showBtn.disabled = true;
  showBtn.innerHTML = `${right} / ${right + wrong}`;
});

// 데이터를 로드하며 갱신
function loadData() {
  // 파이어베이스 데이터 저장소
  const ref = firebase.database().ref('data');
  // DB 데이터를 순회하며 갱신할 데이터를 갱신하면서
  // 랭킹 배열에 갱신된(유지된) 데이터를 저장한다.
  ref
    .once('value', (snapshot) => {
      const userData = snapshot.val(); // 현재 순회중인 유저데이터
      for (let i in userData) {
        let key = userData[i].nickname; // 현재 순회중인 유저의 닉네임
        let value = userData[i].score; // 현재 순회중인 유저의 점수

        // 중복된 닉네임이 존재하면 기록을 갱신할지 살피기
        if (nickName == key) {
          // 최고 기록을 달성했으면 갱신해야한다
          if (right > value) {
            // 파이어베이스에 업데이트
            setData(key, right);
            // 현재 데이터를 랭킹배열에 저장한다
            rankScore.push({ nick: nickName, score: right });
          } else {
            // DB에 있는 최댓값을 랭킹배열에 가져온다.
            rankScore.push({ nick: key, score: value });
          }
        }
        // 중복된 닉네임이 없으면 현재 유저 데이터를 파이어베이스에 저장하고,
        // DB데이터를 랭킹배열에 가져온다.
        else {
          setData(nickName, right);
          rankScore.push({ nick: key, score: value });
        }
      }
    })
    .then(() => rank()); // 완료되면 랭킹을 내자
}

// 데이터 저장 함수
function setData(name, newScore) {
  // 갱신된 데이터로 중복없이 푸시한다.
  firebase.database().ref('data').child(nickName).set({
    nickname: name,
    score: newScore,
  });
}

// 데이터로드가 끝나면 랭킹 계산, 차트 출력
function rank() {
  // 점수별 내림차순 정렬
  rankScore = rankScore.sort(function (a, b) {
    return b.score - a.score;
  });

  // 랭킹 콘솔출력
  for (let v of rankScore) {
    console.log(v);
  }

  // 점수별 분포 더하기
  for (let r of rankScore) {
    scores[r.score]++;
  }
  // 차트 생성
  chartBox.innerHTML = '<canvas id="myChart"></canvas>';
  // 차트 데이터 로드하기
  const myChart = new Chart(document.getElementById('myChart'), config);
  createLankingList();
}

// 틀린문제복습 관련 오브젝트와 이벤트리스너
const studyBtn = document.querySelector('.show-study-btn');
const resultSlider = document.querySelector('.result-slider');
studyBtn.addEventListener('click', showStudy);
const sliderItemWidth = 400;
let left = 0;
let childCount = 0;
let nowCount = 0;
const nextSlideBtn = document.querySelector('.btn-next-slide');
const prevSlideBtn = document.querySelector('.btn-prev-slide');
const countBox = document.querySelector('.count-box');
const endBtn = document.querySelector('.btn-end');
const endBox = document.querySelector('.end-box');
const endNo = document.querySelector('.end-btn-no');
endBtn.addEventListener('click', showEnd);
endNo.addEventListener('click', offEnd);

// 랭킹관련
const selectBox = document.querySelector('.select-box');
const rankingBtn = document.querySelector('.show-lanking-btn');
const goSelectBoxBtn = document.querySelector('.go-select-box');
const lankingBox = document.querySelector('.lanking-box');
rankingBtn.addEventListener('click', showLanking);
goSelectBoxBtn.addEventListener('click', goSelectBox);

// 로컬스토리지에서 데이터 불러오기
function getData() {
  questions = JSON.parse(localStorage.getItem('questions')); // 문제
  inpAnswers = JSON.parse(localStorage.getItem('inpAnswers')); // 유저의 정답
  rightAnswers = JSON.parse(localStorage.getItem('rightAnswers')); // 올바른 정답
  right = JSON.parse(localStorage.getItem('right')); // 정답 개수
  wrong = JSON.parse(localStorage.getItem('wrong')); // 오답 개수
  nickName = JSON.parse(localStorage.getItem('nickName')); // 닉네임
}

function goSelectBox() {
  selectBox.style.display = 'block';
  lankingBox.style.display = 'none';
  btnInvisible(prevSlideBtn);
  btnInvisible(nextSlideBtn);
  countBox.textContent = `hello :)`;
}

function showLanking() {
  selectBox.style.display = 'none';
  lankingBox.style.display = 'flex';
  countBox.textContent = `Top Lank`;
}

function showStudy() {
  // getData();
  // calResult();
  selectBox.style.display = 'none';
  // 틀린 문제가 없을 경우
  if (!wrong) {
    resultSlider.innerHTML = '<p>틀린 문제가 없습니다.</p>';
    return;
  }
  btnInvisible(prevSlideBtn);
  btnVisible(nextSlideBtn);
  countBox.textContent = `1 / ${childCount}`;
}

// 틀린문제 리스트 생성
function createStudyList(resultSlider) {
  for (let i = 0; i < inpAnswers.length; i++) {
    // 틀린 문제만 요소로 생성
    if (isAnswer(questions[i], inpAnswers[i])) continue;
    childCount++;
    // 들어갈 요소 생성
    const resultQuestions = document.createElement('div');
    const resultRightAnswers = document.createElement('div');
    const resultInpAnswers = document.createElement('div');
    const resultChild = document.createElement('div');
    resultChild.className += 'slider_contents';
    // 문제
    resultQuestions.textContent = questions[i];
    resultChild.appendChild(resultQuestions);
    // 정답
    resultRightAnswers.textContent = `정답 : ${rightAnswers[i]}`;
    resultChild.appendChild(resultRightAnswers);
    // 답변
    resultInpAnswers.textContent = `내 제출 : ${inpAnswers[i]}`;
    resultChild.appendChild(resultInpAnswers);
    // 한 문제의 결과박스 슬라이더에 추가
    resultSlider.appendChild(resultChild);
  }
  resultSlider.style.width = childCount * sliderItemWidth + 'px';
}

// 랭킹 리스트 생성
function createLankingList() {
  let size = 99;
  if (rankScore.length < size) size = rankScore.length;
  for (let i = 1; i <= size; i++) {
    // 들어갈 요소 생성
    const lankCount = document.createElement('div');
    const lankNickName = document.createElement('div');
    const lankScore = document.createElement('div');
    const child = document.createElement('div');
    child.className += 'lanking-box-child';
    // 등수
    if (i == 1) lankCount.textContent = '👑';
    else if (i == 2) lankCount.textContent = '🥇';
    else if (i == 3) lankCount.textContent = '🥈';
    else if (i == 4) lankCount.textContent = '🥉';
    else lankCount.textContent = i;
    child.appendChild(lankCount);
    // 닉네임
    lankNickName.textContent = `${rankScore[i - 1].nick}`;
    child.appendChild(lankNickName);
    // 점수
    lankScore.textContent = `${rankScore[i - 1].score}`;
    child.appendChild(lankScore);
    // 한 문제의 결과박스 슬라이더에 추가
    lankingBox.appendChild(child);
  }
}

function prevSlider() {
  nowCount--;
  left += sliderItemWidth;
  checkListCount();
  resultSlider.style.left = left + 'px';
  countBox.textContent = `${nowCount + 1} / ${childCount}`;
}
function nextSlider() {
  nowCount++;
  left -= sliderItemWidth;
  checkListCount();
  resultSlider.style.left = left + 'px';
  countBox.textContent = `${nowCount + 1} / ${childCount}`;
}
function checkListCount() {
  // 마지막 카운트
  if (nowCount === childCount - 1) {
    btnInvisible(nextSlideBtn);
  } else btnVisible(nextSlideBtn);
  if (nowCount === 0) btnInvisible(prevSlideBtn);
  else btnVisible(prevSlideBtn);
}
function btnVisible(btn) {
  btn.style.color = 'var(--color-font-1)';
  btn.removeAttribute('disabled');
}
function btnInvisible(btn) {
  btn.style.color = 'var(--color-font-2)';
  btn.setAttribute('disabled', true);
}
function showEnd() {
  endBox.style.zIndex = '10';
}
function offEnd() {
  endBox.style.zIndex = '-1';
}
