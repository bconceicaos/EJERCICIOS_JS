// 6. Transformar nombres a formato estándar

// Crear una función que reciba un array de nombres en distintos formatos (mayúsculas, minúsculas, mezcladas) y devuelva un array donde cada nombre esté capitalizado correctamente, es decir, con la primera letra en mayúscula y el resto en minúscula.

const formatearNombres = (nombres) => nombres.map(nombre => nombre.toLowerCase().replace(/^./, c => c.toUpperCase()));

console.log(formatearNombres(["JUAN", "maria", "CaRlOs"]));
