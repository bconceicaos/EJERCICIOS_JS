// 20. Histograma de Ocurrencias en un Array de Números

// Dado un array de números, crea un objeto donde:

// Las claves sean los números únicos del array.
// Los valores sean la cantidad de veces que aparecen en el array.

function crearHistograma(numeros) {
    return numeros.reduce((histograma, num) => {
        histograma[num] = (histograma[num] || 0) + 1;
        return histograma;
    }, {});
}

const numeros = [1, 2, 2, 3, 3, 3, 4];
const histograma = crearHistograma(numeros);
console.log(histograma);