// día 4
let maximo = 10;
let minimo = 0;
let maximoIntentos = 3;
let intentoActual = 0;
let numeroSecreto;
let numerosJuego2 = [];
function numeroAzar() {
    numeroSecreto = Math.floor(Math.random() *(maximo - minimo) + minimo);
    console.log(numeroSecreto);
    let botonesJuegos = document.getElementById('contenedorBotonesJuego');
    botonesJuegos.classList.remove('hidden');
    let boton = document.querySelector('.resultado__iniciar');
    boton.setAttribute('disabled','true');
    encendidoBotones();
}
function esconderBotonesJuegos(){
  let botonesParaEsconder = document.getElementById('contenedorBotonesJuego');
  botonesParaEsconder.classList.add('hidden');
}
function cicloWhile() {
  esconderBotonesJuegos();
  let botonesCicloWhile = document.getElementById('botones_Ciclo_While');
  botonesCicloWhile.classList.remove('hidden');
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
function activarBotonReinicio() {
  let botonreinicio = document.getElementById('boton__reinicio');
  botonreinicio.classList.remove('hidden');
}
document.addEventListener('DOMContentLoaded', boton);
function apagadoBotones() {
    let botonesApagar = document.querySelectorAll('.juego_boton');
    // let botonreinicio = document.getElementById('boton__reinicio');
    // botonreinicio.classList.remove('hidden');
    activarBotonReinicio();
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
    mensaje('');
    // encendidoBotones();
    let esconderCicloWhile = document.getElementById('botones_Ciclo_While');
    esconderCicloWhile.classList.add('hidden');
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
            // alert(`Felicidades, el número secreto es ${numeroSecreto}`);
            let textoGanador = `Felicidades, el número secreto es ${numeroSecreto}. `;
            let textoGanador2 = `Atinaste en ${intentoActual}` + " " + (intentoActual === 1 ? 'intento': 'intentos');
            let textoFinal = textoGanador + textoGanador2;
            mensaje(textoFinal);
            apagadoBotones();
            break;
          } else {
            if (maximoIntentos === intentoActual) {
            //   alert(`Fallaste, el número secreto es ${numeroSecreto}`);
                let textoFault = `Fallaste, el número secreto es ${numeroSecreto}`;
                mensaje(textoFault);
                apagadoBotones();
                break;
            } else {
                let textoContinuar;
                if (numeroSecreto > numeroJesus) {
                    // alert(textoUno+' El número secreto es mayor');
                    textoContinuar = textoUno+' El número secreto es mayor';
                    mensaje(textoContinuar);
                } else if(numeroSecreto < numeroJesus){
                    // alert(textoUno+' El número secreto es menor');
                    textoContinuar = textoUno+' El número secreto es menor';
                    mensaje(textoContinuar);
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
  function mensaje(texto){
    let textoMensaje = texto;
    let parrafo = document.querySelector('.resultado__parrafo');
    parrafo.innerHTML = textoMensaje;
  }
// función con ciclo for
let numeroUsuario;
  function seleccionUsuario(texto) {
    let mensajeUsuario = "¿Cuál crees que es el número secreto?"
    if (texto !== undefined) {
      mensajeUsuario = mensajeUsuario + texto;
    }
    let pregunta = Number(prompt(mensajeUsuario));
    return pregunta;
    
  }
  function iniciarJuego() {
    numeroUsuario = seleccionUsuario();
    juego2();
    esconderBotonesJuegos();
    activarBotonReinicio();
  }
//   let numeroUsuario = seleccionUsuario();
let numerosJugados;
  function juego2() {
    for (let i = 1; i <= maximoIntentos; i++) {
      if (numerosJuego2.includes(numeroUsuario)) {
        alert(`Ya habías jugado el número ${numeroUsuario}, Intenta nuevamente`);
        numeroUsuario = seleccionUsuario(numerosJugados);
      } else if (isNaN(numeroUsuario) || numeroUsuario > 10) {
        alert('Ingresa un valor válido');
        numeroUsuario = seleccionUsuario(numerosJugados);
      }
      console.log (`El número de usuario es ${numeroUsuario}`);
      console.log(`intentos ${i}`);
      if (numeroUsuario === numeroSecreto) {
        alert(`Felicidades, el número secreto es ${numeroSecreto}`);
        numerosJuego2 = [];
        break;
      } else {
        if (maximoIntentos == i) {
          alert(`Fallaste, el número secreto es ${numeroSecreto}`);
          numerosJuego2 = [];
          break;
        } else {
          numerosJuego2.push(numeroUsuario);
          numerosJugados = 'Los números jugados son: ';
          for (let index = 0; index < numerosJuego2.length; index++) {
            numerosJugados = numerosJugados + String(numerosJuego2[index]) + ((index < numerosJuego2.length -1)? ",":" ");
          }


          let mensajeAlert = "Sigue intetando. "
          if (numeroUsuario > numeroSecreto) {
            mensajeAlert = mensajeAlert + "El número Secreto es menor";
            
            alert(mensajeAlert);
          } else if(numeroUsuario < numeroSecreto){
            mensajeAlert = mensajeAlert + "El número Secreto es mayor";
            alert(mensajeAlert);
          }
          numeroUsuario = seleccionUsuario(numerosJugados);
        }
      }
    }
  }
//   juego2();