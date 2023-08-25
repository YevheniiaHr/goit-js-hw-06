const inputText = document.querySelector("#validation-input");
console.dir(inputText);
inputText.addEventListener("blur", handler);

function handler(e) {
    if (
        e.currentTarget.value.length ===
        Number(e.currentTarget.dataset.length)
    ) {
        inputText.classList.add("valid");
        inputText.classList.remove("invalid");
      }
    else {
       inputText.classList.add("invalid");
        inputText.classList.remove("valid"); 
    }
};