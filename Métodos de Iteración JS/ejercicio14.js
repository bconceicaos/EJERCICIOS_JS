// 14. Encontrar el Segundo Número Más Grande

// Tienes este array de números:
// const numbers = [45, 67, 12, 89, 34, 22];

/*
Instrucciones:
- Ordena los números de mayor a menor usando sort.
- Elimina el número más grande con shift o pop.
- Devuelve el segundo número más grande.
-- Resultado esperado: 67
*/

const numbers = [45, 67, 12, 89, 34, 22];

console.log(numbers.sort().reverse);  // ordena los números de mayor a menor

numbers.sort().pop();  // elimina el número más grande
console.log(numbers);

const numeroLargo = numbers.length;
const ultimoNum = numbers.sort()[numeroLargo - 1]
console.log(ultimoNum);