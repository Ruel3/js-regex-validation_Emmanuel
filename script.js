// script.js
function validateForm() {
    let fullName = document.getElementById('fullName').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let password = document.getElementById('password').value;

    let fullNameValid = validateFullName(fullName);
    let emailValid = validateEmail(email);
    let phoneValid = validatePhone(phone);
    let passwordValid = validatePassword(password);

    if (fullNameValid && emailValid && phoneValid && passwordValid) {
        document.getElementById('successMessage').textContent = "Form submitted successfully!";
        clearErrors();
    } else {
        document.getElementById('successMessage').textContent = "";
    }
}

function validateFullName(fullName) {
    let regex = /^[a-zA-Z\s]+$/;
    let isValid = regex.test(fullName);
    if (!isValid) {
        document.getElementById('fullName').classList.add('error');
        document.getElementById('fullNameError').textContent = "Invalid full name.";
    } else {
        document.getElementById('fullName').classList.remove('error');
        document.getElementById('fullNameError').textContent = "";
    }
    return isValid;
}

function validateEmail(email) {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isValid = regex.test(email);
    if (!isValid) {
        document.getElementById('email').classList.add('error');
        document.getElementById('emailError').textContent = "Invalid email address.";
    } else {
        document.getElementById('email').classList.remove('error');
        document.getElementById('emailError').textContent = "";
    }
    return isValid;
}

function validatePhone(phone) {
    let regex = /^\d{10,15}$/;
    let isValid = regex.test(phone);
    if (!isValid) {
        document.getElementById('phone').classList.add('error');
        document.getElementById('phoneError').textContent = "Invalid phone number.";
    } else {
        document.getElementById('phone').classList.remove('error');
        document.getElementById('phoneError').textContent = "";
    }
    return isValid;
}

function validatePassword(password) {
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    let isValid = regex.test(password);
    if (!isValid) {
        document.getElementById('password').classList.add('error');
        document.getElementById('passwordError').textContent = "Invalid password. Must be at least 8 characters, with one uppercase, one lowercase, and one number.";
    } else {
        document.getElementById('password').classList.remove('error');
        document.getElementById('passwordError').textContent = "";
    }
    return isValid;
}

function clearErrors(){
    document.getElementById('fullName').classList.remove('error');
    document.getElementById('fullNameError').textContent = "";
    document.getElementById('email').classList.remove('error');
    document.getElementById('emailError').textContent = "";
    document.getElementById('phone').classList.remove('error');
    document.getElementById('phoneError').textContent = "";
    document.getElementById('password').classList.remove('error');
    document.getElementById('passwordError').textContent = "";
}

//Real-time Validation
document.getElementById('fullName').addEventListener('input', function() {
    validateFullName(this.value);
});

document.getElementById('email').addEventListener('input', function() {
    validateEmail(this.value);
});

document.getElementById('phone').addEventListener('input', function() {
    validatePhone(this.value);
});

document.getElementById('password').addEventListener('input', function() {
    validatePassword(this.value);
});
