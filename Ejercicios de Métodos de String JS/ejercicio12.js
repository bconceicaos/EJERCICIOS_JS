// 12.  Dividir nombres y apellidos

// Crear una función que reciba un array de nombres completos y devuelva un array de objetos, donde cada objeto tenga las propiedades "nombre" y "apellido".

const dividirNombres = (nombres) => nombres.map(nombre => {
    let partes = nombre.split(' ');
    return { nombre: partes[0], apellido: partes.slice(1).join(' ') };
});

console.log(dividirNombres(["Juan Pérez", "María López", "Carlos Rodríguez"]));
