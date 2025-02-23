// dia 3
let especializaciones = [];
let eleccionUsuario;
function mostrarDialogo() {
    let cuadroDialogo = document.getElementById('pregunta');
    cuadroDialogo.showModal();
}
function camino(decision){
    eleccionUsuario = decision;
    if (decision === 'Sí') {
        document.querySelector('#camino').classList.remove('hidden');
    } else{
        mostrarDialogo2();
    }
}
function especializacion(eleccion) {
    document.querySelector('#eleccionEspecializacion').classList.remove('hidden');
    document.querySelectorAll('.camino__boton').forEach((elemento)=>{
        elemento.setAttribute('disabled','true');
    })
    if (eleccion === 'Front-End') {
        document.getElementById('React').classList.remove('hidden');
        document.getElementById('Vue').classList.remove('hidden');
    } else if (eleccion === 'Back-End') {
        document.getElementById('C#').classList.remove('hidden');
        document.getElementById('Java').classList.remove('hidden');
    }
}
function lenguaje(elegido) {
    let texto = `Aprenderás ${elegido}`
    let mensajePantalla = document.getElementById('resultado__mensaje');
    mensajePantalla.innerHTML = texto;
    if (especializaciones.includes(elegido)) {
        console.log('Intenta Nuevamente');
        reinicio();
        mostrarDialogo();
    } else {
        especializaciones.push(elegido);
        let dialogoResultado = document.getElementById('resultado');
        dialogoResultado.classList.remove('hidden');
    }

}
function botonResultado() {
    // let resultadoMensaje = document.getElementById('resultado__mensaje');
    // resultadoMensaje.close();
    reinicio();
    while (eleccionUsuario === 'Sí' && especializaciones.length < 4) {
        eleccionUsuario = undefined;
        mostrarDialogo();
    }
    if (especializaciones.length === 4) {
        document.getElementById('probar').setAttribute('disabled','true');
        console.log('continua');
        mostrarDialogo2();
    }
}
function reinicio() {
    let selectorCamino = document.querySelector('#camino').classList;
    if (selectorCamino.contains('hidden')) {
        return;
    } else {
        selectorCamino.add('hidden');
    }
    
    let selectorEspecializacion = document.querySelector('#eleccionEspecializacion').classList;
    if (selectorEspecializacion.contains('hidden')) {
        return;
    } else{
        selectorEspecializacion.add('hidden');
    }

    let selectorResultado = document.getElementById('resultado').classList;
    if (selectorResultado.contains('hidden')) {
        return;
    } else{
        selectorResultado.add('hidden');
    }
    document.querySelectorAll('.camino__boton').forEach((elemento)=>{
        elemento.removeAttribute('disabled')
    });
    document.querySelectorAll('.especializaciones__front').forEach((boton)=>{
        if (boton.classList.contains('hidden')) {
            return;
        } else{
            boton.classList.add('hidden')
        };
    });
    document.querySelectorAll('.especializaciones__back').forEach((boton)=>{
        if (boton.classList.contains('hidden')) {
            return;
        } else{
            boton.classList.add('hidden')
        };
    });
}
function mostrarDialogo2() {
    let cuadroDialogo2 = document.getElementById('nuevaTec');
    cuadroDialogo2.showModal();
    let botonResultado = document.getElementById('tecnologiaResultado__boton');
    botonResultado.setAttribute('disabled','true');
}
function nuevasTecnologias(valor) {
    while (valor === 'Ok') {
        let selector = document.querySelector('#tecnologias').classList;
        if (selector.contains('hidden')) {
            selector.remove('hidden');
            return;
        } else{
            return;
        }
    }
    if (valor === 'No') {
        let mensaje = 'Aprenderás:';
        for (let i = 0; i < especializaciones.length; i++){
           mensaje = mensaje + " " + especializaciones[i] + (i === (especializaciones.length - 1) ? '🚀' : ',' );
        }
        let parrafoFinal = document.getElementById('mensajefinal');
        parrafoFinal.innerHTML = mensaje;
        console.log(mensaje);
        let selectorTecnologia = document.getElementById('tecnologias').classList;
        if (selectorTecnologia.contains('hidden')) {
            return;
        } else{
            selectorTecnologia.add('hidden');
        }
        let selectortextoTecnologia = document.getElementById('tecnologiaResultado').classList;
        if (selectortextoTecnologia.contains('hidden')) {
            return;
        } else{
            selectortextoTecnologia.add('hidden');
        }
    }
}
function enviarNuevaTecnologia() {
    let input = document.querySelector('#tecnologias__input');
    let tecnologia = input.value;
    let mensajeTecnologia;
    if (tecnologia === undefined || tecnologia === "") {
        mensajeTecnologia = 'Ingrese la nueva tecnología en que te gustaría especializarte';
        textoTecnologia(mensajeTecnologia);
    } else if (especializaciones.includes(tecnologia)) {
        mensajeTecnologia = 'Ya te estás especializando en eso. Ingresa nueva tecnología';
        textoTecnologia(mensajeTecnologia);
    } else{
        mensajeTecnologia = `Aprenderás ${tecnologia}`;
        textoTecnologia(mensajeTecnologia);
        especializaciones.push(tecnologia);
        document.querySelector('#tecnologias__input').value = '';
        document.getElementById('tecnologiaResultado__boton').removeAttribute('disabled');
        // mostrarDialogo2();
    }
}
function textoTecnologia(texto) {
    document.getElementById('tecnologiaResultado').classList.remove('hidden');
    let textoFinal = document.querySelector('#tecnologiaResultado__mensaje');
    textoFinal.innerHTML = texto;
}