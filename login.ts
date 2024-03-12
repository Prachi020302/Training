let logindata: any = localStorage.getItem('data');
if (logindata) {
    logindata = JSON.parse(logindata);
} else {
    logindata = []; // Initialize as empty array if no data found
}
console.log(logindata);

class Login {
    email: string;
    password: string | number;

    constructor(email: string, password: string | number) {
        this.email = email,
        this.password = password
    }
}

const loginBtn: any = document.getElementById("login");
loginBtn.addEventListener("click", () => {
    let emailInput = document.getElementById("typeEmailX") as HTMLInputElement;
    let passwordInput = document.getElementById("typePasswordX") as HTMLInputElement;
    let emailError = document.getElementById("email-error") as HTMLCanvasElement;
    let passwordError = document.getElementById("password-error") as HTMLCanvasElement;
    
    emailError.innerHTML = ""; // Clear previous error messages
    passwordError.innerHTML = "";

    if (!emailInput.value) {
        emailError.innerHTML = "Please enter email";
        return;
    }

    if (!passwordInput.value) {
        passwordError.innerHTML = "Please enter password";
        return;
    }

    let found = false;
    for (let i = 0; i < logindata.length; i++) {
        if (emailInput.value === logindata[i].email && passwordInput.value === logindata[i].password) {
            found = true;
            break;
        }
    }

    if (found) {
        window.location.href = "../loginHomepage.html";
    } else {
        console.log("Error in login");
    }
});
