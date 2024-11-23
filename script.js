
// Then define window.onload
window.onload = () => {
    // Create cards
    crearTarjetas(filosofos);

    // Create handlers for control buttons
    let botonCrearTarjeta = document.querySelector('.create-btn');
    botonCrearTarjeta.addEventListener('click', crearNuevaTarjeta);

    let botonesOrdenacion = document.querySelectorAll('.sort-btn');
    let botonOrdenAZ = botonesOrdenacion[0];
    let botonOrdenZA = botonesOrdenacion[1];

    botonOrdenAZ.addEventListener('click', ordenarNombreAZ);
    botonOrdenZA.addEventListener('click', ordenarNombreZA);

    let botonGuardarTarjetas = document.querySelector('.save-btn');
    let botonCargarTarjetas = document.querySelector('.load-btn');

    botonGuardarTarjetas.addEventListener('click', guardarTarjetas);
    botonCargarTarjetas.addEventListener('click', cargarTarjetas);

};

function crearTarjetas(filosofos) {
    filosofos.forEach((filosofo) => {
        // Creamos tarjeta vacía
        let tarjeta = document.createElement('div');
        tarjeta.classList.add('card');
        // Creamos imagen
        let imagen = document.createElement('img');
        imagen.src = filosofo.imagen;
        imagen.alt = `Foto de ${filosofo.nombre}`;
        imagen.classList.add("photo");
        tarjeta.append(imagen);

        // Creamos caja de informacion
        let info = document.createElement('div');
        info.classList.add('card-info');
        tarjeta.append(info);
        // Creamos título
        let titulo = document.createElement('h3');
        titulo.classList.add('nombre');
        titulo.innerHTML = filosofo.nombre;
        info.append(titulo);
        // Creamos fila de información (info-row)
        let filaInfo = document.createElement('div');
        filaInfo.classList.add('info-row');
        info.append(filaInfo);

        // Añadimos info del país a filaInfo
        let divInfoPais = document.createElement('div');
        divInfoPais.classList.add('info-pais');
        filaInfo.append(divInfoPais);


        let tituloCorriente = document.createElement('span');
        tituloCorriente.innerHTML = "Corriente: ";
        divInfoPais.append(tituloCorriente);

        let nombreCorriente = document.createElement('span');
        nombreCorriente.classList.add('corriente');
        nombreCorriente.innerHTML = filosofo.corriente;
        divInfoPais.append(nombreCorriente);

        // Añadimos info de la corriente a filaInfo

        // Añadimos info del arma a filaInfo

        let divArma = document.createElement('div');
        divArma.classList.add('info-arma');
        filaInfo.append(divArma);

        let tituloArma = document.createElement('span');
        tituloArma.innerHTML = "Arma:";
        divArma.append(tituloArma);

        let nombreArma = document.createElement('span');
        nombreArma.classList.add('arma');
        nombreArma.innerHTML = filosofo.arma;
        divArma.append(nombreArma);


        // Añadimos caja de habilidades
        let habilidades = document.createElement('div');
        habilidades.classList.add('skills');
        info.append(habilidades);
        // Añadimos una a una las habilidades
        for (let infoHabilidad of filosofo.habilidades) {
            // Añadimos una caja de habilidad
            let cajaHabilidad = document.createElement('div');
            // Añadimos contenido caja de habilidad
            // 1.Icono de habilidad
            cajaHabilidad.classList.add('skill');
            // 2.Etiqueta de habilidad
            let etiquetaHabilidad = document.createElement('span');
            etiquetaHabilidad.classList.add('skill-name')
            etiquetaHabilidad.innerHTML = infoHabilidad.habilidad;
            cajaHabilidad.append(etiquetaHabilidad);

            // 2.Barra de habilidad
            let barraHabilidad = document.createElement('div');
            barraHabilidad.classList.add('skill-bar');
            let barraLevel = document.createElement('div');
            barraLevel.style.width = `${(infoHabilidad.nivel / 4) * 100}%`;
            barraLevel.classList.add('level');

            barraHabilidad.append(barraLevel);
            cajaHabilidad.append(barraHabilidad);
            habilidades.append(cajaHabilidad);

        }


        let cuadroBotonEliminar = document.createElement('div');
        let botonElminiar = document.createElement('button');
        botonElminiar.classList.add('botonEliminar')
        botonElminiar.innerHTML = "&#x2716;";


        botonElminiar.addEventListener('click', eliminarTarjeta);
        cuadroBotonEliminar.append(botonElminiar);
        tarjeta.append(cuadroBotonEliminar);

        // Añadimos tarjeta creada al contenedor de tarjetas
        let contenedor = document.querySelector('.cards-container');
        contenedor.append(tarjeta);
    })
}


