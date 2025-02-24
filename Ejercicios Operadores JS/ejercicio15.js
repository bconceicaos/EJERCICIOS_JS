// 15. Asignación de Categorías según la Edad

// Dado un array de objetos (nombre, edad), escribe una función que:

// Agregue una propiedad categoria:
//      "Infantil" si la edad es menor de 12.
//      "Adolescente" si la edad está entre 12 y 17.
//      "Adulto" si es 18 o más.
// Devuelva el array modificado.

function asignarCategorias(personas) {
    return personas.map(persona => ({
        ...persona,
        categoria: persona.edad < 12 ? "Infantil" : persona.edad <= 17 ? "Adolescente" : "Adulto"
    }));
}

const personas = [
    { nombre: "Juan", edad: 10 },
    { nombre: "Ana", edad: 15 },
    { nombre: "Carlos", edad: 20 }
];
const personasConCategorias = asignarCategorias(personas);
console.log(personasConCategorias);