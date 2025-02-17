// 8. Convertir Números a Cadenas

// Trabaja con este array de números:
// const nums = [10, 20, 30, 40, 50];

/*
Instrucciones:
Convierte cada número en una cadena de texto usando map y toString.
-- Resultado esperado: ['10', '20', '30', '40', '50']
*/

const nums = [10, 20, 30, 40, 50];

// convertir cada número en una cadena de texto
const stringNums = nums.map(num => num.toString());

console.log(stringNums); 