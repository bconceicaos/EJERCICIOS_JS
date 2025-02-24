// 15. Contar cuántas veces aparece una letra en un texto

// Crear una función que reciba un string y una letra, y devuelva el número de veces que esa letra aparece en el texto.

const contarLetra = (texto, letra) => texto.split(letra).length - 1;

console.log(contarLetra("banana", "a")); 