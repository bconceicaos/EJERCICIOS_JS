// 12. Manipular Lista de Tareas

// Dado este array de tareas:
// const tasks = ['Wash dishes', 'Do laundry', 'Clean room'];

/*
Instrucciones:
- Agrega 'Buy groceries' al final con push y 'Feed the cat' al principio con unshift.
- Luego elimina la primera y última tarea usando shift y pop.
-- Resultado esperado: ['Do laundry', 'Clean room']
*/

const tasks = ['Wash dishes', 'Do laundry', 'Clean room'];

tasks.push('Buy groceries'); // agrega 'Buy groceries' al final
tasks.unshift('Feed the cat'); // agrega 'Feed the cat' al principio
console.log(tasks);

// elimina la primera y última tarea
tasks.shift(); // elimina 'Feed the cat'
console.log(tasks);

tasks.pop();   // elimina 'Buy groceries'
console.log(tasks);