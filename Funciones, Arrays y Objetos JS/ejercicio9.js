// Ejercicio 9: Validar Propiedades en un Objeto

// Crea una función llamada validarPropiedades que reciba un objeto y un array de claves.

// Devuelve true si el objeto contiene todas las claves del array, o false en caso contrario.

// Usa Object.keys() y for...in.

// Ejemplo:
// validarPropiedades({ nombre: "Juan", edad: 30, ciudad: "Madrid" }, ["nombre", "edad"]);  -- Resultado esperado: true
//validarPropiedades({ nombre: "Juan", edad: 30 }, ["nombre", "ciudad"]); -- Resultado esperado: false

const validarPropiedades = (obj, claves) => {
    // recorremos cada clave del array usando forEach
    return claves.every(clave => obj.hasOwnProperty(clave)); // devuelve true si todas las claves están en el objeto
};

console.log(validarPropiedades({ nombre: "Juan", edad: 30, ciudad: "Madrid" }, ["nombre", "edad"]));
console.log(validarPropiedades({ nombre: "Juan", edad: 30 }, ["nombre", "ciudad"]));