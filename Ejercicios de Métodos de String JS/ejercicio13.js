// 13. Transformar un texto a mayúsculas y minúsculas alternadas

// Escribir una función que transforme una frase de manera que cada letra alterna entre mayúsculas y minúsculas.

const alternarMayusculas = (texto) => texto.split('').map((c, i) => i % 2 === 0 ? c.toUpperCase() : c.toLowerCase()).join('');

console.log(alternarMayusculas("javascript"));
