const btnColor = document.querySelector(".change-color");
const bgColorName = document.querySelector(".color");

btnColor.addEventListener('click', changeBg);
  
function changeBg(e) {
  const randomColor =  getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  bgColorName.textContent = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
