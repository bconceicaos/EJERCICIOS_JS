// 5. Censurar palabras de un texto

// Dado un texto y un array de palabras prohibidas, crear una función que reemplace cada aparición de una palabra prohibida con asteriscos del mismo tamaño que la palabra censurada.

const censurarTexto = (texto, palabrasProhibidas) => 
    palabrasProhibidas.reduce((acc, palabra) => 
        acc.split(palabra).join('*'.repeat(palabra.length)), 
        texto
    );

console.log(censurarTexto("Este es un texto inapropiado y ofensivo", ["inapropiado", "ofensivo"]));