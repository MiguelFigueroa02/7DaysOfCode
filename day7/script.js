//día7
// let pantalla = document.querySelector('#pantalla');
let numeroMostrado = '';
let primerValor;
let segundoValor;
let matematica;
let matematica2;
// let operacionContinua;
let valorEnPantalla;
let nuevoNumero;
function imprimirNumero(id) {
    let numero = document.getElementById(id);
    let numeroContenido = document.getElementById(id).textContent;
    nuevoNumero = false;
    numero.removeEventListener('click',mostrarNumero);
    numero.addEventListener('click', mostrarNumero(numeroContenido));
    // actualizarPantalla = false;
    // actuazarPantalla = false;
}
function mostrarNumero(numero) {
    let valor = numero;
    //valor ingresado
    // console.log(valor);
    valorEnPantalla = actualizaNumero(valor);
    //Aquí es donde debo actualizar valor en pantalla
    // console.log(`el valor pantalla es ${valorEnPantalla}`);
    let pantalla = document.querySelector('#pantalla');
    pantalla.innerHTML = valorEnPantalla;
    // if (segundoValor === 0) {
    //     actuazarPantalla = true;
    // } else{
    //     actuazarPantalla = false;
    // }
}
function actualizaNumero(resultado) {
    if (resultado !== '+' && resultado !== '-' && resultado !== '*' && resultado !== '/') {
        if (nuevoNumero) {
            numeroMostrado = resultado;
            // primerValor = undefined;
            // segundoValor = undefined;
            nuevoNumero = false;
            return numeroMostrado;
        }  else if (numeroMostrado ==='0') {
            if (resultado === '.') {
                let actualizar = numeroMostrado + resultado;
                numeroMostrado = actualizar;
                return numeroMostrado;
            } else{
                numeroMostrado = resultado;
                // primerValor = undefined;
                // segundoValor = undefined;
                nuevoNumero = false;
                return numeroMostrado;
            }
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
    // console.log(calculoContenido);
    let numeroEnviado = parseFloat(numeroMostrado);
    calculo.removeEventListener('click',operacionAritmetica);
    calculo.addEventListener('click',operacionAritmetica(numeroEnviado,calculoContenido));
}   
function operacionAritmetica(num,simbolo) {
    //actualizar aquí para que no me haga un error al actualizar el numeroenpantalla
    if (primerValor === undefined) {
        primerValor = num;
        // console.log(`el primer valor es ${primerValor}`);
        matematica = simbolo;
        // console.log(`el simbolo es ${simbolo}`);
        numeroMostrado = "";
        nuevoNumero = true;
    } else if (segundoValor === undefined || segundoValor === 0) {
        segundoValor = num;
        numeroMostrado = undefined;
        matematica2 = simbolo;
        //esto es lo último 11:05 am
        calculofinal(primerValor,segundoValor,matematica);
        primerValor = parseFloat(numeroMostrado);
        numeroMostrado = '';
        nuevoNumero = true;
        mostrarNumero(numeroMostrado);
        matematica = matematica2;
    }
    // else {
    //     calculofinal(primerValor,segundoValor,matematica);
    //     segundoValor = num;
    //     matematica = matematica2;
    //     matematica2 = simbolo;
    //     console.log(`hice un cálculo continuo`);
    // }
}
function igual() {
    let final = document.getElementById('igualdad');
    final.removeEventListener('click',calculofinal);
    if (primerValor === undefined && segundoValor === undefined) {
        primerValor = parseFloat(numeroMostrado);
        segundoValor = 0;
    } else {
        segundoValor = parseFloat(numeroMostrado);
        // console.log(`el segundo valor obtenido con el boton igual es ${segundoValor}`);
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
    primerValor = undefined;
    segundoValor = undefined;
    // Redondear resultados a dos decimales si incluye punto para evitar error de parse.float()
    if (String(resultadoFinal).includes('.')) {
        numeroMostrado = String(resultadoFinal.toFixed(2));
    } else{
        numeroMostrado = String(resultadoFinal);
    }
    nuevoNumero = true;
    mostrarNumero(numeroMostrado);
    // actuazarPantalla = true;
    //return resultadoFinal;
}
function reinicio() {
    numeroMostrado = '';
    primerValor = undefined;
    segundoValor = undefined;
    nuevoNumero = true;
    valorEnPantalla = '0'
    mostrarNumero(valorEnPantalla);
    return;
}
//falta función para retornar resultado como primervalor y colocar segundoValor = 0
//falta función para continuar con operación cuando se presiona el operador aritmético más de una vez
//me falta botón de reinicio
//falta función para que coloque resultado en la cajita donde se ingresa resultado numérico