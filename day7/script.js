//día7

let numeroMostrado = '0';
let primerValor;
let segundoValor;
let matematica;
function imprimirNumero(id) {
    let numero = document.getElementById(id);
    let numeroContenido = document.getElementById(id).textContent;
    numero.removeEventListener('click',mostrarNumero);
    numero.addEventListener('click', mostrarNumero(numeroContenido));
}
function mostrarNumero(numero) {
    let valor = numero;
    //valor ingresado
    console.log(valor);
    let valorEnPantalla = actualizaNumero(valor);
    //Aquí es donde debo actualizar valor en pantalla
    console.log(valorEnPantalla);
}
function actualizaNumero(resultado) {
    if (numeroMostrado === '0') {
        numeroMostrado = resultado;
        return numeroMostrado;
    } else{
        let actualizar = numeroMostrado + resultado;
        numeroMostrado = actualizar;
        return numeroMostrado;
    }
}
function calcular(operacion) {
    let calculo = document.getElementById(operacion);
    let calculoContenido = document.getElementById(operacion).textContent;
    console.log(calculoContenido);
    let numeroEnviado = parseInt(numeroMostrado);
    calculo.removeEventListener('click',operacionAritmetica);
    calculo.addEventListener('click',operacionAritmetica(numeroEnviado,calculoContenido));
}   
function operacionAritmetica(num,simbolo) {
    if (primerValor == null) {
        primerValor = num;
        console.log(`el primer valor es ${primerValor}`);
        matematica = simbolo;
        console.log(`el simbolo es ${simbolo}`);
        numeroMostrado = '0';
    } else if (segundoValor == null) {
        segundoValor = num;
        numeroMostrado = '0'
        console.log(`el segundo valor es ${segundoValor}`);
    } 
}
function igual() {
    let final = document.getElementById('igualdad');
    final.removeEventListener('click',calculofinal);
    if (primerValor == null && segundoValor == null) {
        primerValor = parseInt(numeroMostrado);
        segundoValor = 0;
    } else {
        segundoValor = parseInt(numeroMostrado);
        console.log(`el segundo valor obtenido con el boton igual es ${segundoValor}`);
    }
    final.addEventListener('click',calculofinal(primerValor,segundoValor,matematica));
}
function calculofinal(numOne,numTwo,oper) {
    let inicio = numOne;
    let despues = numTwo;
    let tratamiento = oper;
    console.log(`empiezo con ${inicio}, al cual le hago ${tratamiento} al cual ajusto con ${despues}`);
    let resultadoFinal;
    switch (oper) {
        case "+":
            resultadoFinal = numOne + numTwo;
            break;

        case "-":
            resultadoFinal = numOne - numTwo;
            break;
    
        case "*":
            resultadoFinal = numOne * numTwo;
            break;

        case "/":
            resultadoFinal = numOne / numTwo;
            break;
                
        default:
            resultadoFinal = 'especifique cálculo';
            break;
    }
    console.log(`el resultado final es ${resultadoFinal}`);
}