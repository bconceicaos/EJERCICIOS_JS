// 15. Verificar Inclusión de Subcadenas en Frases

// Trabaja con el siguiente array de frases:
// const phrases = ['I love JavaScript', 'Coding is great', 'Java is cool', 'I prefer Python'];

/*
Instrucciones:
- Verifica si cada frase incluye la palabra 'Java' usando includes.
- Devuelve un nuevo array de booleanos usando map.
-- Resultado esperado: [true, false, true, false]
*/

const phrases = ['I love JavaScript', 'Coding is great', 'Java is cool', 'I prefer Python'];

// verifica si cada frase incluye la palabra 'Java' usando includes
const contieneJava = phrases.map(phrase => phrase.includes('Java'));

console.log(contieneJava);