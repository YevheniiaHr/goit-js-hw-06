const fsControl = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");
console.dir(fsControl);
console.dir(spanText)
spanText.style.fontSize =fsControl.value + "px"
fsControl.addEventListener("input", handler);

function handler(e) {
    spanText.style.fontSize = `${fsControl.value}px`;  
};
