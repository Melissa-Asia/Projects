function log() {
    let Name = prompt("What is your full name");
    let email = prompt("What is your email?");
    let password = prompt("Please input a password");
    let h1 = document.querySelector ("h1");
    let h2 = document.querySelector (".sub");
    let h3 = document.querySelector (".sub-title");
h1.innerHTML = `Thanks ${Name} for sending!`;
h2.innerHTML =`Please check your email:  ${email}`;
h3.innerHTML =`Remember your password: ${password}!`;
}
let login = document.querySelector ("button");
login.addEventListener("click", log);

