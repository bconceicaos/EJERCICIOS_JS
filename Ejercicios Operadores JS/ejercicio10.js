// 10. Creación de un Registro de Asistencia

// Dado un array de nombres de estudiantes y un objeto asistencia vacío, escribe una función que:
// Agregue cada estudiante como una propiedad del objeto con un valor booleano (true si asistió, false si no).
// Devuelva el objeto resultante.

function registrarAsistencia(estudiantes) {
    let asistencia = {};
    estudiantes.forEach(estudiante => {
        asistencia[estudiante] = true;
    });
    return asistencia;
}

const estudiantes = ["Jorge", "Victor", "Lucia"];
const asistencia = registrarAsistencia(estudiantes);
console.log(asistencia);