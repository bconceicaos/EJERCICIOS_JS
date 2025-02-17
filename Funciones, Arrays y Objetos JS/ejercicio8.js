// Ejercicio 8: Encontrar la Palabra Más Larga en un Array

// Crea una función flecha llamada palabraMasLarga que reciba un array de palabras y devuelva la que tenga más letras.

// Usa forEach() para recorrer el array.

// Ejemplo:
// palabraMasLarga(["sol", "estrella", "planeta", "galaxia"]);  -- Resultado esperado: "estrella"

const palabraMasLarga = (palabras) => {
    let palabraLarga = ""; // variable para almacenar la palabra más larga

    // recorremos el array con forEach
    palabras.forEach(palabra => {
        // si la palabra actual es más larga que la almacenada, la actualizamos
        if (palabra.length > palabraLarga.length) {
            palabraLarga = palabra;
        }
    });

    return palabraLarga; // devolvemos la palabra más larga
};

console.log(palabraMasLarga(["sol", "estrella", "planeta", "galaxia"]));