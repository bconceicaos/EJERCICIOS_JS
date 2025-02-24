// 18. Creación de una Lista de Invitados con Doble Confirmación

// Dado un array de nombres y otro de booleanos representando confirmaciones (true/false), escribe una función que:

// Devuelva solo los nombres de los invitados que confirmaron su asistencia.

function obtenerInvitadosConfirmados(nombres, confirmaciones) {
    return nombres.filter((_, index) => confirmaciones[index]);
}

const nombres = ["Ana", "Juan", "Carlos"];
const confirmaciones = [true, false, true];
const invitadosConfirmados = obtenerInvitadosConfirmados(nombres, confirmaciones);
console.log(invitadosConfirmados);