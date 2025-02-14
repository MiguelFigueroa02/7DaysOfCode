//día7

let numeroMostrado = '0';
let primerValor;
let segundoValor;
let matematica;
let matematica2;
let operacionContinua;
let valorEnPantalla;
let actuazarPantalla;
function imprimirNumero(id) {
    let numero = document.getElementById(id);
    let numeroContenido = document.getElementById(id).textContent;
    numero.removeEventListener('click',mostrarNumero);
    numero.addEventListener('click', mostrarNumero(numeroContenido));
    actualizarPantalla = false;
}
function mostrarNumero(numero) {
    let valor = numero;
    //valor ingresado
    console.log(valor);
    valorEnPantalla = actualizaNumero(valor);
    //Aquí es donde debo actualizar valor en pantalla
    console.log(`el valor pantalla es ${valorEnPantalla}`);
}
function actualizaNumero(resultado) {
    if (resultado !== '+' || resultado !== '-' ||resultado !== '*' || resultado !== '/') {
        if (numeroMostrado === '0' || actuazarPantalla) {
            numeroMostrado = resultado;
            return numeroMostrado;
        } else{
            let actualizar = numeroMostrado + resultado;
            numeroMostrado = actualizar;
            return numeroMostrado;
        }
    } else {
        let mensaje = valorEnPantalla + resultado;
        return mensaje;
    }
    // if (numeroMostrado === '0') {
    //     numeroMostrado = resultado;
    //     return numeroMostrado;
    // } else{
    //     let actualizar = numeroMostrado + resultado;
    //     numeroMostrado = actualizar;
    //     return numeroMostrado;
    // }
}
function calcular(operacion) {
    let calculo = document.getElementById(operacion);
    let calculoContenido = document.getElementById(operacion).textContent;
    // valorEnPantalla = calculoContenido;
    mostrarNumero(calculoContenido);
    console.log(calculoContenido);
    let numeroEnviado = parseInt(numeroMostrado);
    calculo.removeEventListener('click',operacionAritmetica);
    calculo.addEventListener('click',operacionAritmetica(numeroEnviado,calculoContenido));
}   
function operacionAritmetica(num,simbolo) {
    //actualizar aquí para que no me haga un error al actualizar el numeroenpantalla
    if (primerValor == null) {
        primerValor = num;
        console.log(`el primer valor es ${primerValor}`);
        matematica = simbolo;
        console.log(`el simbolo es ${simbolo}`);
        numeroMostrado = '';
    } else if (segundoValor == null || segundoValor === 0) {
        segundoValor = num;
        numeroMostrado = ''
        operacionContinua = true;
        matematica2 = simbolo;
        //esto es lo último 11:05 am
        console.log(`el segundo valor es ${segundoValor}`);
    } else {
        calculofinal(primerValor,segundoValor,matematica);
        segundoValor = num;
        matematica = matematica2;
        matematica2 = simbolo;
        console.log(`hice un cálculo continuo`);
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
    primerValor = resultadoFinal;
    segundoValor = 0;
    numeroMostrado = '';
    mostrarNumero(String(resultadoFinal));
    actuazarPantalla = true;
    //return resultadoFinal;
}
//falta función para retornar resultado como primervalor y colocar segundoValor = 0
//falta función para continuar con operación cuando se presiona el operador aritmético más de una vez
//me falta botón de reinicio
//falta función para que coloque resultado en la cajita donde se ingresa resultado numérico