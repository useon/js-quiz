// 1등 점수 가져와야함
const MAX_SCORE = 100;

// 1등점수까지의 배열
const scores = Array.from({ length: MAX_SCORE }, () => 0);

// 파이어베이스에서 점수가 index인 사람있다면 scores 해당 index 값++;
// 구현 필요
// [예] 3명의 유저 데이터가 각각 1점 3점 2점 을 가지고있을 경우
// scores[1]++;
// scores[3]++;
// scores[2]++;

// 라벨로 사용할 점수배열
const myLabel = [];
getMyLabel(myLabel);

const data = {
  labels: myLabel,
  datasets: [
    {
      label: '점수 분포',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: scores,
    },
  ],
};

const config = {
  type: 'line', // pie, bar, line, doughnut, polarArea
  data: data,
  options: {},
};

const myChart = new Chart(document.getElementById('myChart'), config);

function getMyLabel(myLabel) {
  for (let i = 0; i < MAX_SCORE; i++) {
    myLabel.push(i);
  }
}
