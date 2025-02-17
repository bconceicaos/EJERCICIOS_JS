// 2. Ordenar y Eliminar Elementos

//Tienes un array de puntajes:
// const scores = [56, 89, 72, 45, 99, 38, 65];

/*
Instrucciones:
- Ordena el array de mayor a menor con sort.
- Elimina el puntaje más alto usando pop y el más bajo con shift.
-- Resultado esperado: [89, 72, 65, 56, 45]
*/

const scores = [56, 89, 72, 45, 99, 38, 65];

scores.sort().reverse();   // ordenar el array de mayor a menor
console.log(scores); 

scores.pop();   // eliminar el puntaje más alto (último en el array ordenado)
console.log(scores); 

scores.shift(); // eliminar el puntaje más bajo (primero en el array ordenado)
console.log(scores); 