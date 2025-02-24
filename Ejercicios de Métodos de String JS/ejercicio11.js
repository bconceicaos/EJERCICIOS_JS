// 11. Extraer una parte específica de un texto

// Dado un string, un índice de inicio y un índice de fin, extraer la parte correspondiente del texto sin incluir el índice final.

const extraerTexto = (texto, inicio, fin) => texto.slice(inicio, fin);

console.log(extraerTexto("Hola Mundo", 0, 4)); 
