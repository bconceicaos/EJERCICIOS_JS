// 8. Verificar si una frase termina en una palabra específica

// Dada una frase y una palabra, escribir una función que determine si la frase termina con esa palabra específica y devuelva un booleano.

const terminaCon = (frase, palabra) => frase.endsWith(palabra);

console.log(terminaCon("JavaScript es increíble", "increíble")); // true
console.log(terminaCon("Me gusta programar", "JavaScript")); // false
