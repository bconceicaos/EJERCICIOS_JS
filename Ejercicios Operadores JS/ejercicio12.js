// 12. Cálculo del Producto Total en una Lista de Compras

// Dado un array de objetos (nombre, precio, cantidad), escribe una función que:

// Multiplique el precio por la cantidad de cada producto.
// Devuelva la suma total de todos los productos.

function calcularTotalCompras(lista) {
    return lista.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0);
}

const listaCompras = [
    { nombre: "Manzanas", precio: 2, cantidad: 3 },
    { nombre: "Plátanos", precio: 1.5, cantidad: 5 },
    { nombre: "Peras", precio: 3, cantidad: 2 }
];
const total = calcularTotalCompras(listaCompras);
console.log(total);