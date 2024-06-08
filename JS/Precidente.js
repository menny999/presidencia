document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var password = document.getElementById("password").value;
    if (password === "contraseña123") { // Cambia "contraseña123" por la contraseña deseada
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("controlPanel").style.display = "block";
    } else {
        alert("Contraseña incorrecta. Por favor, inténtalo de nuevo.");
    }
});
