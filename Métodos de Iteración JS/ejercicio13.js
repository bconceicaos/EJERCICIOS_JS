// 13. Filtrar y Unir Palabras

// Dado el siguiente array:
// const words = ['apple', 'banana', 'avocado', 'cherry', 'apricot'];

/*
Instrucciones:
- Filtra las palabras que comiencen con la letra 'a' usando filter.
- Une las palabras resultantes en una sola cadena separada por comas usando join.
-- Resultado esperado: 'apple,avocado,apricot'
*/

const palabras = ['apple', 'banana', 'avocado', 'cherry', 'apricot'];

const filtro = palabras.filter(word => word[0] === 'a');

const result = filtro.join(',');

console.log(result);