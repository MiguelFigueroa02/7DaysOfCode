// dia 3
let especializaciones = [];
function mostrarDialogo() {
    let cuadroDialogo = document.getElementById('pregunta');
    cuadroDialogo.showModal();
}
function camino(decision){
    document.querySelector('#camino').classList.remove('hidden');
}