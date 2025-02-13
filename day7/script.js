//día7

function imprimircero() {
    let zero = document.querySelector('#cero');
    let content = document.querySelector('#cero').textContent;
    console.log(`diste clik en ${content}`);
    console.log(typeof(content));
    zero.removeEventListener('click',mostrarNumero);
    zero.addEventListener('click', mostrarNumero(0));
}
function mostrarNumero(numero) {
    let valor = numero;
    console.log(valor);
}
function imprimirNumero(id) {
    // let uno = document.getElementById('uno');
    // let unoContent = document.getElementById('uno').textContent;
    // uno.addEventListener('click', function () {
    //     console.log(unoContent);
    // });


    // let dos = document.getElementById('dos');
    // let dosContent = document.getElementById('dos').textContent;
    // dos.addEventListener('click', function () {
    //     console.log(dosContent);
    // });
    let uno = document.getElementById(id);
    let unoContent = document.getElementById(id).textContent;
    uno.addEventListener('click', function () {
        console.log(unoContent);
    });
}
