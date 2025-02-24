// 4. Filtrado de Usuarios con Condiciones Múltiples

// Dado un array de objetos representando usuarios (nombre, edad, activo), escribe una función que:

// Devuelva solo los usuarios mayores de 18 que además estén activos.
// Usa operadores de comparación (>) y lógicos (&&).

function filtrarUsuarios(usuarios) {
    return usuarios.filter(usuario => usuario.edad > 18 && usuario.activo);
}

const usuarios = [
    { nombre: "Juan", edad: 20, activo: true },
    { nombre: "Ana", edad: 17, activo: true },
    { nombre: "Carlos", edad: 25, activo: false },
    { nombre: "Laura", edad: 30, activo: true }
];

console.log(filtrarUsuarios(usuarios));