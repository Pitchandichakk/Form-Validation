const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById("confirm-password")


// error message 
const errorMessage1 = document.getElementsByTagName('span')[0]
const errorMessage2 = document.getElementsByTagName('span')[1]
const errorMessage3 = document.getElementsByTagName('span')[2]
const errorMessage4 = document.getElementsByTagName('span')[3]

form.addEventListener('submit',function(e){
    e.preventDefault();


    const userNameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const confirmPasswordValue = confirmPassword.value;

    // set a pattern for inputs

    const userPattern = /^[a-zA-Z]{5,}$/;
    const emailPattern = /^[a-zA-Z0-9!#$%^&*()]+@[A-Za-z]+\.[a-zA-Z]{2,3}$/;
    const passwordPattern = /^[a-zA-Z0-9]{3,8}$/;
    const confirmPasswordPattern = /^[a-zA-Z0-9]{3,8}$/;

    // username
    if(userNameValue === ''){
        username.style.border = "2px solid red";
        errorMessage1.style.color = "red"
        errorMessage1.innerText = "input field is required"
    }else if(userPattern.test(userNameValue)){
        username.style.border = "2px solid red";
        errorMessage1.style.color = "red";  
        errorMessage1.innerText = "username must be atleast 5 characters";
    }else{
        username.style.border = "2px solid green";
        errorMessage1.style.color = "green";
        errorMessage1.innerText = "verified"
        
    }

    //email
    if(emailValue === ""){
        email.style.border = "2px solid red";
        errorMessage2.style.color = "red";
        errorMessage2.innerText = " input field is required"
    }else if(!emailPattern.test(emailValue)){
        email.style.border = "2px solid red";
        errorMessage2.style.color = "red";
        errorMessage2.innerText = " Enter correct email address "
    }else{
        email.style.border = "2px solid green";
        errorMessage2.style.color = "green";
        errorMessage2.innerText = " verified "

    }

    // password
    if(passwordValue === ""){
        password.style.border = " 2px solid red";
        errorMessage3.style.color = "red";
        errorMessage3.innerText = "Input field is empty";
    }else if(!passwordPattern.test(passwordValue)){
        password.style.border = " 2px solid red";
        errorMessage3.style.color = "red";
        errorMessage3.innerText = "enter strong password";
    }else{
        password.style.border = " 2px solid green";
        errorMessage3.style.color = "green";
        errorMessage3.innerText = "verified";
        
    }
    

// confirm password

    if(confirmPasswordValue === ""){
        confirmPassword.style.border = " 2px solid red";
        errorMessage4.style.color = "red";
        errorMessage4.innerText = "Input field is empty";
    }
    // }else if(!confirmPasswordValue === passwordValue){
    //     confirmPassword.style.border = " 2px solid red";
    //     errorMessage4.style.color = "red";
    //     errorMessage4.innerText = "enter correct password";
    //}
    else if(confirmPasswordValue === passwordValue){
        confirmPassword.style.border = " 2px solid green";
        errorMessage4.style.color = "green";
        errorMessage4.innerText = "password has been matched";
        
    }else{
        confirmPassword.style.border = " 2px solid red";
        errorMessage4.style.color = "red";
        errorMessage4.innerText = "password doesn't match"
    }

    
})