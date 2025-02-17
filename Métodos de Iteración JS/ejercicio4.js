// 4. Invertir y Unir Nombres

// Dado este array de nombres:
// const names = ['Alice', 'Bob', 'Charlie', 'David'];

/*
Instrucciones:
- Invierte el orden de los nombres con reverse.
- Únelos en una sola cadena separada por guiones (-) usando join.
-- Resultado esperado: 'David-Charlie-Bob-Alice'
*/

const names = ['Alice', 'Bob', 'Charlie', 'David'];

names.reverse();

const result = names.join('-'); // unirlos en una sola cadena separada por guiones

console.log(result);