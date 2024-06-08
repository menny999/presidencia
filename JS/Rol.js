// Define las imágenes de fondo que deseas usar
const images = [
    'url(IMG/fondo.jpeg)',
    'url(IMG/nacimiento.jpg)',
    'url(IMG/MANTEYPRK.jpg)',
];

// Función para cambiar la imagen de fondo
function changeBackground() {
    const backgroundContainer = document.getElementById('background-container');
    const randomIndex = Math.floor(Math.random() * images.length);
    backgroundContainer.style.backgroundImage = images[randomIndex];
}

// Cambia la imagen de fondo cada 5 segundos
setInterval(changeBackground, 1500);



document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("modal");
    modal.style.display = "block"; // Mostrar modal al cargar la página
});
