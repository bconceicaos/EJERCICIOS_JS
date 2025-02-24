// 7.  Eliminar espacios innecesarios

// Crear una función que reciba un array de frases y devuelva un nuevo array con cada frase sin espacios al inicio ni al final.

const limpiarEspacios = (frases) => frases.map(frase => frase.trim());

console.log(limpiarEspacios(["  Hola mundo  ", " JavaScript  ", "  Programación "])); 
