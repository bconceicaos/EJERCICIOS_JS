// Ejercicio 2: Invertir Claves y Valores de un Objeto

// Crea una función llamada invertirObjeto que reciba un objeto y devuelva uno nuevo donde las
// claves sean los valores y los valores sean las claves.

// Usa Object.keys() y un bucle for...in para recorrer el objeto.

// Ejemplo:
// invertirObjeto({ a: "uno", b: "dos", c: "tres" });   -- Resultado esperado: { uno: "a", dos: "b", tres: "c" }

function invertirObjeto(objeto){
    // se crea un objeto vacío nuevoObjeto para almacenar el resultado.
    let nuevoObjeto = {};

    // se recorre el objeto original usando for...in, obteniendo cada clave
    for (let clave in objeto){
        nuevoObjeto[objeto[clave]] = clave; //  se usa objeto[clave] como la nueva clave y clave como su valor en nuevoObjeto
    }
    return nuevoObjeto; //  se retorna el nuevo objeto con las claves y valores invertidos.
}

console.log(invertirObjeto({ a: "uno", b: "dos", c: "tres" }));