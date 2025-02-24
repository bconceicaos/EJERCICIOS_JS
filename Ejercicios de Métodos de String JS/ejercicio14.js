// 14. Determinar si un texto contiene una palabra prohibida

// Dado un texto y un array de palabras prohibidas, escribir una función que devuelva true si alguna de las palabras prohibidas está presente en el texto, y false en caso contrario.

const contienePalabraProhibida = (texto, palabras) => palabras.some(palabra => texto.includes(palabra));

console.log(contienePalabraProhibida("Este es un mensaje inapropiado", ["malo", "inapropiado", "prohibido"]));