// 7. Manipulación de un Contador con ++ y --

// Dado un objeto contador con la propiedad valor, crea una función que:

// Incremente valor en 2 si es par.
// Decremente valor en 1 si es impar.
// Devuelva el objeto actualizado.

const contador = {valor: 5};

function manipularContador(contador) {
    if (contador.valor % 2 === 0) {
        contador.valor += 2;
    } else {
        contador.valor--;
    }
    return contador;
}

console.log(manipularContador(contador));