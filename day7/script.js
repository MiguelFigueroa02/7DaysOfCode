//día7

let numeroMostrado = 0;
function imprimirNumero(id) {
    let numero = document.getElementById(id);
    let numeroContenido = document.getElementById(id).textContent;
    numero.removeEventListener('click',mostrarNumero);
    numero.addEventListener('click', mostrarNumero(numeroContenido));
}
function mostrarNumero(numero) {
    let valor = numero;
    console.log(valor);
    let valorEnPantalla = actualizaNumero(valor);
    console.log(valorEnPantalla);
}
function actualizaNumero(resultado) {
    if (resultado === '0' || resultado == numeroMostrado) {
        return;
    } else{
        let actualizar = numeroMostrado + resultado;
        numeroMostrado = actualizar;
        return numeroMostrado;
    }
}