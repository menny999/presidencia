// Definición de la lista de clientes
const clients = [
    {
        id: 1234,
        Nombre: "Jaime",
        apellidos: "Cordova Sanchez",
        adad: 17,
        fecha: "11/01/2007",
        genero: "Masculino",
        ciudad: "Ciudad Mante"
    },
    {
        id: 12345,
        Nombre: "Valentina",
        apellidos: "Espindola Sandoval",
        adad: 16,
        fecha: "20/08/2007",
        genero: "Femenino",
        ciudad: "Ciudad Mante"
    },
    
];

// Función para buscar y mostrar los detalles del cliente
function searchClient() {
    const clientID = parseInt(document.getElementById("clientID").value);
    const client = clients.find(c => c.id === clientID);
    if (client) {
        const clientDetails = `
            Nombre: ${client.Nombre} ${client.apellidos}\n
            Edad: ${client.adad}\n
            Fecha de Nacimiento: ${client.fecha}\n
            Género: ${client.genero}\n
            Ciudad de Nacimiento: ${client.ciudad}

        `;
        document.getElementById("clientDetails").innerText = clientDetails;
    } else {
        document.getElementById("clientDetails").innerText = "Cliente no encontrado";
    }
}
function openPage(role) {
    if (role === 'Registro') {
        window.location.href = 'registrar.html';
    } 
}
