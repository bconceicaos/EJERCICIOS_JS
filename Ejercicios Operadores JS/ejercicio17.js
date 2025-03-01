// Transformación de Strings en un Array de Objetos

// Dado un array de nombres en formato string, escribe una función que:

// Devuelva un nuevo array de objetos con la propiedad nombre en mayúsculas y longitud con el número de caracteres de cada nombre.

function transformarNombres(nombres) {
    return nombres.map(nombre => ({ nombre: nombre.toUpperCase(), longitud: nombre.length }));
}

const nombres = ["Ana", "Juan", "Carlos"];
const nombresTransformados = transformarNombres(nombres);
console.log(nombresTransformados);