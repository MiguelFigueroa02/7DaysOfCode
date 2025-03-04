// día 1
let variableUno;
let variableDos;
let selectorMensajeUno = '#botones__var_uno';
let selectorMensajeDos = '#botones__var_dos';
let selectorComparacion = '#comparar__seccion_resultado';

function asignarVariable(valor) {
    if (!variableUno) {
        variableUno = valor;
        imprimirResult(variableUno,selectorMensajeUno);
        imprimirTexto(selectorComparacion,'');
    } else if (!variableDos){
        variableDos = valor;
        imprimirResult(variableDos,selectorMensajeDos);
    }
}
function imprimirResult(variable,selector) {
    // console.log(`La variable tiene un valor de ${variable} y es de tipo ${typeof(variable)}`);
    let textoVariable = `La variable tiene un valor de ${variable} y es de tipo ${typeof(variable)}`;
    imprimirTexto(selector,textoVariable);
    if (variableUno && variableDos) {
        document.querySelectorAll('.numbers__lista__boton').forEach(boton => {
            boton.setAttribute('disabled','true');
        });
        document.querySelectorAll('.string__lista__boton').forEach(botton =>{
            botton.setAttribute('disabled','true');
        });
        document.getElementById('comparar__seccion__Valor').removeAttribute('disabled');
    }
}
function comparaValor(){
    let textoComparacion;
    if (variableUno === variableDos) {
        // console.log(`La variable ${typeof(variableUno)} ${variableUno} y ${typeof(variableDos)} ${variableDos} son del mismo valor y del mismo tipo`);
        textoComparacion = `La variable ${typeof(variableUno)} ${variableUno} y ${typeof(variableDos)} ${variableDos} son del mismo valor y del mismo tipo`;
    } else {
        if (variableUno == variableDos) {
            // console.log(`Las variables ${typeof(variableUno)} ${variableUno} y ${typeof(variableDos)} ${variableDos} tienen el mismo valor, pero tipos diferentes`);
            textoComparacion = `Las variables ${typeof(variableUno)} ${variableUno} y ${typeof(variableDos)} ${variableDos} tienen el mismo valor, pero tipos diferentes`;
        } else if (typeof(variableUno) === typeof(variableDos)) {
            textoComparacion = `Las variables ${typeof(variableUno)} ${variableUno} y ${typeof(variableDos)} ${variableDos} tienen diferente valor, pero son del mismo tipo`;
        }
        else {
            // console.log(`Las variables ${typeof(variableUno)} ${variableUno} del tipo y ${typeof(variableDos)} ${variableDos} tienen diferentes valor y tipo`);
            textoComparacion = `Las variables ${typeof(variableUno)} ${variableUno} del tipo y ${typeof(variableDos)} ${variableDos} tienen diferentes valor y tipo`;
        }
    }
    imprimirTexto(selectorComparacion,textoComparacion);
    imprimirTexto(selectorMensajeUno,'');
    imprimirTexto(selectorMensajeDos,'');
    reinicio();
}

function reinicio() {
    document.querySelectorAll('.numbers__lista__boton').forEach(boton => {
        boton.removeAttribute('disabled');
    });
    document.querySelectorAll('.string__lista__boton').forEach(botton =>{
        botton.removeAttribute('disabled');
    });
    document.getElementById('comparar__seccion__Valor').setAttribute('disabled','true');
    variableUno = undefined;
    variableDos = undefined;
}
function imprimirTexto(etiqueta,texto){
    let elemento = document.querySelector(etiqueta);
    elemento.innerHTML =texto;
    return;
}