function eliminarTarjeta(event) {
    let tarjeta = event.target.closest('.card');

    tarjeta.remove();
}

function ordenarNombreAZ() {
    let tarjetas = Array.from(document.querySelectorAll('.card'));
    let tarjetasOrdenadas = tarjetas.sort((tarjetaA, tarjetaB) => {
        let nombre1 = tarjetaA.querySelector('h3').innerHTML;
        let nombre2 = tarjetaB.querySelector('h3').innerHTML;
        return nombre1.localeCompare(nombre2);
    });

    // Eliminar totes les targetes de l'array 'tarjeta'
    // Completar codi

    // Afegir 'tarjetasOrdenadas' al contenidor de cards
    let contenedor = document.querySelector('.cards-container');
    contenedor.innerHTML = '';
    tarjetasOrdenadas.forEach(tarjeta => {
        contenedor.appendChild(tarjeta);
    });
    // Completar codi
}

function ordenarNombreZA() {
    let tarjetas = Array.from(document.querySelectorAll('.card'));
    let tarjetasOrdenadas = tarjetas.sort((tarjetaB, tarjetaA) => {
        let nombre1 = tarjetaA.querySelector('h3').innerHTML;
        let nombre2 = tarjetaB.querySelector('h3').innerHTML;
        return nombre1.localeCompare(nombre2);
    });
    let contenedor = document.querySelector('.cards-container');
    contenedor.innerHTML = '';
    tarjetasOrdenadas.forEach(tarjeta => {
        contenedor.appendChild(tarjeta);
    });
}

function crearNuevaTarjeta(event) {
    event.preventDefault();
    let nuevoFilosofo = {};
    nuevoFilosofo.nombre = document.querySelector('.create-card-form .nombre').value;
    nuevoFilosofo.imagen = document.querySelector('.create-card-form .foto').value;
    nuevoFilosofo.pais = {};
    nuevoFilosofo.pais.nombre = document.querySelector('.create-card-form .pais').value;
    nuevoFilosofo.pais.bandera = document.querySelector('.create-card-form .bandera').value;
    nuevoFilosofo.corriente = document.querySelector('.create-card-form .corriente').value;
    nuevoFilosofo.arma = document.querySelector('.create-card-form .arma').value;
    nuevoFilosofo.habilidades = [];
    let habilidades = document.querySelectorAll('.create-card-form .skills');
    let habilidadesNombres = ["Sabiduria", "Oratoria", "Logica", "Innovacion"];

    habilidades.forEach((input, index) => {
        nuevoFilosofo.habilidades.push({
            habilidad: habilidadesNombres[index],
            nivel: parseInt(input.value)
        });
    });

    crearTarjetas([nuevoFilosofo]);
    // Completar la función
    // crearTarjetas(nuevoFilosofo);
}

function parsearTarjetas(tarjetas) {
    let filosofosParseados = [];
    for (let tarjeta of tarjetas) {
        let filosofo = {};
        filosofo.nombre = tarjeta.querySelector('.nombre').innerHTML;
        filosofo.imagen = tarjeta.querySelector('.photo').src;
        filosofo.pais = {};
        filosofo.pais.nombre = tarjeta.querySelector('.info-pais .pais').innerHTML;
        filosofo.pais.bandera = tarjeta.querySelector('.info-pais img').src;
        filosofo.corriente = tarjeta.querySelector('.info-corriente .corriente').innerHTML;
        filosofo.arma = tarjeta.querySelector('.info-arma .arma').innerHTML;
        filosofo.habilidades = [];

        let habilidades = tarjeta.querySelectorAll('.skill');
        for (let habilidad of habilidades) {
            filosofo.habilidades.push({
                habilidad: habilidad.querySelector('.skill-name').innerHTML,
                nivel: parseInt(habilidad.querySelector('.level').style.width) / 25

            });
        }

        filosofosParseados.push(filosofo);
    }
    return filosofosParseados;
}


function guardarTarjetas() {
    let tarjetas = Array.from(document.querySelectorAll('.card'));
    localStorage.setItem('tarjetas', JSON.stringify(parsearTarjetas(tarjetas)));
    alert('Tarjetas guardadas correctamente.');
}





