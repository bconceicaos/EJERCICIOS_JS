//  5. Encontrar la Primera Palabra Larga

// Tienes una lista de palabras:
// const words = ['cat', 'elephant', 'dog', 'giraffe', 'lion'];

/*
Instrucciones:
Encuentra la primera palabra que tenga más de 5 letras utilizando find.
-- Resultado esperado: 'elephant'
*/

const words = ['cat', 'elephant', 'dog', 'giraffe', 'lion'];

const longWord = words.find(word => word.length > 5);

console.log(longWord);