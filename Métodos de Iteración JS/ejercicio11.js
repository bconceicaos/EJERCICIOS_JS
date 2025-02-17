// 11. Ordenar Nombres por Longitud

// Trabaja con el siguiente array de nombres:
// const names = ['Pin', 'Coche', 'Canarias', 'Astronauta'];

/*
Instrucciones:
Ordena los nombres de más corto a más largo utilizando y length.

// sin usar sort !!!
*/

const names = ['Pin', 'Coche', 'Canarias', 'Astronauta'];

console.log(
  `Nombres ordenados por longitud:`,
  names.sort((a, b) => {
    if (a.length < b.length){
      return -1; // a viene antes que b
    }
    if (a.length > b.length){
      return 1; // b viene antes que a
    }
    return 0; // son iguales de longitud
  })
);

console.log('');