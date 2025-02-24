// 1. Modificación de un Array Numérico con Operaciones Matemáticas

// Dado un array de números enteros positivos, escribe una función que:

// Multiplique los números en posiciones pares por 2 y los de posiciones impares por 3.
// Reste 5 a todos los números mayores de 10.
// Devuelva el nuevo array con los valores modificados.

function modificarArray(numeros) {
    return numeros.map((num, index) => {
        let nuevoValor = (index % 2 === 0) ? num * 2 : num * 3;
        if (nuevoValor > 10) {
            nuevoValor -= 5;
        }
        return nuevoValor;
    });
}

const numeros1 = [10, 6, 5, 1, 9, 5];
console.log(modificarArray(numeros1));