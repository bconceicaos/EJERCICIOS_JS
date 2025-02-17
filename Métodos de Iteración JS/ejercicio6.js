// 6. Comprobar Inclusión de Elementos

// Dado el array de colores:
// const colors = ['red', 'blue', 'green', 'yellow'];

/*
Instrucciones:
- Comprueba si 'purple' está incluido usando includes.
- Luego verifica si 'green' está incluido.
-- Resultado esperado: false, true
*/

const colors = ['red', 'blue', 'green', 'yellow'];

// comprueba si 'purple' está incluido
const tieneMorado = colors.includes('purple');

// comprueba si 'green' está incluido
const tieneVerde = colors.includes('green');

console.log(tieneMorado, tieneVerde);