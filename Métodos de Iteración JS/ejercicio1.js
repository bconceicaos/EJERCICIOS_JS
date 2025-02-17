// 1. Duplicar y Filtrar Números Pares

// Dado el siguiente array de números:
// const numbers = [3, 7, 12, 5, 9, 20, 15];

/*
Instrucciones:
- Duplica cada número usando map.
- Filtra solo los números pares que sean mayores que 20 usando filter.
-- Resultado esperado: [24, 40]
*/

const numbers = [3, 7, 12, 5, 9, 20, 15];

// duplicar cada número usando map
const duplicatedNumbers = numbers.map(num => num * 2);

// filtrar solo los números pares mayores que 20
const filteredNumbers = duplicatedNumbers.filter(num => num > 20 && num % 2 === 0);

console.log(filteredNumbers);