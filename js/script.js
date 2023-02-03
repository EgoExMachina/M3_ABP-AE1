// Arreglo información regiones
let infoRegiones = [
    {   id: 01,
        nombre: 'Región de Arica y Parinacota',
        atractivos: ['Lago Chungará','Momias Chinchorro'],
        foto: "img/01.jpg"
    },
    {   id: 02,
        nombre: 'Región de Tarapacá',
        atractivos: ['Salitrera Humberstone','Playas'],
        foto: "img/02.jpg"
    },
    {   id: 03,
        nombre: 'Región de Antofagasta',
        atractivos: ['San Pedro de Atacama','Valle de La Luna'],
        foto: "img/03.jpg"
    },
    {   id: 04,
        nombre: 'Región de Atacama',
        atractivos: ['Bahía Inglesa','Caldera'],
        foto: "img/04.jpg"
    },
    {   id: 05,
        nombre: 'Región de Coquimbo',
        atractivos: ['Valle del Elqui','Cruz del Milenio'],
        foto: "img/05.jpg"
    },
    {   id: 06,
        nombre: 'Región de Valparaíso',
        atractivos: ['Reloj de Flores','Muerte al JCruz'],
        foto: "img/06.jpg"
    },
    {   id: 07,
        nombre: 'Región Metropolitana',
        atractivos: ['Plaza de Armas','Cerro San Cristóbal'],
        foto: "img/07.jpg"
    },
    {   id: 08,
        nombre: 'Región de O\'Higgins',
        atractivos: ['Sewell','Rancagua no existe'],
        foto: "img/08.jpg"
    },
    {   id: 09,
        nombre: 'Región del Maule',
        atractivos: ['Siete Tazas','Completos mojados'],
        foto: "img/09.jpg"
    },
    {   id: 10,
        nombre: 'Región del Bío-Bío',
        atractivos: ['Salto del Laja','Dichato'],
        foto: "img/10.jpg"
    },
    {   id: 11,
        nombre: 'Región de La Araucanía',
        atractivos: ['Conguillío','Amulepe taiñ weichan'],
        foto: "img/11.jpg"
    },
    {   id: 12,
        nombre: 'Región de Los Ríos',
        atractivos: ['Río Calle-Calle','Fuerte Niebla'],
        foto: "img/12.jpg"
    },
    {   id: 13,
        nombre: 'Región de Los Lagos',
        atractivos: ['Lago Llanquihue','Lago Todos los Santos'],
        foto: "img/13.jpg"
    },
    {   id: 14,
        nombre: 'Región de Aysén',
        atractivos: ['Laguna San Rafael','Catedrales de Mármol'],
        foto: "img/14.jpg"
    },
    {   id: 15,
        nombre: 'Región de Magallanes',
        atractivos: ['Torres del Paine','Fide XII'],
        foto: "img/15.jpg"
    }  
];

// Función para mostrar tarjeta con la info del arreglo infoRegiones correspondiente
var areaMouse = document.getElementsByTagName('area'); // Genera arreglo de elementos con tag <area>
console.log(areaMouse); // Muestra en consola arreglo creado
for (let i = 0; i < areaMouse.length; i++) { // Loop sobre length de areaMouse para detectar índice (i)
    areaMouse[i].addEventListener ('mouseover', function() { // Detecta cuando un elemento <area> de areaMouse tiene el mouse encima y dispara la función
        document.getElementById('tarjeta').style.display = ''; // Muestra la tarjeta
        document.getElementById('nombre').textContent = `${infoRegiones[i].nombre}`; // Modifica Título tarjeta
        document.getElementById('atractivo1').textContent = `${infoRegiones[i].atractivos[0]}`; // Modifica Primer Atractivo
        document.getElementById('atractivo2').textContent = `${infoRegiones[i].atractivos[1]}`; // Modifica Segundo Atractivo
        document.getElementById('imagenRegion').src = `${infoRegiones[i].foto}`; // Modifica imagen tarjeta
        console.log(i); // Muestra índice de región seleccionada en consola
        }
    );
};

// Función para ocultar tarjeta onMouseOut (ver HTML <area>)
function ocultar() {
    document.getElementById('tarjeta').style.display = 'none';
};