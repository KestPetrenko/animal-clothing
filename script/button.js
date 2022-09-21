let inputName = document.querySelector("#inputName");
inputName.addEventListener("click", funcName);
function funcName() {
    inputName.value = "";
}

let inputPhone = document.querySelector("#inputTel");
inputPhone.addEventListener("click", funcPhone);
function funcPhone() {
    inputPhone.value = "";
}

let inputEmail = document.querySelector("#inputEmail");
inputEmail.addEventListener("click", funcNameButton);
function funcNameButton() {
    inputEmail.value = "";
}

let button = document.querySelectorAll(".otpravite");

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function () {
        if (inputName.value !== '' && inputPhone.value !== '' && inputEmail.value !== '') {
            inputPhone.style.background = "#312C70";
            inputName.style.background = "#312C70";
            inputEmail.style.background = "#312C70"
            inputName.style.color = "white";
            inputPhone.style.color = "white";
            inputEmail.style.color = "white";
        }
        else {
            inputName.style.background = "red";
            inputPhone.style.background = "red";
            inputEmail.style.background = "red";
            inputName.style.color = "white";
            inputPhone.style.color = "white";
            inputEmail.style.color = "white";
            inputName.value = "Заполните все поля";
            inputPhone.value = "Заполните все поля";
            inputEmail.value = "Заполните все поля";
        }
    })
}