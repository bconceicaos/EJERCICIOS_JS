// Ejercicio 10: Contar Caracteres en un Texto

// Crea una función flecha llamada contarCaracteres que reciba un texto (string) y devuelva un objeto que indique cuántas veces aparece cada carácter.

// Usa un bucle for...in para recorrer el string como si fuera un array de caracteres (los strings en JS permiten esto).

// Ejemplo:
// contarCaracteres("programacion");    -- Resultado esperado: { p: 1, r: 2, o: 2, g: 1, a: 2, m: 1, c: 1, i: 1, n: 1 }

const contarCaracteres = (texto) => {
    let contador = {}; // objeto para almacenar la cantidad de veces que aparece cada carácter

    // recorremos el texto usando for...in para tratar el string como un array de caracteres
    for (let i in texto) {
        let caracter = texto[i]; // obtenemos el carácter en la posición i
        
        // si el carácter ya está en el objeto, incrementamos su contador
        // si no está, lo inicializamos en 1
        contador[caracter] = (contador[caracter] || 0) + 1;
    }

    return contador; // devolvemos el objeto con las cantidades de cada carácter
};

console.log(contarCaracteres("programacion"));