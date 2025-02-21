// día 1
let variableUno;
let variableDos;

function asignarVariable(valor) {
    if (!variableUno) {
        variableUno = valor;
        imprimirResult(variableUno);
    } else if (!variableDos){
        variableDos = valor;
        imprimirResult(variableDos);
    }
}
function imprimirResult(variable) {
    console.log(`La variable tiene un valor de ${variable} y es de tipo ${typeof(variable)}`);
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
    if (variableUno === variableDos) {
        console.log(`La variable ${typeof(variableUno)} ${variableUno} y ${typeof(variableDos)} ${variableDos} son del mismo valor y del mismo tipo`);
    } else {
        if (variableUno == variableDos) {
            console.log(`Las variables ${typeof(variableUno)} ${variableUno} y ${typeof(variableDos)} ${variableDos} tienen el mismo valor, pero tipos diferentes`);
        } else {
            console.log(`Las variables ${typeof(variableUno)} ${variableUno} del tipo y ${typeof(variableDos)} ${variableDos} tienen diferentes valor y tipo`);
        }
    }
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