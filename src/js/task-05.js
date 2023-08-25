const inputName = document.querySelector('#name-input');
console.dir(inputName);
const outputName = document.querySelector('#name-output');
console.log(outputName)
inputName.addEventListener("input", inputOn);

function inputOn(evt) {
    outputName.textContent = evt.currentTarget.value;
    if (evt.currentTarget.value.trim() === '')
    {
        outputName.textContent = 'Anonymous';
      }
}