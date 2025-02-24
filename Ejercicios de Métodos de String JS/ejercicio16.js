// 16. Eliminar espacios extra dentro de un texto

// Dado un string, eliminar todos los espacios adicionales entre las palabras y devolver el texto con un solo espacio entre cada palabra.

const eliminarEspaciosExtra = (texto) => texto.replaceAll(' ', '');

console.log(eliminarEspaciosExtra("  Hola    mundo   !  ")); 