const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");


signInBtn.addEventListener("click", () => {
	container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
	container.classList.add("right-panel-active");
});



const form1 = document.querySelector("#form1");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const showPasswordIcon = document.querySelector("#show__password");


let isFormValid = false;

form1.addEventListener('submit',(e) => {
  e.preventDefault();

  validateInputs()

})

const validateInputs = () => {
  const name = !validator.isEmpty(nameInput.value.trim());
  const email = validator.isEmail(emailInput.value) 
  const password = validator.isStrongPassword(passwordInput.value)
 
  if(name === false) {
    displayError(nameInput, "Name is required!")
  }else{
    setSuccess(nameInput)
  }
  if(email === false) {
    displayError(emailInput, "Email is required!")
  }else{
    setSuccess(emailInput)
  }
  if(password === false) {
    displayError(passwordInput, "Week password! Use Uppercase,Lowercase and special characters")
  }else{
    setSuccess(passwordInput)
  }

if(name && email && password) {
  Swal.fire({
    title: 'Success!',
    text: `Logged as ${nameInput.value}`,
    icon: 'success',
    confirmButtonText: '<a href="/account">Go to account</a>'
  })
}

}

const displayError = (element,msg) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error__output')
  errorDisplay.innerText = msg;
  element.classList.add('invalid');
  element.classList.remove('valid')

}

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error__output')
  errorDisplay.innerText = '';
  element.classList.add('valid');
  element.classList.remove('invalid')
}

































































/*Handle show password icon*/
showPasswordIcon.addEventListener("mousedown", ()=> {
    passwordInput.type = 'text'
})
showPasswordIcon.addEventListener("mouseup", ()=> {
  passwordInput.type = 'password'
})

