// 19. Verificar si una cadena comienza con una subcadena específica

// Crear una función que reciba un string y una subcadena y devuelva true si la cadena comienza con la subcadena indicada, false en caso contrario.

const comienzaCon = (cadena, subcadena) => cadena.startsWith(subcadena);

console.log(comienzaCon("JavaScript es genial", "JavaScript")); // true
console.log(comienzaCon("JavaScript es genial", "Python")); // false
