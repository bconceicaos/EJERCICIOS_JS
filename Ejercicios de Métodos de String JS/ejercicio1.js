// 1. Obtener iniciales de una lista de nombres

// Dado un array con varios nombres completos, crear una función que devuelva un nuevo array con las iniciales de cada nombre en mayúsculas.

const obtenerIniciales = (nombres) => nombres.map(nombre => nombre.split(' ').map(n => n[0].toUpperCase()).join(''));

console.log(obtenerIniciales(["Juan Pérez", "María López", "Carlos Sánchez"]));
