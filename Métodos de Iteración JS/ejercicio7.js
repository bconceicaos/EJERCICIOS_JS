// 7. Filtrar Números Primos

// Con el siguiente array:
// const numbers = [2, 4, 5, 6, 7, 8, 9, 11, 13];

/*
Instrucciones:
Filtra y devuelve solo los números primos usando filter. (Deberás implementar la lógica para identificar si un número es primo.)
-- Resultado esperado: [2, 5, 7, 11, 13]
*/

const numbers = [2, 4, 5, 6, 7, 8, 9, 11, 13];

const esPrimo = num => {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false; // si es divisible por otro número, no es primo
  }
  return true;
};

// filtrar solo los números primos
const numerosPrimos = numbers.filter(esPrimo);

console.log(numerosPrimos);