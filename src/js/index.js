// Get a reference to the buttons and popup elements
const body = window.document.querySelector("body");
const showPopUpBtn = document.getElementById("show-popup-form");
const closePopUpBtn = document.getElementById("close-popup-form");
const popUp = document.querySelector(".popup");
const formPopup = popUp.querySelector("#login-form");
const regexEmail = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]/;
const regexPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

// addEventListener for showing popup
showPopUpBtn.addEventListener("click", () => {
    popUp.style.setProperty("display", "flex")
})

// addEventListener for closing popup
closePopUpBtn.addEventListener('click', () => {
    popUp.style.removeProperty("display")
})

// addEventListener for submit form
formPopup.addEventListener("submit", e =>{
    e.preventDefault();
    if(!handleSubmit(e)) return;
})


// Show Error popup when validation failed
const showErrorPopup = (info) =>{
    const errorDiv = document.createElement("div");

    errorDiv.classList.add("form-popup-error");
    errorDiv.textContent = info

    body.appendChild(errorDiv);

    setTimeout(()=>{
        body.removeChild(errorDiv);
    }, 3000)
}

// Form validation
const validateInputs = (element) => {
    const emailValue = element.email.value;
    const passwordValue = element.password.value;
    const checboxChecked = element.checkbox.checked;
   
    
    if (!emailValue && !passwordValue){
        showErrorPopup("Please fill the email and password!")
        return false
    }
    
    if(!regexEmail.test(emailValue)) {
        showErrorPopup("Please provide correct email address!")
        return false
    }

    if(!regexPassword.test(passwordValue)) {
        showErrorPopup("Password should contain: Minimum 8 character. At least 1 upper and 1 lower case English letter. 1 number and 1 special character")
        return false
    }
    
    if(!checboxChecked) {
        showErrorPopup("Please accepts terms & conditions!")
        return false
    }

    return true
}

// handle submit form
const handleSubmit = (e) =>{
    const valid = validateInputs(e.target)
    return valid
}

