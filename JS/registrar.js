// Definición de la lista de clientes
const clients = [
   
    
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
        document.getElementById("clientDetails").innerText = "Hay un espacio en blanco";
    }
}
