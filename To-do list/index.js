document.getElementById("signInForm").addEventListener("submit", function(event) {
    event.preventDefault();

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

// Perform login logic here
console.log("Email:", email);
console.log("Password:", password);
})

