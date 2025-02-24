// Cálculo de la Letra del DNI

// Dado un array de números de DNI, escribe una función que:

// Asigne a cada DNI su letra correspondiente según una tabla de letras predefinida.
// Devuelva un array de objetos { dni, letra }.

function calcularLetraDNI(dnis) {
    const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    return dnis.map(dni => ({ dni, letra: letras[dni % 23] }));
}

const dnis = [12345678, 87654321];
const letrasDni = calcularLetraDNI(dnis);
console.log(letrasDni);