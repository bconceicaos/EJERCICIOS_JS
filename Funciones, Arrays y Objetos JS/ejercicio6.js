// Ejercicio 6: Mostrar Información de Estudiantes

// Crea una función llamada mostrarEstudiantes que reciba un array de objetos, donde cada objeto representa a un estudiante con su nombre, edad, y curso.

// Muestra en la consola:
// "[Nombre] tiene [edad] años y está inscrito en el curso de [curso]"

// Usa forEach() para recorrer el array.

// Ejemplo:

// const estudiantes = [
//    { nombre: "Laura", edad: 22, curso: "Matemáticas" },
//    { nombre: "Carlos", edad: 25, curso: "Física" },
//    { nombre: "Marta", edad: 20, curso: "Programación" }
// ];

// mostrarEstudiantes(estudiantes);

// Resultado esperado:
// Laura tiene 22 años y está inscrita en el curso de Matemáticas
// Carlos tiene 25 años y está inscrito en el curso de Física
// Marta tiene 20 años y está inscrita en el curso de Programación

const mostrarEstudiantes = (estudiantes) => {
    // recorremos el array con forEach()
    estudiantes.forEach(estudiante => {
        // mostramos en consola la información del estudiante
        console.log(`${estudiante.nombre} tiene ${estudiante.edad} años y está inscrito en el curso de ${estudiante.curso}`);
    });
};

// array de estudiantes para probar la función
const estudiantes = [
    { nombre: "Laura", edad: 22, curso: "Matemáticas" },
    { nombre: "Carlos", edad: 25, curso: "Física" },
    { nombre: "Marta", edad: 20, curso: "Programación" }
];

// llamada a la función
mostrarEstudiantes(estudiantes);