// 4. Extraer y formatear nombres de usuario

// Dado un array de correos electrónicos, extraer los nombres de usuario (antes del @) y devolverlos en un array formateados con la primera letra en mayúscula y el resto en minúscula.

const extraerUsuarios = (correos) => 
    correos.map(correo => {
        const usuario = correo.split('@')[0];
        return usuario.charAt(0).toLowerCase() + usuario.slice(1);
    });

console.log(extraerUsuarios(["JUAN@empresa.com", "maria@gmail.com", "carlos@empresa.com"]));
