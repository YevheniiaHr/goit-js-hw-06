const inputName = document.querySelector('#name-input');

const outputName = document.querySelector('#name-output');

inputName.addEventListener("input", inputOn);

function inputOn(evt) {
    outputName.textContent = evt.currentTarget.value;
    if (evt.currentTarget.value.trim() === '')
    {
        outputName.textContent = 'Anonymous';
      }
}