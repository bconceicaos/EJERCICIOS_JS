// 5. Validación de Contraseñas con Múltiples Condiciones

// Crea una función que reciba una contraseña y valide que:

// Su longitud sea de al menos 8 caracteres.
// Contenga al menos una mayúscula y un número.
// No contenga espacios en blanco.
// Devuelva true si cumple todas las condiciones, false en caso contrario.

const contrasena = "MiContraseña123";

function validarContrasena(contrasena) {
    return contrasena.length >= 8 && 
           !contrasena.includes(' ') && 
           contrasena !== contrasena.toLowerCase() && 
           [...contrasena].some(el => el >= '0' && el <= '9');
}

console.log(validarContrasena(contrasena))