// 20. Obtener la representación primitiva de un string

// Dado un objeto String, crear una función que devuelva su valor primitivo utilizando el método valueOf.

const obtenerValorPrimitivo = (strObj) => strObj.valueOf();

let str = new String("Hola mundo");
console.log(obtenerValorPrimitivo(str)); 