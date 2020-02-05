let adminAccount = [['admin1','admin2','admin3'] , ['123123','456456','789789']];

let modal = document.getElementById('modal');
let logIn = document.getElementById('login');
let closeButton = document.getElementById('closeButton');

closeButton.addEventListener('click', closeModal);

logIn.addEventListener('click', openModal);

window.addEventListener('click', outsideClose);

function openModal(event) {
    modal.style.display = "block";
    event.preventDefault();

}

function closeModal() {
    modal.style.display = "none";
}

function outsideClose(e) {
    if(e.target == modal){
        closeModal();
    }
}

function viewErrorMessage(elementID, errorMessage) {
     let element = document.getElementById(elementID);
     if(element){
         element.innerText = errorMessage;
     }
}

function validateLogIn(user, password) {
    let usernameRegex = /^[a-z0-9_-]{3,16}$/;
    if (user.value.trim() == ""){
        viewErrorMessage('error-message1', "Please enter an username!");
    }
    else if (!usernameRegex.test(user.value)){
        viewErrorMessage('error-message1', "Invalid username!");
    }
    else
        viewErrorMessage('error-message1', "");

    if (password.value.trim() == ""){
        viewErrorMessage('error-message2', "Please enter a password!");
    }
    else
        viewErrorMessage('error-message2', "");
}

function checkAccount(user, password) {
    for (let i=0;i<adminAccount.length;i++){
            if(user.value == adminAccount[0][i] && password.value == adminAccount[1][i])
                return window.location = "index2.html";
        }
    alert("Incorrect username or password! Please try again.");
}

let user = document.getElementById('username');
let password = document.getElementById('password');

let button = document.getElementById('loginButton');
button.addEventListener('click', () => {
    validateLogIn(user,password);
    checkAccount(user,password);
});