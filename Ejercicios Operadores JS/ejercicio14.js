// 14. Transformación de Objetos con Valores Modificados

// Dado un array de objetos (usuario, nivel), escribe una función que:

// Convierta los niveles "básico" a "intermedio", y los "intermedio" a "avanzado".
// Devuelva el array actualizado.

function actualizarNiveles(usuarios) {
    return usuarios.map(usuario => {
        if (usuario.nivel === "básico") {
            usuario.nivel = "intermedio";
        } else if (usuario.nivel === "intermedio") {
            usuario.nivel = "avanzado";
        }
        return usuario;
    });
}

const usuarios = [
    { usuario: "Ana", nivel: "básico" },
    { usuario: "Juan", nivel: "intermedio" },
    { usuario: "Carlos", nivel: "básico" }
];
const usuariosActualizados = actualizarNiveles(usuarios);
console.log(usuariosActualizados);