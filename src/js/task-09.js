const btnColor = document.querySelector(".change-color");
const bgColorName = document.querySelector(".color");
console.dir(btnColor);
console.dir(bgColorName);
btnColor.addEventListener('click', changeBg)
function changeBg(e) {
  document.body.style.backgroundColor = getRandomHexColor();
  bgColorName.textContent = getRandomHexColor()
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}