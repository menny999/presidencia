// Datos de ejemplo de trabajos disponibles
const jobs = [
    { title: "Oficial de Policía", description: "Patrullar las calles y mantener el orden público." },
    { title: "Asistente Administrativo", description: "Apoyo en tareas de oficina y atención al público." },
    { title: "Jardinero", description: "Mantenimiento de áreas verdes y jardines públicos." },
    { title: "Ingeniero Civil", description: "Planificación y supervisión de proyectos de construcción." }
];

// Función para mostrar los trabajos disponibles en la página
function displayJobs() {
    const jobList = document.getElementById("job-list");
    jobList.innerHTML = ""; // Limpiar la lista de trabajos antes de mostrar los nuevos

    jobs.forEach(job => {
        const jobElement = document.createElement("div");
        jobElement.classList.add("job");

        const titleElement = document.createElement("h2");
        titleElement.textContent = job.title;

        const descriptionElement = document.createElement("p");
        descriptionElement.textContent = job.description;

        const applyButton = document.createElement("button");
        applyButton.textContent = "Aplicar";

        jobElement.appendChild(titleElement);
        jobElement.appendChild(descriptionElement);
        jobElement.appendChild(applyButton);

        jobList.appendChild(jobElement);
    });
}

// Mostrar los trabajos disponibles al cargar la página
window.onload = function() {
    displayJobs();
};
