var index = 0; // 현재 풀고 있는 문제의 인덱스
var qList = []; // JSON 객체를 저장하는 배열
const nextBtn = document.querySelector(".btn-next"); // 다음 문제 버튼
var random = []; // 랜덤 인덱스를 저장하는 배열, 다른 방법 있을지 고민
var inputArr = []; // 사용자 답 제출 데이터

// 테스트용
const qBox = document.querySelector("span");
const userInp = document.querySelector("input");

// 결과 데이터 변수
var right = 0;
var wrong = 0;

// 시작시 JSON 데이터를 동적으로 불러오는 함수
function loadData() {
  return fetch("/data/sampledata.json").then((response) => response.json());
}

// JSON 데이터가 로드되면 랜덤 인덱스 생성
loadData().then((items) => {
  console.log("--data load success--");
  qList = items;
  // 랜덤 배열 생성
  let tmp = Array.from({ length: qList.length - 1 }, (v, i) => i);
  random = tmp.sort(() => Math.random() - 0.5);
});

// 버튼이 눌릴 때마다 다음 문제로 갱신. 데이터만 확인
nextBtn.addEventListener("click", () => {
  let q = qList[random[index]].question; // question(key) 데이터
  qBox.textContent = q; // 시뮬레이션
  let a = qList[random[index]].answer; // answer(value) 데이터

  // 답 맞는지 확인해서 결과 데이터에 반영, 현재 문제-답 연결 인덱스 안맞음
  // 데이터 형식에 맞게 수정해야함
  userInp.value == a ? right++ : wrong++;
  // userInp.value == a ? alert(1) : alert(0);
  inputArr.push(userInp.value);

  index++; // 인덱스 증가
  // 문제 끝나면 결과 로드
  if (index == qList.length - 1) {
    console.log("끝!");
    // 결과 전송
    getResult(right, wrong);
  }
});

// 결과 데이터 출력 (임의)
function getResult(right, wrong) {
  document.write("맞은 개수 : ", right, "<br>");
  document.write("틀린 개수 : ", wrong, "<br>");
  for (let i = 0; i < qList.length; i++) {
    document.write(
      qList[i].question,
      "|",
      qList[i].answer,
      "|",
      inputArr[i],
      "|",
      qList[i].answer == inputArr[i] ? "정답" : "오답",
      "<br>"
    );
  }
}
