// Ejercicio 4: Contar Tipos de Datos en un Array

// Crea una función llamada contarTipos que reciba un array con diferentes tipos de datos (números, strings, booleanos, etc.) y devuelva un objeto que indique cuántos de cada tipo hay.

// Usa typeof y forEach().

// Ejemplo:
// contarTipos([1, "hola", true, 42, false, "mundo", null, undefined]); -- Resultado esperado: { number: 2, string: 2, boolean: 2, object: 1, undefined: 1 }

const contarTipos = (array) => {
    let contador = {}; // objeto para almacenar los conteos

    // Recorremos el array con forEach
    array.forEach(elemento => {
        let tipo = typeof elemento; // obtenemos el tipo del elemento
        
        // si el tipo ya existe en el objeto, incrementamos el contador
        // si no, lo inicializamos en 1
        contador[tipo] = (contador[tipo] || 0) + 1;
    });

    return contador; // retornamos el objeto con los conteos
};

console.log(contarTipos([1, "hola", true, 42, false, "mundo", null, undefined])); 
