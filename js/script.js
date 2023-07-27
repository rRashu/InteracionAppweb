function autor() {
    let contenedorPrincipal = document.getElementById("contenedor");
    contenedorPrincipal.style.display = "none";
    let nuevoContenido = document.getElementById("autorcontenedor");
    nuevoContenido.style.display = "block";
    let text = document.getElementById("glow");
    text.style.display = "block";
}

function masa() {
    let contenedorPrincipal = document.getElementById("contenedor");
    contenedorPrincipal.style.display = "none";
    let nuevoContenido = document.getElementById("option_masa");
    nuevoContenido.style.display = "block";
}

function moneda() {
    let contenedorPrincipal = document.getElementById("contenedor");
    contenedorPrincipal.style.display = "none";
    let nuevoContenido = document.getElementById("option_moneda");
    nuevoContenido.style.display = "block";
}

function volver() {
    let contenedormasa = document.getElementById("option_masa");
    let contenedormoneda = document.getElementById("option_moneda");
    let contenedautor = document.getElementById("autorcontenedor");
    let glow = document.getElementById("glow");
    glow.style.display = "none";
    contenedautor.style.display = "none";
    contenedormasa.style.display = "none";
    contenedormoneda.style.display = "none";
    let nuevoContenido = document.getElementById("contenedor");
    nuevoContenido.style.display = "block";
}


function validarNumero(input) {

    let text1 = document.getElementById("input1");
    let text2 = document.getElementById("input2");
    let selectElement = document.getElementById('masa_1');
    let valorSeleccionado = selectElement.value;
    let selectElement2 = document.getElementById('masa_2');
    let valorSeleccionado2 = selectElement2.value;
    let valor1 = parseFloat(valorSeleccionado);
    let valor2 = parseFloat(valorSeleccionado2);

    // Elimina cualquier carácter no numérico, excepto el punto decimal, del valor del input
    input.value = input.value.replace(/[^\d.]/g, '');

    // Puedes mostrar un mensaje de error si el usuario intenta ingresar caracteres no numéricos incorrectos
    let mensajeError = document.getElementById("mensaje-error");
    if (isNaN(input.value) || input.value === '.') {
        mensajeError.textContent = "Ingresa un número válido.";
    } else {
        if (input.id === 'input1') {
            text2.value = (parseFloat(input.value) * (valor1 / valor2)).toFixed(3);
        } else if (input.id === 'input2') {
            text1.value = (parseFloat(input.value) * (valor2 / valor1)).toFixed(3);
        }
        mensajeError.textContent = "";
    }
}

function validarNumeromoneda(input) {
    let text1moneda = document.getElementById("input1mo");
    let text2moneda = document.getElementById("input2mo");
    let selectElement = document.getElementById('moneda_1');
    let valorSeleccionado = selectElement.value;
    let selectElement2 = document.getElementById('moneda_2');
    let valorSeleccionado2moneda = selectElement2.value;
    let valor1moneda = parseFloat(valorSeleccionado);
    let valor2moneda = parseFloat(valorSeleccionado2moneda);

    // Elimina cualquier carácter no numérico, excepto el punto decimal, del valor del input
    input.value = input.value.replace(/[^\d.]/g, '');

    // Puedes mostrar un mensaje de error si el usuario intenta ingresar caracteres no numéricos incorrectos
    let mensajeError = document.getElementById("mensaje-error");
    if (isNaN(input.value) || input.value === '.') {
        mensajeError.textContent = "Ingresa un número válido.";
    } else {
        if (input.id === 'input1mo') {
            text2moneda.value = (parseFloat(input.value) * (valor1moneda / valor2moneda)).toFixed(3);
        } else if (input.id === 'input2mo') {
            text1moneda.value = (parseFloat(input.value) * (valor2moneda / valor1moneda)).toFixed(3);
        }
        mensajeError.textContent = "";
    }
}
