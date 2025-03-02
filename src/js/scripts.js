document.addEventListener('DOMContentLoaded', function() {
    // Handle animation button click
    const animateButton = document.getElementById('animateButton');
    if (animateButton) {
        animateButton.addEventListener('click', function() {
            const box = document.getElementById('box');
            box.style.transition = 'transform 0.5s';
            box.style.transform = 'translateX(100px)';
        });
    }

    // Handle login form submission
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the form from submitting the traditional way
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (username === '' || password === '') {
                alert('Please fill in all fields.');
            } else if (username === '3468' && password === '123456') {
                window.location.href = 'personal.html'; // Redirect to the personal page
            } else {
                alert('Invalid username or password!');
            }
        });
    }

    // Handle registration form submission
    const registrationForm = document.getElementById('registrationForm');
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the form from submitting the traditional way
            const regUsername = document.getElementById('regUsername').value;
            const regPassword = document.getElementById('regPassword').value;

            if (regUsername === '' || regPassword === '') {
                alert('Please fill in all fields.');
            } else {
                alert('Registration successful!');
                // Redirect to login page or handle registration
                window.location.href = 'login.html';
            }
        });
    }

    // Handle logout button click
    const logoutButton = document.getElementById('logoutButton');
    if (logoutButton) {
        logoutButton.addEventListener('click', function() {
            alert('You have logged out.');
            // Redirect to home page or handle logout
            window.location.href = 'home.html';
        });
    }
});