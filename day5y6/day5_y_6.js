// Día 5 y 6
let frutas = [];
let lacteos = [];
let congelados = [];
let dulces = [];
let actualizarFrutas = false;
let actualizarLacteos = false;
let actualizarCongelados = false;
let actualizarDulces = false;
// mostrar cuadro de texto para seleccionar si se quiere ingresar más información
function cuadroDeDialogo() {
    let cuadro = document.getElementById('ingreso');
    cuadro.showModal();
    cuadro.classList.add('ingreso__animation');
}
function salir() {
    let cuadro = document.getElementById('ingreso');
    cuadro.close();
    actualizarFrutas = true;
    actualizarLacteos = true;
    actualizarCongelados = true;
    actualizarDulces = true;
    imprimirValores();
    let preguntaEliminar = document.getElementById('eliminar__forma');
    preguntaEliminar.classList.remove('hidden');
}
function imprimirValores() {
    if (frutas.length > 0 && actualizarFrutas) {
        actualizarFrutas = false;
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
            frutaOpcion.value = frutas [i];
            formularioFrutas.appendChild(frutaOpcion);
        }
    }
    if (lacteos.length > 0 && actualizarLacteos) {
        actualizarLacteos = false;
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
            lacteoOpcion.value = lacteos [i];
            formularioLacteos.appendChild(lacteoOpcion);

        }
    }
    if (congelados.length > 0 && actualizarCongelados) {
        actualizarCongelados = false;
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
            congeladosOpcion.value = congelados [i];
            formularioCongelados.appendChild(congeladosOpcion);
        }
    }
    if (dulces.length > 0 && actualizarDulces) {
        actualizarDulces = false;
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
            dulcesOpcion.value = dulces [i];
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
    // Ver si se elimina
    eliminarForma();
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
function limpiarCajas() {
    let cajaAlimento = document.querySelector('#informacionAlimento__input');
    cajaAlimento.value = "";
    let cajaOpcion = document.getElementById('informacionAlimento__seleccion');
    cajaOpcion.value = "";
    return;
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
    limpiarCajas();
}
function continuar(){
    document.querySelectorAll('dialog').forEach(dialog =>{
        dialog.close();
    })
    cuadroDeDialogo();
}

let eleccionEliminar2;
function eliminarForma() {
    document.querySelectorAll('.eliminar__forma__boton').forEach(boton=>{
        boton.addEventListener('click', function () {
            eleccionEliminar2 = this.value;
            console.log('el valor es'+ eleccionEliminar2);
            let forma = document.getElementById('eliminar_categoria');
            if (eleccionEliminar2 === 'Sí') {
                console.log('sí');
                forma.classList.remove('hidden');
                return;
            } else if (eleccionEliminar2 === 'No') {
                if (forma.classList.contains('hidden')) {
                    return;
                } else{
                    forma.classList.add('hidden');
                }
            }
        })
    })
}
function categoriaElimina() {
    let valorEliminar = document.getElementById('forma_categoria').value;
    // console.log(valorEliminar);
    document.querySelectorAll('.eliminar__forma__boton').forEach(boton=>{
        boton.setAttribute('disabled','true');
    })
    if (valorEliminar === "") {
        alert('Seleccione categoria');
    }else{
        switch (valorEliminar) {
            case 'frutas':
                console.log('frutas');
                document.getElementById('eliminar_fruta').classList.remove('hidden');
                break;
            case 'lacteos':
                console.log('elegiste lácteos');
                document.getElementById('eliminar_lacteo').classList.remove('hidden');
                break;
            case 'congelados':
                console.log('congelados');
                document.getElementById('eliminar_congelado').classList.remove('hidden');
                break;
            case 'dulces':
                console.log('elegiste dulces');
                document.getElementById('eliminar_dulce').classList.remove('hidden');
                break;

        }
    }
}
function frutaElegida() {
    let selectFruta = document.querySelector('#Lista_frutas');
    let frutaEliminar = selectFruta.value;
    console.log(`elegiste la fruta ${frutaEliminar}`);
    frutas = frutas.filter(fruta => fruta !==frutaEliminar);
    alert(`Se elimina ${frutaEliminar} de la categoría de Frutas`);
    actualizarFrutas = true;
    actualizarListas('listado_frutas','Lista_frutas');
}
function lacteoElegido() {
    let selectLacteo = document.querySelector('#Lista_lacteos');
    let lacteoEliminar = selectLacteo.value;
    console.log(`elegiste  ${lacteoEliminar}`);
    lacteos = lacteos.filter(lacteo => lacteo !==lacteoEliminar);
    alert(`Se elimina ${lacteoEliminar} de la categoría de Lácteos`);
    actualizarLacteos = true;
    actualizarListas('listado_lacteos','Lista_lacteos');
}
function congeladoElegido() {
    let selectCongelado = document.querySelector('#Lista_congelados');
    let congeladoEliminar = selectCongelado.value;
    console.log(`elegiste  ${congeladoEliminar}`);
    congelados = congelados.filter(congelado => congelado !== congeladoEliminar);
    alert(`Se elimina ${congeladoEliminar} de la categoría de congelados`);
    actualizarCongelados = true;
    actualizarListas('listado_congelados','Lista_congelados');
}
function dulceElegido() {
    let selectDulce = document.querySelector('#Lista_dulces');
    let dulceEliminar = selectDulce.value;
    console.log(`elegiste  ${dulceEliminar}`);
    dulces = dulces.filter(dulce => dulce !== dulceEliminar);
    alert(`Se elimina ${dulceEliminar} de la categoría de dulces`);
    actualizarDulces = true;
    actualizarListas('listado_dulces','Lista_dulces');
}
function actualizarListas(IdListado,IdSelect) {
    let elementoUL = document.getElementById(IdListado);
    elementoUL.innerHTML = "";
    let elementoOptions = document.getElementById(IdSelect);
    elementoOptions.innerHTML = "";
    let optionBlanco = document.createElement('option');
    optionBlanco.textContent = "";
    optionBlanco.value = "";
    elementoOptions.appendChild(optionBlanco);
    imprimirValores();
    return;
}