document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // simple logic instead of server.
    if (email === "admin" && password === "padmin") {
        alert("Login successful!");
    } else {
        alert("Invalid credentials!");
    }
});