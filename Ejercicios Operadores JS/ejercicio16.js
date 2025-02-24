// 16. Modificación de un Array según un Criterio

// Dado un array de números, escribe una función que:

// Sustituya todos los números negativos por 0.
// Devuelva el array modificado.

function sustituirNegativos(array) {
    return array.map(num => num < 0 ? 0 : num);
}

const numeros = [5, -2, 8, -1, 4];
const numerosModificados = sustituirNegativos(numeros);
console.log(numerosModificados);