// 13. Eliminación de Elementos según una Condición

// Dado un array de objetos (nombre, edad), crea una función que:

// Elimine del array a las personas menores de 18 años.
// Devuelva el nuevo array filtrado.

function filtrarMayoresDeEdad(personas) {
    return personas.filter(persona => persona.edad >= 18);
}

const personas = [
    { nombre: "Juan", edad: 25 },
    { nombre: "Ana", edad: 17 },
    { nombre: "Carlos", edad: 19 },
    { nombre: "Sofía", edad: 15 }
];
const mayoresDeEdad = filtrarMayoresDeEdad(personas);
console.log(mayoresDeEdad);