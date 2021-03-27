// Get a reference to the buttons and popup elements
const showPopUpBtn = document.getElementById("show-popup-form");
const closePopUpBtn = document.getElementById("close-popup-form");
const popUp = document.querySelector(".popup");

// addEventListener for showing popup
showPopUpBtn.addEventListener("click", () => {
    popUp.style.setProperty("display", "flex")
})

// addEventListener for closing popup
closePopUpBtn.addEventListener('click', () => {
    popUp.style.removeProperty("display")
})