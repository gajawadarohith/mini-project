document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const registrationForm = document.getElementById('registrationForm');

    registrationForm.style.display = 'none';

    const registerLink = document.getElementById('registerLink');
    registerLink.addEventListener('click', () => {
        loginForm.style.display = 'none';
        registrationForm.style.display = 'block';
    });

    const loginLink = document.getElementById('loginLink');
    loginLink.addEventListener('click', () => {
        loginForm.style.display = 'block';
        registrationForm.style.display = 'none';
    });
});

function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const users = JSON.parse(localStorage.getItem('registeredUsers')) || [];

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        window.location.href = 'home.html';
    } else {
        document.getElementById('loginStatus').textContent = 'Invalid username or password. Please try again.';
    }
}

function register() {
    const registerUsername = document.getElementById('registerUsername').value;
    const registerPassword = document.getElementById('registerPassword').value;

    const users = JSON.parse(localStorage.getItem('registeredUsers')) || [];

    const isUserExists = users.some(user => user.username === registerUsername);

    if (isUserExists) {
        alert('Username already exists. Please choose a different username.');
        return;
    }

    users.push({ username: registerUsername, password: registerPassword });

    localStorage.setItem('registeredUsers', JSON.stringify(users));

    document.getElementById('registerUsername').value = '';
    document.getElementById('registerPassword').value = '';

    toggleRegistration(); 
}

function toggleRegistration() {
    const loginForm = document.getElementById('loginForm');
    const registrationForm = document.getElementById('registrationForm');

    if (loginForm.style.display === 'block') {
        loginForm.style.display = 'none';
        registrationForm.style.display = 'block';
    } else {
        loginForm.style.display = 'block';
        registrationForm.style.display = 'none';
    }
}
