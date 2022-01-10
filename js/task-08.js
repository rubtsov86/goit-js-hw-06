const formRef = document.querySelector('.login-form');

const checkFormValidation = function (event) {
    event.preventDefault();
    const {
    elements: { email, password }
    } = event.currentTarget;
    
    if (email.value === '' || password.value === '') {
 alert('все поля должны быть заполнены!');
    } else {
console.log({
        email: email.value,
        password: password.value,
    });
    }

    

    formRef.reset();
   
}

formRef.addEventListener('submit', checkFormValidation);