class SignUp {
    name: string;
    email: string;
    password: string | number;

    constructor(name: string, email: string, password: string | number) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
}

const signup = document.getElementById("signup") as HTMLCanvasElement;
signup.addEventListener("click", () => {
    let name = document.getElementById("typeNameX") as HTMLInputElement;
    let email = document.getElementById("typeEmailX") as HTMLInputElement;
    let password = document.getElementById("typePasswordX") as HTMLInputElement;

    let isValid = true;

    // Reset error messages
    let nameError = document.getElementById("name-error") as HTMLCanvasElement;
    let emailError = document.getElementById("email-error") as HTMLCanvasElement;
    let passwordError = document.getElementById("password-error") as HTMLCanvasElement;
    nameError.innerHTML = "";
    emailError.innerHTML = "";
    passwordError.innerHTML = "";

    // Validate name
    if (name.value.trim() === "") {
        nameError.innerHTML = "Please enter name";
        isValid = false;
    }

    // Validate email
    if (email.value.trim() === "") {
        emailError.innerHTML = "Please enter email";
        isValid = false;
    }

    // Validate password
    if (password.value.trim() === "") {
        passwordError.innerHTML = "Please enter password";
        isValid = false;
    }

    // If all fields are valid, create new user
    if (isValid) {
        let user = new SignUp(name.value.trim(), email.value.trim(), password.value.trim());
        let arr = [];
        if (localStorage.getItem('data')) {
            arr = JSON.parse(localStorage.getItem('data'));
        }
        arr.push(user);
        localStorage.setItem('data', JSON.stringify(arr));
        window.location.href = "../login.html";
    }
});
