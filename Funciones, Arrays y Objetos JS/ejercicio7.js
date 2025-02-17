// Ejercicio 7: Fusionar Objetos con Claves Únicas

// Crea una función llamada fusionarObjetos que reciba dos objetos y los fusione en uno solo.

// Si hay claves repetidas, el valor del segundo objeto debe sobrescribir al del primero.

// Usa Object.keys() y for...in.

// Ejemplo:
// fusionarObjetos({ a: 1, b: 2 }, { b: 3, c: 4 }); -- Resultado esperado: { a: 1, b: 3, c: 4 }

const fusionarObjetos = (obj1, obj2) => {
    let objetoFusionado = { ...obj1 }; // crea una copia del primer objeto para evitar modificar el original

    // recorremos las claves del segundo objeto
    Object.keys(obj2).forEach(clave => {
        // asignamos el valor de la clave del segundo objeto al objeto fusionado
        objetoFusionado[clave] = obj2[clave];
    });

    return objetoFusionado; // devolvemos el objeto fusionado
};

console.log(fusionarObjetos({ a: 1, b: 2 }, { b: 3, c: 4 }));