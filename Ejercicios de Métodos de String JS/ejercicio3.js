// 3. Buscar una palabra dentro de un texto

// Crea una función que reciba un texto y una palabra, y determine si la palabra está presente dentro del texto, devolviendo un booleano.

const contienePalabra = (texto, palabra) => texto.includes(palabra);

console.log(contienePalabra("Hoy es un gran día", "gran")); // true
console.log(contienePalabra("Hoy es un gran día", "noche")); // false
