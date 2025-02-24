// 17. Crear nombres de usuario a partir de nombres completos

// Dado un array de nombres completos, crear una función que genere un nombre de usuario para cada uno usando la primera letra del nombre y el apellido en minúsculas.

const generarUsuarios = (nombres) => nombres.map(nombre => {
    let partes = nombre.toLowerCase().split(' ');
    return partes[0][0] + partes.slice(1).join('');
});

console.log(generarUsuarios(["Juan Pérez", "María López", "Carlos Rodríguez"]));
