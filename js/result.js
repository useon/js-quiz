let right = 0
let wrong = 0

const resRight = document.querySelector('.right')
const resWrong = document.querySelector('.wrong')
const showBtn = document.querySelector('.showResult')
const myScore = document.querySelector('.score')
const resTable = document.querySelector('tbody')

// 로컬스토리지에서 데이터 불러오기
function getData() {
	questions = JSON.parse(localStorage.getItem('questions'))
	inpAnswers = JSON.parse(localStorage.getItem('inpAnswers'))
	rightAnswers = JSON.parse(localStorage.getItem('rightAnswers'))
}

// 결과
showBtn.addEventListener('click', function showResult() {
	getData()
	console.log(questions, inpAnswers)
	calResult()
	resRight.innerHTML = '맞은 개수 : ' + right
	resWrong.innerHTML = '틀린 개수 : ' + wrong
	myScore.innerHTML = '내 점수 : ' + right + '/' + (right + wrong)
})

// 맞은 개수, 틀린 개수 계산. 결과 테이블 출력
function calResult() {
	for (let i = 0; i < inpAnswers.length; i++) {
		isAnswer(questions[i], inpAnswers[i]) ? (right += 1) : (wrong += 1)
		const q = document.createElement('td')
		q.textContent = questions[i]
		const a = document.createElement('td')
		a.textContent = rightAnswers[i]
		const inp = document.createElement('td')
		inp.textContent = inpAnswers[i]
		const datarow = document.createElement('tr')
		datarow.appendChild(q)
		datarow.appendChild(a)
		datarow.appendChild(inp)
		resTable.appendChild(datarow)
	}
}
