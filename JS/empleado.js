const products = [
    { code: "001", name: "El Mago - Dandy Hats", price: "$3,800.00", image: "IMG/El Mago - Dandy Hats.jpg" },
    { code: "002", name: "LA Nube - 31 Hats", price: "$2,599.00", image: "IMG/La Money Clouds.jpg" },
    { code: "003", name: "Fino - Gallo Fino", price: "$2,399.00", image: "IMG/Fino - Gallo Fino.jpg" }
];


function searchProduct() {
    const productCode = document.getElementById("productCode").value;
    const product = products.find(item => item.code === productCode);
    if (product) {
        document.getElementById("productName").innerText = product.name;
        document.getElementById("productPrice").innerText = "Precio: " + product.price;
        document.getElementById("productImage").src = product.image;
        document.getElementById("productDetails").classList.remove("hidden");
        document.getElementById("clearButton").classList.remove("hidden");
    } else {
        alert("Producto no encontrado");
    }
}

function clearScreen() {
    window.location.reload(); // Recarga la página
}
const clients = [
    { id: 1234, name: "Luis Emmanuel Martinez Hernandez" },
    { id: 2, name: "Miranda Escobedo Marin" },
    { id: 3, name: "Eduardo Villanueva Morales" }
];

function searchClient() {
    const clientID = document.getElementById("clientID").value;
    const client = clients.find(c => c.id === parseInt(clientID));
    if (client) {
        document.getElementById("clientDetails").innerText = `Nombre: ${client.name}`;
    } else {
        document.getElementById("clientDetails").innerText = "Cliente no encontrado";
    }
}




