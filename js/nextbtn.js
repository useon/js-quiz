const nextBtn = document.querySelector(".btn-next");

nextBtn.addEventListener("click", next);

function next() {
  fetch("/data/data.json")
    .then((response) => response.json())
    .then((data) => (questionBox.innerHTML = getQuestion(data)));
}
