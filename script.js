// script.js

function lanzarMonedas() {
    let caras = 0;
    for (let i = 0; i < 3; i++) {
        if (Math.random() < 0.5) caras++;
    }
    return caras;
}

function actualizarFrecuencias(numLanzamientos, frecuencias) {
    for (let i = 0; i < numLanzamientos; i++) {
        const resultado = lanzarMonedas();
        frecuencias[resultado]++;
    }
}

function imprimirHistograma(frecuencias, totalLanzamientos) {
    let histograma = '';
    
    // Calcular el porcentaje de cada frecuencia
    for (let i = 0; i < frecuencias.length; i++) {
        const porcentaje = (frecuencias[i] / totalLanzamientos) * 100;
        const cantidadAsteriscos = Math.round(porcentaje); // Redondea al entero más cercano
        histograma += `${i} caras: ${'*'.repeat(cantidadAsteriscos)} (${porcentaje.toFixed(2)}%)\n`;
    }
    
    document.getElementById('histograma').textContent = histograma;
}

document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();

    const numLanzamientos = parseInt(document.getElementById('numLanzamientos').value, 10);
    const frecuencias = [0, 0, 0, 0]; // Frecuencias de 0, 1, 2 y 3 caras

    actualizarFrecuencias(numLanzamientos, frecuencias);
    imprimirHistograma(frecuencias, numLanzamientos);
});
