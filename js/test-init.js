document
    .querySelector("#btn-init")
    .addEventListener("click", testInit);

function testInit() {
    // timerStart();
    toggleToVisible();
}

function toggleToVisible() {
    document
        .querySelector(".invisible")
        .classList.replace("invisible", "visible");
    document
        .querySelector(".visible")
        .classList.replace("visible", "invisible");
}
