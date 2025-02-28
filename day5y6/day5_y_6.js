// Día 5 y 6
let frutas = [];
let lacteos = [];
let congelados = [];
let dulces = [];
// mostrar cuadro de texto para seleccionar si se quiere ingresar más información
function cuadroDeDialogo() {
    let cuadro = document.getElementById('ingreso');
    cuadro.showModal();
}
function salir() {
    let cuadro = document.getElementById('ingreso');
    cuadro.close();
    imprimirValores();
}
function imprimirValores() {
    if (frutas.length > 0) {
        let tituloFrutas = document.querySelector('#titulo_frutas');
        tituloFrutas.innerHTML = 'Frutas';
        let listadoFrutas = document.getElementById('listado_frutas');
        let formularioFrutas = document.getElementById('Lista_frutas');
        for (let i = 0; i < frutas.length; i++) {
            let nuevaFruta = document.createElement("li");
            nuevaFruta.textContent = frutas [i];
            listadoFrutas.appendChild(nuevaFruta);
            let frutaOpcion = document.createElement('option');
            frutaOpcion.textContent = frutas [i];
            formularioFrutas.appendChild(frutaOpcion);
        }
    }
    if (lacteos.length > 0) {
        let tituloLacteos = document.querySelector('#titulo_lacteos');
        tituloLacteos.innerHTML = 'Lacteos';
        let listadoLacteos = document.getElementById('listado_lacteos');
        let formularioLacteos = document.getElementById('Lista_lacteos');
        for (let i = 0; i < lacteos.length; i++) {
            let nuevoLacteo = document.createElement("li");
            nuevoLacteo.textContent = lacteos [i];
            listadoLacteos.appendChild(nuevoLacteo);
            let lacteoOpcion = document.createElement('option');
            lacteoOpcion.textContent = lacteos [i];
            formularioLacteos.appendChild(lacteoOpcion);
        }
    }
    if (congelados.length > 0) {
        let tituloCongelados = document.querySelector('#titulo_congelados');
        tituloCongelados.innerHTML = 'Congelados';
        let listadoCongelados = document.getElementById('listado_congelados');
        let formularioCongelados = document.getElementById('Lista_congelados');
        for (let i = 0; i < congelados.length; i++) {
            let nuevoCongelado = document.createElement("li");
            nuevoCongelado.textContent = congelados [i];
            listadoCongelados.appendChild(nuevoCongelado);
            let congeladosOpcion = document.createElement('option');
            congeladosOpcion.textContent = congelados [i];
            formularioCongelados.appendChild(congeladosOpcion);
        }
    }
    if (dulces.length > 0) {
        let tituloDulces = document.querySelector('#titulo_dulces');
        tituloDulces.innerHTML = 'Dulces';
        let listadoDulces = document.getElementById('listado_dulces');
        let formularioDulces = document.getElementById('Lista_dulces');
        for (let i = 0; i < dulces.length; i++) {
            let nuevoDulce= document.createElement("li");
            nuevoDulce.textContent = dulces [i];
            listadoDulces.appendChild(nuevoDulce);
            let dulcesOpcion = document.createElement('option');
            dulcesOpcion.textContent = dulces [i];
            formularioDulces.appendChild(dulcesOpcion);
        }
    }
}
function cuadroDialogo2() {
    let formulario = document.getElementById('alimento');
    formulario.showModal();
}
// document.querySelector('#informacionAlimento__input').addEventListener('input', function () {
//     document.querySelector('#informacionAlimento__seleccion').removeAttribute('disabled');
// })
document.addEventListener('DOMContentLoaded', function() {
    let input = document.querySelector('#informacionAlimento__input');
    let seleccion = document.querySelector('#informacionAlimento__seleccion');
    if (input && seleccion) {
        input.addEventListener('input', function() {
        seleccion.removeAttribute('disabled');
        })
    }
})
function seleccionUsuario(resultado) {
    let eleccion = resultado;
    if (eleccion === 'Sí') {
        cuadroDialogo2();
        // return;
    } else if (eleccion === 'No') {
        salir();
    }
}
function valorCategoria() {
    let opcion = document.getElementById('informacionAlimento__seleccion');
    let valorRetornado = opcion.value;
    console.log(`la categoría es ${valorRetornado}`)
    return valorRetornado
}
function guardarAlimento() {
    let alimento = document.querySelector('#informacionAlimento__input');
    let texto = alimento.value;
    let categoria = valorCategoria();
    // let categoria;
    // document.querySelector('#informacionAlimento__seleccion').addEventListener('change', function(){
    //     categoria = this.value;
    //     console.log(`la categoría es ${categoria}`);
    // })
    if (categoria === '' || !categoria) {
        alert('Selecciona una categoría válida');
        cuadroDialogo2();
        return;
    } else if (frutas.includes(texto) || lacteos.includes(texto) || congelados.includes(texto) || dulces.includes(texto)) {
        alert('El alimento ya se había ingresado');
        cuadroDialogo2();
        return;
    } else{
        let textoGuardar = `Se guardó en la catagoría ${categoria} el alimento ${texto}`;
        let valor;
        if (categoria === 'Frutas') {
            frutas.push(texto);
            mensajeGuardado(textoGuardar);
        } else if (categoria=== 'Lácteos') {
            lacteos.push(texto);
            mensajeGuardado(textoGuardar);
        } else if (categoria=== 'Congelados') {
            congelados.push(texto);
            mensajeGuardado(textoGuardar);
        } else if (categoria=== 'Dulces') {
            dulces.push(texto);
            mensajeGuardado(textoGuardar);
        }
    }
}
function mensajeGuardado(texto) {
    let mensajeRetornado = document.getElementById('mensajeGuardado__texto');
    mensajeRetornado.innerHTML = texto;
    let dialogo = document.getElementById('mensajeGuardado');
    dialogo.showModal();
}
function continuar(){
    document.querySelectorAll('dialog').forEach(dialog =>{
        dialog.close();
    })
    cuadroDeDialogo();
}