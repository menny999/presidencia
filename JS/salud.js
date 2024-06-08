document.addEventListener("DOMContentLoaded", function() {
    // Contenidos de ejemplo para el sector de salud
    const healthData = [
        {
            title: "Hospital Local",
            description: "Ofrecemos una amplia gama de servicios de salud para la comunidad."
        },
        {
            title: "Centro de Salud",
            description: "Proporcionamos atención médica preventiva y curativa para personas de todas las edades."
        }
    ];

    const healthCardsContainer = document.getElementById('health-cards');

    // Generar las tarjetas de salud dinámicamente
    healthData.forEach(item => {
        const card = `
            <div class="col-md-6">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">${item.description}</p>
                        <a href="#" class="btn btn-primary">Más información</a>
                    </div>
                </div>
            </div>
        `;
        healthCardsContainer.innerHTML += card;
    });
});
