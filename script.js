let Submit = document.querySelector(".submit");
let loginForm = document.querySelector(".Login-Form")
Submit.addEventListener("click", (e) => {
    e.preventDefault()
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    
    if (password.length > 6) {
        alert("You have successfully logged in.");
        location.reload();
    } 
    else if (!username || !password){
        alert("fill in the blank!");
    }
    else {
        alert("Password is less than 6!");
    }
})