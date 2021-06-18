let Submit = document.querySelector(".submit");
let SignUpForm = document.querySelector(".SignUp-Form")
Submit.addEventListener("click", (e) => {
    e.preventDefault()
    const username = SignUpForm.username.value;
    const password = SignUpForm.password.value;
    
    if (password.length > 6) {
        alert("you have successfully signed up.");
        location.reload();
    } 
    else if (!username || !password){
        alert("fill in the blank!");
    }
    else {
        alert("Password is less than 6!");
    }
})