function cargarTarjetas() {
    let tarjetasGuardadas = localStorage.getItem('tarjetas');
    if (!tarjetasGuardadas) {
        alert('No hay tarjetas guardadas.');
        return;
    }
    let filosofos = JSON.parse(tarjetasGuardadas);
    let contenedor = document.querySelector('.cards-container');
    contenedor.innerHTML = '';
    crearTarjetas(filosofos);
    alert('Tarjetas cargadas correctamente.');
}

const filosofos = [
    {
        nombre: "Platón",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Plato_Pio-Clemetino_Inv305.jpg/1200px-Plato_Pio-Clemetino_Inv305.jpg",
        pais: {
            nombre: "Grecia",
            bandera: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/640px-Flag_of_Greece.svg.png"
        },
        corriente: "Idealismo",
        arma: "Dialéctica",
        habilidades: [{
            habilidad: "Sabiduría",
            nivel: 4
        },
        {
            habilidad: "Oratoria",
            nivel: 4
        },
        {
            habilidad: "Lógica",
            nivel: 3
        },
        {
            habilidad: "Innovación",
            nivel: 4
        }
        ]
    },
    {
        nombre: "Aristóteles",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdXUwy_fFGOJ2vwOMpwtJPyXc9HVb06HSRsbembn7IPKq6D1YitIra2WFM4Gu2rm6yHRs&usqp=CAU",
        pais: {
            nombre: "Grecia",
            bandera: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/640px-Flag_of_Greece.svg.png"
        },
        corriente: "Naturalismo",
        arma: "Lógica",
        habilidades: [{
            habilidad: "Sabiduría",
            nivel: 4
        },
        {
            habilidad: "Oratoria",
            nivel: 3
        },
        {
            habilidad: "Lógica",
            nivel: 4
        },
        {
            habilidad: "Innovación",
            nivel: 3
        }
        ]
    },
    {
        nombre: "Descartes",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg/800px-Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg",
        pais: {
            nombre: "Francia",
            bandera: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/1280px-Flag_of_France.svg.png"
        },
        corriente: "Racionalismo",
        arma: "Meditación",
        habilidades: [{
            habilidad: "Sabiduría",
            nivel: 3
        },
        {
            habilidad: "Oratoria",
            nivel: 3
        },
        {
            habilidad: "Lógica",
            nivel: 2
        },
        {
            habilidad: "Innovación",
            nivel: 3
        }
        ]
    },
    {
        nombre: "Kant",
        imagen: "https://i.pinimg.com/736x/20/89/7f/20897f915acb5124893a278c395382ed.jpg",
        pais: {
            nombre: "Alemania",
            bandera: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/255px-Flag_of_Germany.svg.png"
        },
        corriente: "Trascendentalismo",
        arma: "Crítica",
        habilidades: [{
            habilidad: "Sabiduría",
            nivel: 3
        },
        {
            habilidad: "Oratoria",
            nivel: 2
        },
        {
            habilidad: "Lógica",
            nivel: 3
        },
        {
            habilidad: "Innovación",
            nivel: 3
        }
        ]
    },
    {
        nombre: "Hume",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiFZYg2MiOQSXbkBvFP-T3vW9pnhLW5qDioA&s",
        pais: {
            nombre: "Escocia",
            bandera: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Flag_of_Scotland.svg/640px-Flag_of_Scotland.svg.png"
        },
        corriente: "Empirismo",
        arma: "Escepticismo",
        habilidades: [{
            habilidad: "Sabiduría",
            nivel: 3
        },
        {
            habilidad: "Oratoria",
            nivel: 3
        },
        {
            habilidad: "Lógica",
            nivel: 3
        },
        {
            habilidad: "Innovación",
            nivel: 3
        }
        ]
    },
    {
        nombre: "Arendt",
        imagen: "https://efeminista.com/wp-content/uploads/2021/09/Arendt-Hannah-1-e1576158475623.jpg",
        pais: {
            nombre: "Alemania",
            bandera: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/255px-Flag_of_Germany.svg.png"
        },
        corriente: "Fenomenología",
        arma: "Parresía",
        habilidades: [{
            habilidad: "Sabiduría",
            nivel: 3
        },
        {
            habilidad: "Oratoria",
            nivel: 2
        },
        {
            habilidad: "Lógica",
            nivel: 2
        },
        {
            habilidad: "Innovación",
            nivel: 3
        }
        ]
    }
]

