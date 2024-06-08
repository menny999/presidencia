const card1 = document.querySelector('.card1');
const card2 = document.querySelector('.card2');
const card3 = document.querySelector('.card3');
const card4 = document.querySelector('.card4');
const card5 = document.querySelector('.card5');
const card6 = document.querySelector('.card6');


const bg = document.querySelector('.general');
const title = document.querySelector('h1');
const textCard = document.querySelector('p');
const colorTitle = '#FFA500';

card1.addEventListener('click', () =>{
    bg.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url('IMG/nacimiento.jpg')";
    title.innerText = 'El Nacimiento';
    textCard.innerText = 'El nacmiento de Ciudad Mante está vinculado a la llegada de colonizadores españoles a la región en el siglo XVIII. La fundación de lo que eventualmente se convertiría en Ciudad Mante se remonta a alrededor del año 1750. En ese momento, un grupo de colonos españoles estableció un asentamiento en una zona rica en recursos naturales, especialmente en tierras fértiles adecuadas para la agricultura. La región era conocida por su abundancia de árboles de "mante", de los cuales derivó el nombre de "El Mante". Estos árboles, también llamados "manteyas" o "mantas", eran una especie de corteza que se utilizaba para diversos fines, como la construcción de viviendas y la fabricación de objetos artesanales. Inicialmente, el área se desarrolló como un centro agrícola, aprovechando la tierra fértil para cultivar una variedad de cultivos, incluyendo caña de azúcar, maíz, algodón y más. Con el tiempo, el asentamiento creció en tamaño y importancia, convirtiéndose en un punto focal para el comercio y la vida social en la región. La ciudad fue oficialmente reconocida y establecida como municipio en el año 1828, consolidando su estatus como una comunidad en crecimiento dentro del estado de Tamaulipas, México. A lo largo de los años, Ciudad Mante ha experimentado cambios y desarrollos significativos, pero su historia como un centro agrícola y comercial sigue siendo una parte integral de su identidad.';
});
card2.addEventListener('click', () =>{
    bg.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url('IMG/difusora.jpg')";
    title.innerText = 'Balneario La Difusora';
    textCard.innerText = 'El Balneario La Difusora es uno de los principales atractivos turísticos de Ciudad Mante, Tamaulipas. Este balneario ofrece una variedad de servicios e instalaciones diseñadas para proporcionar a los visitantes un día lleno de diversión, relajación y entretenimiento en un entorno natural. La Difusora dispone de amplias áreas verdes ideales para relajarse, hacer picnic o jugar al aire libre. Estas áreas están equipadas con mesas y bancas para la comodidad de los visitantes. Palapas y Asadores, Existen palapas equipadas con asadores donde las familias y grupos pueden hacer uso de ello.';
    
})
card3.addEventListener('click', () =>{
    bg.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url('IMG/Castillo .jpg')";
    title.innerText = 'Castillo Nueva Apolonia';
    textCard.innerText = 'Este gran edificio, semiabandonado y algo deteriorado por el paso de los años, semeja un rígido y sobrio castillo medieval español. Cuando por alguna razón recorremos la monótona planicie de la temporalera, importante zona agrícola al sur del municipio de El Mante, Tamaulipas, en realidad no esperamos encontrar nada fuera de lo común; no obstante, este trayecto nos depara algo extraordinario. Un poco antes de llegar al poblado de Nueva Apolonia, podemos advertir, a lo lejos, una extraña y singular silueta que sobresale del terreno circundante. Aguijoneados por la curiosidad, nos internamos por sus polvorientas calles y un poco después, casi en las afueras y antes de cruzar el río Santa Clara, nos sorprende encontrar una robusta e imponente construcción: el castillo de Nueva Apolonia. Este gran edificio, semiabandonado y algo deteriorado por el paso de los años, semeja un rígido y sobrio castillo medieval español, el cual, con sus grandes terreones estratégicamente distribuidos y por su estilo europeo, parece estar fuera de lugar y de contexto; sin embargo, la austera arquitectura de su fachada armoniza perfectamente con el entorno natural, donde crecen altivas las palmas deSabal mexicana; arquitectura y naturaleza se unen en una extraña simbiosis donde plantas típicas del bosque tropical espinoso que alguna vez cubriera toda la zona crecen afianzándose de los muros y troneras del castillo.';
})
card4.addEventListener('click', () =>{
    bg.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url('IMG/Plaza.jpg')";
    title.innerText = 'Plaza Plutarco Elías Calles';

    textCard.innerText = 'La Plaza Plutarco Elías Calles se encuentra en el corazón de Ciudad Mante, en el centro de la ciudad. Es un punto focal para actividades sociales, culturales y recreativas en la comunidad. La plaza lleva el nombre de Plutarco Elías Calles, quien fue presidente de México entre 1924 y 1928. Es conocido por su papel en la consolidación del poder del Partido Revolucionario Institucional (PRI) y por su influencia en la política mexicana de principios del siglo XX. La plaza suele contar con áreas verdes, bancos para sentarse, fuentes, monumentos y esculturas. Es un lugar popular para que los residentes locales se reúnan, socialicen y realicen actividades recreativas. La Plaza Plutarco Elías Calles a menudo es el escenario de eventos culturales, conciertos, ferias, festivales y celebraciones locales. También puede ser utilizada para actividades cívicas, como desfiles y ceremonias. Como centro de la ciudad, la plaza desempeña un papel crucial en la vida social y cultural de Ciudad Mante. Es un lugar donde las personas se encuentran, se relajan y disfrutan del ambiente comunitario.';
})
card5.addEventListener('click', () =>{
    bg.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url('IMG/La-Aguja.jpg')";
    title.innerText = 'La Aguja';

    textCard.innerText = 'El inmueble data de 1949, el cual albergó al edificio social Lázaro Cárdenas de la Cooperativa de Ejidatarios y Obreros del Ingenio de El Mante, en 1982 fue adaptado para albergar la Casa de Cultura Mante.';
})

card6.addEventListener('click', () =>{
    bg.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url('IMG/BellasArtes.jpg')";
    title.innerText = 'Casa de la cultura';

    textCard.innerText = 'Es un popular balneario que se creó en el cauce del río Guayalejo con la construcción de una presa sobre el Río Mante, la cual sirve para irrigar los grandes cañaverales de la región. De aquí se puede navegar aguas arriba hasta llegar al nacimiento. Además puedes disfrutar de los bellos paisajes, con amplias zonas arboladas. Hay juegos infantiles y con servicios básicos.';
})


/* MENU MOBILE */

const menuMobile = document.querySelector('.menu-mobile');
const links = document.querySelector('.links');
const linksItens = document.querySelectorAll('.links a');

menuMobile.addEventListener('click', () => {
    links.classList.toggle('active');
});

/* FECHA O MENU AO CLICAR NO LINK */
linksItens.forEach((linksItem) => {
    linksItem.addEventListener('click', () => {
        links.classList.toggle('active');
    })
})
const cards = document.querySelectorAll('.card');

// Agrega un evento de clic a cada tarjeta
cards.forEach(card => {
    card.addEventListener('click', () => {
        // Remueve la clase 'visible' de todos los párrafos antes de mostrar el texto
        document.querySelectorAll('.card p').forEach(p => p.classList.remove('visible'));
        // Añade la clase 'visible' al párrafo correspondiente a la tarjeta clicada para mostrarlo con una transición suave
        card.querySelector('p').classList.add('visible');
    });
});
