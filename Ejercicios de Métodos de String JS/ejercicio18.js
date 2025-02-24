// 18. Reemplazar todas las apariciones de una palabra en un texto

// Dado un string y una palabra objetivo, reemplazar todas las apariciones de la palabra con otra palabra especificada por el usuario.

const reemplazarPalabra = (texto, objetivo, reemplazo) => {
    texto = texto.split(objetivo).join(reemplazo);
};

let textoEjemplo = "Me gusta el chocolate. El chocolate es delicioso.";
reemplazarPalabra(textoEjemplo, "chocolate", "helado");
console.log(textoEjemplo); // no cambiará porque las strings son inmutables