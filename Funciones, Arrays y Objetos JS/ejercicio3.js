// Ejercicio 3: Filtrar Palabras Largas

// Crea una función flecha llamada filtrarPalabras que reciba un array de palabras y devuelva
// un nuevo array solo con aquellas que tienen más de 5 letras.

// Usa forEach() para el recorrido.

// Ejemplo:
// contarTipos(["elefante", "águila", "cielo", "oso", "universo"]); -- Resultado esperado: ["elefante", "águila", "universo"]

const filtrarPalabras = (palabras) => {
    let resultado = []; // array para almacenar las palabras filtradas

    // recorremos el array usando forEach()
    palabras.forEach(palabra => {
        // si la palabra tiene más de 5 letras, la agregamos al resultado
        if (palabra.length > 5) {
            resultado.push(palabra);
        }
    });

    return resultado; // retornamos el nuevo array filtrado
};

console.log(filtrarPalabras(["elefante", "águila", "cielo", "oso", "universo"])); 
