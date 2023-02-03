// Arreglo información regiones
let infoRegiones = [
    {   nombre: 'Región de Arica y Parinacota',
        atractivos: ['Lago Chungará','Momias Chinchorro'],
        foto: "img/01.jpg"
    },
    {   nombre: 'Región de Tarapacá',
        atractivos: ['Salitrera Humberstone','Iquique glorioso'],
        foto: "img/02.jpg"
    },
    {   nombre: 'Región de Antofagasta',
        atractivos: ['San Pedrito','Valle de La Luna'],
        foto: "img/03.jpg"
    },
    {   nombre: 'Región de Atacama',
        atractivos: ['Bahía Inglesa','Desierto florido'],
        foto: "img/04.jpg"
    },
    {   nombre: 'Región de Coquimbo',
        atractivos: ['Valle del Elqui','Cruz del Milenio'],
        foto: "img/05.jpg"
    },
    {   nombre: 'Región de Valparaíso',
        atractivos: ['Reloj de Flores','Muerte al JCruz'],
        foto: "img/06.jpg"
    },
    {   nombre: 'Región Metropolitana',
        atractivos: ['Plaza de Armas','Cerro San Cristóbal'],
        foto: "img/07.jpg"
    },
    {   nombre: 'Región de O\'Higgins',
        atractivos: ['Sewell','Rancagua no existe'],
        foto: "img/08.jpg"
    },
    {   nombre: 'Región del Maule',
        atractivos: ['Siete Tazas','Completos mojados'],
        foto: "img/09.jpg"
    },
    {   nombre: 'Región del Bío-Bío',
        atractivos: ['Salto del Laja','Dichato'],
        foto: "img/10.jpg"
    },
    {   nombre: 'Región de La Araucanía',
        atractivos: ['Conguillío','Amulepe taiñ weichan'],
        foto: "img/11.jpg"
    },
    {   nombre: 'Región de Los Ríos',
        atractivos: ['Río Calle-Calle','Fuerte Niebla'],
        foto: "img/12.jpg"
    },
    {   nombre: 'Región de Los Lagos',
        atractivos: ['Lago Llanquihue','Lago Todos los Santos'],
        foto: "img/13.jpg"
    },
    {   nombre: 'Región de Aysén',
        atractivos: ['Laguna San Rafael','Catedrales de Mármol'],
        foto: "img/14.jpg"
    },
    {   nombre: 'Región de Magallanes',
        atractivos: ['Torres del Paine','Fide XII'],
        foto: "img/15.jpg"
    }  
];

// Función para mostrar tarjeta con la info del arreglo infoRegiones correspondiente
var areaMouse = document.getElementsByTagName('area'); // Genera arreglo de elementos con tag <area>
for (let i = 0; i < areaMouse.length; i++) { // Loop sobre el length de areaMouse para detectar índice (i)
    areaMouse[i].addEventListener ('mouseover', function() { // Detecta cuando un elemento <area> de areaMouse tiene el mouse encima y dispara la función
        document.getElementById('tarjeta').style.display = ''; // Muestra la tarjeta
        document.getElementById('nombre').textContent = `${infoRegiones[i].nombre}`; // Modifica Título tarjeta
        document.getElementById('atractivo1').textContent = `${infoRegiones[i].atractivos[0]}`; // Modifica Primer Atractivo
        document.getElementById('atractivo2').textContent = `${infoRegiones[i].atractivos[1]}`; // Modifica Segundo Atractivo
        document.getElementById('imagenRegion').src = `${infoRegiones[i].foto}`; // Modifica imagen tarjeta
        }
    );
};

// Función para ocultar tarjeta onMouseOut (ver HTML <area>)
function ocultar() {
    document.getElementById('tarjeta').style.display = 'none';
};