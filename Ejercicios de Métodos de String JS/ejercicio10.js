// 10. Extraer la última aparición de una letra en una palabra

// Dada una palabra y una letra, encontrar la última posición en la que aparece dicha letra dentro de la palabra y devolver el índice correspondiente.

const ultimaPosicion = (palabra, letra) => palabra.lastIndexOf(letra);

console.log(ultimaPosicion("programación", "o")); // 7
console.log(ultimaPosicion("desarrollo", "r")); // 4