// 9. Repetir una palabra un número determinado de veces

// Crea una función que reciba una palabra y un número, y devuelva un string donde la palabra se repita ese número de veces separada por espacios.

const repetirPalabra = (palabra, num) => (palabra + ' ').repeat(num).trimEnd();

console.log(repetirPalabra("Hola", 3)); 