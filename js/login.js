const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-input input");
const greeting = document.querySelector("#greeting");

const savedUsername = localStorage.getItem("username");

function onSubmit(event) {
    event.preventDefault();
    loginForm.classList.add("hidden");
    localStorage.setItem("username", loginInput.value);
    Greeting();
}

function Greeting() {
    const username = localStorage.getItem("username");
    greeting.innerText = `Hello, ${username}`;
    greeting.classList.remove("hidden");
    console.log(username);
}

if (savedUsername === null) {
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit", onSubmit);
}
else {
    Greeting();
}