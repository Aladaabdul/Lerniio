// the sign up button functionality
const signUpButton = document.querySelector('.sign-btn');
const signUpTemplate = document.querySelector('.login-main')

// click event for the sign up button
signUpButton.addEventListener('click', ()=>{

    // the next and previous button functionality
});

const Form = document.querySelector('form');
const subMit = document.querySelector('.submit');
const LoginForm = document.querySelector('.login-form');

// regex expressions or a pop up


subMit.addEventListener('click', ()=>{

    if(Form.namecode.value.length > 4 && Form.emailcode.value.length > 8 &&  
        Form.passcode.value.length > 8 ){
        alert('hello world');
    }else {
        alert('wrong, input again');
    }

});
