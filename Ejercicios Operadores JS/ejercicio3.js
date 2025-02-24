// 3. Operaciones en un Inventario de Productos

// Dado un array de objetos con nombre y precio, crea una función que:

// Aumente el precio en un 15% si el precio original es menor a 20.
// Disminuya el precio en un 10% si el precio es mayor o igual a 50.
// Devuelva el array modificado.

function actualizarPrecios(inventario) {
    return inventario.map(({ nombre, precio }) => ({
        nombre,
        precio: precio < 20 ? precio * 1.15 : precio >= 50 ? precio * 0.90 : precio
    }));
}

const productos = [
    { nombre: "Producto A", precio: 15 },
    { nombre: "Producto B", precio: 30 },
    { nombre: "Producto C", precio: 40 },
    { nombre: "Producto D", precio: 50 }
];

const proModificados = actualizarPrecios(productos);
console.log(proModificados);