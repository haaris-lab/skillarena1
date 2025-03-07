// script.js
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get the values of username and password
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Simple hard-coded credentials (just for demo purposes)
    const validUsername = 'user123';
    const validPassword = 'password123';

    // Check if the credentials are valid
    if (username === validUsername && password === validPassword) {
        alert('Login successful!');
        errorMessage.textContent = '';  // Clear any previous error message
        // Redirect to another page or take other action here
    } else {
        errorMessage.textContent = 'Invalid username or password';
    }
});
