const controls = document.querySelector("#controls");
const createButton = controls.querySelector("[data-create]");
const destroyButton = controls.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

createButton.addEventListener("click", createBoxes);
destroyButton.addEventListener("click", destroyBoxes);

function createBoxes() {
  const amount = +controls.querySelector("input").value;
  let boxes = '';
  
  for (let i = 0; i < amount; i++) {
    const boxSize = 30 + i * 10;
    const boxColor = getRandomHexColor();
    const box = `<div style="width:${boxSize}px; height:${boxSize}px; background-color:${boxColor}"></div>`;
    boxes += box;
  }

  boxesContainer.insertAdjacentHTML("beforeend", boxes);
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}