// 10. Invertir y Transformar Números

// Tienes este array:
// const nums = [1, 2, 3, 4, 5];

/*
Instrucciones:
- Invierte el array usando reverse.
- Multiplica cada número por su índice usando map.
-- Resultado esperado: [0, 4, 6, 4, 0]
*/

const nums = [1, 2, 3, 4, 5];

nums.reverse();

// multiplicar cada número por su índice
const result = nums.map((num, index) => num * index);

console.log(result); 