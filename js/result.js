let rankScore = []; // 랭킹 배열

const showBtn = document.querySelector('.showResult'); // 결과보기 버튼

//우진테스트
const studyBtn = document.querySelector('.studyBtn');
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

// 로컬스토리지에서 데이터 불러오기
function getData() {
	questions = JSON.parse(localStorage.getItem('questions')); // 문제
	inpAnswers = JSON.parse(localStorage.getItem('inpAnswers')); // 유저의 정답
	rightAnswers = JSON.parse(localStorage.getItem('rightAnswers')); // 올바른 정답
	right = JSON.parse(localStorage.getItem('right')); // 정답 개수
	wrong = JSON.parse(localStorage.getItem('wrong')); // 오답 개수
}

// 데이터로드가 끝나면 랭킹 계산
function rank() {
	// 점수별 내림차순 정렬
	rankScore = rankScore.sort(function (a, b) {
		return b.score - a.score;
	});

	// 임시 테스트 코드 (1등~5등 출력)
	// show_rank
	console.log(rankScore[0]);
	console.log(rankScore[1]);
	console.log(rankScore[2]);
	console.log(rankScore[3]);
	console.log(rankScore[4]);

	for (let r of rankScore) {
		scores[r.score]++;
	}

	const myChart = new Chart(document.getElementById('myChart'), config);
}

loadData();

// 버튼 누르면 결과보기
showBtn.addEventListener('click', () => {
	// 버튼 삭제 > 결과 내용 추가
	showBtn.disabled = true;
	showBtn.innerHTML = `${right} / ${right + wrong}`;
});

// 비동기 처리 .. 최적화 필요
function loadData() {
	// 파이어베이스로 유저 결과 전송
	firebase
		.database()
		.ref('data')
		.push({
			nickname: '익명',
			result: right,
		})
		.then(() => {
			// 전송하고 파이어베이스 JSON 파일로 불러오기
			firebase
				.database()
				.ref('data/')
				.once('value', function (snap) {
					// rankScore에 배열형태로 닉네임(nick)과 점수(score) 저장
					for (var i in snap.val()) {
						rankScore.push({ nick: snap.val()[i].nickname, score: snap.val()[i].result });
					}
				})
				.then(() => rank()); // 비동기 처리
		});
}

// 여기부터 우진테스트

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
	btnVisible(nextSlideBtn);
	resultSlider.style.width = childCount * sliderItemWidth + 'px';
	countBox.textContent = `1 / ${childCount}`;
}

function showStudy() {
	//getData();
	// calResult();
	studyBtn.style.display = 'none';
	// 틀린 문제가 없을 경우
	if (!wrong) {
		resultSlider.innerHTML = '<p>틀린 문제가 없습니다.</p>';
		return;
	}
	btnInvisible(prevSlideBtn);
	btnVisible(nextSlideBtn);
	createStudyList(resultSlider);
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
