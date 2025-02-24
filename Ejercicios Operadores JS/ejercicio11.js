// 11. Validación de Disponibilidad de Productos

// Dado un array de objetos representando productos (nombre, stock), escribe una función que:

// Devuelva true si todos los productos tienen stock disponible (stock > 0).
// Devuelva false en caso contrario.

function verificarStock(productos) {
    return productos.every(producto => producto.stock > 0);
}

const productos = [
    { nombre: "Producto A", stock: 10 },
    { nombre: "Producto B", stock: 5 },
    { nombre: "Producto C", stock: 0 }
];
const todosConStock = verificarStock(productos);
console.log(todosConStock);