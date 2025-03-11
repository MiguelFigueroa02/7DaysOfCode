// Día 2
let nombre;
let edad;
let lenguaje;
let parrafoEtiqueta = '.cuestionario__mensaje';

function cuestionario() {
    nombre = document.querySelector('#cuestionario__nombre').value;
    edad = document.querySelector('#cuestionario__edad').value;
    lenguaje = document.querySelector('#cuestionario__lenguaje').value;

    if (!nombre || !edad || !lenguaje) {
        let textoAdvertencia = 'Por favor ingresa'
        let faltante = [];
        if (!nombre) {
            faltante.push('Nombre');
        }
        if (!edad) {
            faltante.push('Edad');
        }
        if (!lenguaje) {
            faltante.push('Lenguaje');
        }
        for (let index = 0; index < faltante.length; index++) {
            textoAdvertencia = textoAdvertencia + ' tu ' + faltante[index];
        }
        console.log(`${textoAdvertencia}`);
        imprimirTexto(textoAdvertencia,parrafoEtiqueta);
    } else{
        let textoResultado = `Hola ${nombre}, tienes ${edad} años y estás aprendiendo ${lenguaje}`;
        imprimirTexto(textoResultado,parrafoEtiqueta);
        let preguntaOpcional = `¿Te gusta estudiar ${lenguaje}?`;
        imprimirTexto(preguntaOpcional,'#optional__label');
        document.getElementById('optional__boton').removeAttribute('disabled');
        document.getElementById('formularioOpcional').classList.remove('escondido');
    }
}
function optional() {
    let resultadoSelector = document.querySelector('#optional__select');
    let resultado = resultadoSelector.value;
    let resultadoMensaje;
    let mensajeSelector = '.optional__mensaje';
    if (resultado === 'Sí') {
        resultadoMensaje = '¡Muy bien! Sigue estudiando y tendrás mucho éxito.';
    } else if (resultado === 'No') {
        resultadoMensaje = 'Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?';
    } else {
        resultadoMensaje = 'No seleccionaste la opción correcta, vuelve a intentar';
    }
    imprimirTexto(resultadoMensaje,mensajeSelector);
}
function imprimirTexto(texto,seletor) {
    let mensajeVisualizado = "🤖:"
    mensajeVisualizado = mensajeVisualizado + texto;
    let parrafo = document.querySelector(seletor);
    parrafo.innerHTML = mensajeVisualizado;
    parrafo.classList.remove('animacion__texto');
    void parrafo.offsetWidth;
    parrafo.classList.add('animacion__texto');
}