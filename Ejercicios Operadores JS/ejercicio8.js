// 8. Verificación de Paridad con Operador Bitwise

// Escribe una función que reciba un número y determine si es par o impar usando &.

// 💡 Pista: n & 1 devuelve 0 si n es par, y 1 si es impar.

function esPar(numero) {
    return (numero & 1) === 0;
}

console.log(esPar(2));
console.log(esPar(5));