// const boxesAmount = document.querySelector('input[type="number"]');
// const btnCreate = document.querySelector('button[data-create]');

// const btnDestroy = document.querySelector('button[data-destroy]');

// const boxes = document.querySelector("#boxes");
// btnCreate.addEventListener('click', createBoxes);
// btnDestroy.addEventListener('click', destroyBoxes);
 
// function createBoxes(amount) {
// const box = document.createElement("div");
//   for (let i = 0; i < amount; i++){
   
//     box.style.width = `${30 + i * 10}px`;
//     box.style.height = `${30 + i * 10}px`;
//     box.style.backgroundColor = getRandomHexColor();
//     boxes.appendChild(box);
//   }
// }
// function destroyBoxes() {
  
// }


// function createBoxes(amount) {
//   const boxes = document.querySelector("#boxes");
//   for (let i = 0; i < amount; i++){
//     const box = document.querySelector("div");
//     box.style.width = `${30 + i * 10}px`;
//     box.style.height = `${30 + i * 10}px`;
//     box.style.backgroundColor = getRandomHexColor();
//     boxes.appendChild(box);
//   }
// }
// function destroyBoxes() {
//   const boxes = document.querySelector("#boxes");
//   boxes.innerHTML = "";
// }
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }


function createBoxes(amount) {
  const boxContainer = document.querySelector("#boxes");
  
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    
    boxContainer.appendChild(box);
  }
}

function destroyBoxes() {
  const boxContainer = document.querySelector("#boxes");
  boxContainer.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}  