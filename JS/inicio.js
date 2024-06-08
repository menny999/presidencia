document.addEventListener('DOMContentLoaded', function() {
    const images = ['IMG/MANTEYPRK.jpg', 'IMG/mante foto.jpg', 'IMG/nacimiento.jpg']; // Lista de imágenes de fondo
    let currentIndex = 0;
    const backgroundElement = document.querySelector('.background-image');

    function changeBackgroundImage() {
        backgroundElement.classList.add('fade-out'); // Agrega clase para desvanecer la imagen actual

        setTimeout(function() {
            backgroundElement.style.backgroundImage = `url(${images[currentIndex]})`; // Cambia la imagen de fondo
            backgroundElement.classList.remove('fade-out'); // Elimina la clase de desvanecimiento después de la transición
            currentIndex = (currentIndex + 1) % images.length; // Avanza al siguiente índice de imagen
        }, 1000); // Tiempo de espera para que termine la transición
    }

    // Cambia la imagen de fondo cada 5 segundos
    setInterval(changeBackgroundImage, 3000);
});


document.addEventListener('DOMContentLoaded', function() {
    const images = ['IMG/MANTEYPRK.jpg', 'IMG/mante foto.jpg', 'image3.jpg']; // Lista de imágenes de fondo
    let currentIndex = 0;
    const backgroundElement = document.querySelector('.background-image');

    function changeBackgroundImage() {
        backgroundElement.classList.add('fade-out'); // Agrega clase para desvanecer la imagen actual

        setTimeout(function() {
            backgroundElement.style.backgroundImage = `url(${images[currentIndex]})`; // Cambia la imagen de fondo
            backgroundElement.classList.remove('fade-out'); // Elimina la clase de desvanecimiento después de la transición
            currentIndex = (currentIndex + 1) % images.length; // Avanza al siguiente índice de imagen
        }, 1000); // Tiempo de espera para que termine la transición
    }

    // Cambia la imagen de fondo cada 5 segundos
    setInterval(changeBackgroundImage, 5000);
});


         $(document).ready(function(){
            $('#toggleSectorsMenu').click(function(){
                $('.sectors-menu').slideToggle();
                // Cambiar la flecha de la caret
                let caret = $(this).find('.caret');
                caret.html(caret.html() === '▼' ? '&#9650;' : '&#9660;');
            });
        });
        // Obtener los elementos
        var modal = document.getElementById("messageModal");
        var messageIcon = document.getElementById("messageIcon");
        var closeModal = document.getElementById("closeModal");

        // Abrir el modal al hacer clic en el ícono de mensaje
        messageIcon.onclick = function() {
            modal.style.display = "block";
        }

        // Cerrar el modal al hacer clic en la "X"
        closeModal.onclick = function() {
            modal.style.display = "none";
        }

        // Cerrar el modal al hacer clic fuera del contenido del modal
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

        document.addEventListener('DOMContentLoaded', function() {
            const toggleButton = document.querySelector('.toggle-button');
            const sectorsMenu = document.querySelector('.sectors-menu');

            toggleButton.addEventListener('click', function() {
                const isVisible = sectorsMenu.style.display === 'block';
                sectorsMenu.style.display = isVisible ? 'none' : 'block';
                toggleButton.querySelector('span:last-child').textContent = isVisible ? '+' : '-';
            });
        });
        