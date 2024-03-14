
const MY_TITLE =document.getElementById("titulo");
const MY_BUTTON =document.getElementById("miboton");
const MY_INPUT =document.getElementById("myinput");

const MY_P = document.getElementsByTagName("p");

MY_BUTTON.addEventListener("click", () => {
    MY_TITLE.style.color = MY_INPUT.value;
}) ;