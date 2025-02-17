// 9. Contar Frases Largas

// Dado el siguiente array de frases:
// const sentences = ['Hello world', 'JavaScript is fun', 'I love coding', 'Keep it simple'];

/*
Instrucciones:
Filtra las frases que tengan más de 12 caracteres usando filter y cuenta cuántas son usando length.
-- Resultado esperado: 2 ('JavaScript is fun', 'I love coding')
*/

const sentences = ['Hello world', 'JavaScript is fun', 'I love coding', 'Keep it simple'];

// filtrar las frases que tengan más de 12 caracteres
const frasesLargas = sentences.filter(sentence => sentence.length > 12);

// contar cuántas frases hay
const count = frasesLargas.length;

console.log(count);
console.log(frasesLargas); 