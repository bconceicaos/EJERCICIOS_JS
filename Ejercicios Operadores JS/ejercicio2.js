// 2. Cálculo de Diferencias con Asignación Compuesta

// Dado un objeto con dos propiedades a y b (ambas números), escribe una función que:

// Reste b de a utilizando el operador -=.
// Multiplique a por 3 y divida b entre 2.
// Devuelva un nuevo objeto con las propiedades actualizadas.

function actualizarObjeto(obj) {
    obj.a -= obj.b;
    obj.a *= 3;
    obj.b /= 2;
    return obj;
}

const objeto ={a: 5, b: 3}
console.log(actualizarObjeto(objeto));