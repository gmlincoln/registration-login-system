function showForm(type) {

    if (type === 'register') {
        document.getElementById("loginForm").classList.add("d-none");
        document.getElementById("registerForm").classList.remove("d-none");
    }
    else if (type === 'login') {
        document.getElementById("registerForm").classList.add("d-none");
        document.getElementById("loginForm").classList.remove("d-none");
    }
}

function register() {
    const fullName = document.getElementById("fullName").value;
    const registerEmail = document.getElementById("registerEmail").value;
    const registerPassword = document.getElementById("registerPassword").value;

    if (!fullName) {
        alert("Please enter your full name.");
        return;
    }
    if (!registerEmail) {
        alert("Please enter your email.");
        return;
    }
    if (!registerPassword) {
        alert("Please enter your password.")
        return;
    }

    const user = { fullName, registerEmail, registerPassword };

    localStorage.setItem(registerEmail, JSON.stringify(user));


    alert("Registration Successful!");
    document.getElementById("fullName").value = '';
    document.getElementById("registerEmail").value = '';
    document.getElementById("registerPassword").value = '';

    showForm('login');
}

function login() {
    const loginEmail = document.getElementById("loginEmail").value;
    const loginPassword = document.getElementById("loginPassword").value;

    if (!loginEmail) {
        alert("Please enter email");
    }
    if (!loginPassword) {
        alert("Please enter password!");
    }

    const user = localStorage.getItem(loginEmail);

    if (!user) {
        alert("User doesn't exist!");
        return;
    }

    const userInfo = JSON.parse(user);

    if (loginPassword != userInfo.registerPassword) {
        alert("Email or Password is wrong!")
    } else {
        alert("Login Successful!" + "Welcome " + userInfo.fullName)
    }

    document.getElementById("loginEmail").value = '';
    document.getElementById("loginPassword").value = '';
}