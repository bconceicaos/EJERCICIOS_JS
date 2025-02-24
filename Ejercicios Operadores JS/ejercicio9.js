// 9. Manipulación de Bits para Doblar o Reducir Valores

// Dado un número, escribe una función que:

// Lo duplique utilizando el operador <<.
// Lo divida entre 2 usando el operador >>.
// Devuelva un objeto con los valores resultantes.

function manipularBits(numero) {
    return {
        duplicado: numero << 1,
        mitad: numero >> 1
    };
}

const result = manipularBits(8);
console.log(result);