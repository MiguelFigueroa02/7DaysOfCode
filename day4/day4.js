// día 4
let maximo = 10;
let minimo = 0;
let maximoIntentos = 3;
let intentoActual = 0;
let numeroSecreto;
function numeroAzar() {
    numeroSecreto = Math.floor(Math.random() *(maximo - minimo) + minimo);
    console.log(numeroSecreto);
    let boton = document.querySelector('.resultado__iniciar');
    boton.setAttribute('disabled','true');
    encendidoBotones();
}

// function eleccionUsuario(valor,id) {
//     let numeroUsuario = valor;
//     let boton = document.getElementById(id);
//     boton.setAttribute('disabled','true');
//     juego(numeroUsuario);
// }
// function juego(eleccion) {
//     let numeroElegido = eleccion;
//     if (intentoActual < maximoIntentos && numeroElegido !== numeroSecreto) {
//         alert('Sigue intentando Weon');
//         intentoActual++;
//         numeroElegido = '';
//     } else if (numeroElegido === numeroSecreto) {
//         console.log(`Felicidades, el número secreto es ${numeroSecreto}`);
//         console.log(`Atinaste en ${intentoActual}` + " " + (intentoActual === 1 ? 'intento': 'intentos'));
//     } else{
//         if (intentoActual === maximoIntentos) {
//             alert(`Fallaste, el número secreto es ${numeroSecreto}`);
//             document.querySelectorAll('.juego__boton').forEach(boton =>{
//                 if (boton.hasAttribute('disabled')) {
//                     return;
//                 } else {
//                     boton.setAttribute('disabled','true');
//                 }
//             });
//         }
//     }
// }
let numeroJesus;
let numeroPepe;
function boton() {
    let botones = document.querySelectorAll('.juego_boton');
    botones.forEach(boton =>{
        boton.removeEventListener('click',clickUsuario);
        boton.addEventListener('click',clickUsuario);
    })
    
}
document.addEventListener('DOMContentLoaded', boton);
function apagadoBotones() {
    let botonesApagar = document.querySelectorAll('.juego_boton');
    let botonreinicio = document.getElementById('boton__reinicio');
    botonreinicio.classList.remove('hidden');
    botonesApagar.forEach(botonApagar=>{
        if (botonApagar.hasAttribute('disabled')) {
            return;
        } else{
            botonApagar.setAttribute('disabled','true');
        }
    })
}
function encendidoBotones() {
    let botonesEncender = document.querySelectorAll('.juego_boton');
    botonesEncender.forEach(botonEncender=>{
        if (botonEncender.hasAttribute('disabled')) {
            botonEncender.removeAttribute('disabled');
        } else{
            return;
        }
    })
}
function reinicio() {
    intentoActual = 0;
    numeroSecreto = undefined;
    numeroJesus = undefined;
    // encendidoBotones();
    let botonJugar = document.querySelector('.resultado__iniciar');
    botonJugar.removeAttribute('disabled');
    let botonreiniciar = document.getElementById('boton__reinicio');
    botonreiniciar.classList.add('hidden');
}

function clickUsuario() {
    let numeroPrueba = parseInt(this.value);
    this.setAttribute('disabled','true');
    console.log(numeroPrueba);
    console.log(typeof(numeroPrueba));
    console.log('click');
    numeroJesus = numeroPrueba;
    intentoActual++;
    juego();
}
function juego() {
    let textoUno = 'Sigue intetando.'
    while(intentoActual<=maximoIntentos){
        if (numeroJesus === numeroSecreto) {
            alert(`Felicidades, el número secreto es ${numeroSecreto}`);
            apagadoBotones();
            break;
          } else {
            if (maximoIntentos === intentoActual) {
              alert(`Fallaste, el número secreto es ${numeroSecreto}`);
              apagadoBotones();
              break;
            } else {
                if (numeroSecreto > numeroJesus) {
                    alert(textoUno+' El número secreto es mayor');
                } else if(numeroSecreto < numeroJesus){
                    alert(textoUno+' El número secreto es menor');
                }
            //   alert("Sigue intetando");
              return;
            }
          }
    }
    if (numeroJesus !== numeroSecreto) {
        console.log('ni pepsi');
    }
  }