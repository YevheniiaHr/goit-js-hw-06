const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onSubmit);
function onSubmit (e) {
    e.preventDefault();
    const { email, password } = e.currentTarget.elements;
    if (email.value === "" && password.value === "") {
    alert('The fields are empty!')
    };
    
    const data = {
        email: email.value,
        password: password.value,
    };
    console.log(data);
    e.currentTarget.reset();
};
