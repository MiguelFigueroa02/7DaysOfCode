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
        console.log('continua');
    }
}
function reinicio() {
    document.querySelector('#camino').classList.add('hidden');
    document.querySelector('#eleccionEspecializacion').classList.add('hidden');
    document.getElementById('resultado').classList.add('hidden');
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