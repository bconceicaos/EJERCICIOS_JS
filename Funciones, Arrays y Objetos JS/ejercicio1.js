// Ejercicio 1: Suma Condicional de Números
// Crea una función llamada sumaCondicional que reciba un array de números y 
// sume solo aquellos que sean mayores que 10 y múltiplos de 3.

// Usa forEach() para recorrer el array.

// Devuelve la suma final.

// Ejemplo:     sumaCondicional([5, 12, 18, 7, 21, 30]);  // Resultado esperado: 81 (12 + 18 + 21 + 30)

function sumaCondicional(numeros) {
    let suma = 0;

    numeros.forEach(numero => {
        if (numero > 10 && numero % 3 === 0){
            suma += numero;
        }
    });
}

console.log(sumaCondicional([5, 12, 18, 7, 21, 30]))