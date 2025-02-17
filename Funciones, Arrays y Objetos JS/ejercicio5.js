// Ejercicio 5: Calcular Estadísticas de un Array Numérico

// Crea una función llamada calcularEstadisticas que reciba un array de números y devuelva un objeto con:

//La suma total
// El promedio
// El número más grande
// El número más pequeño

// Usa funciones flecha para cálculos intermedios si lo necesitas.

// Ejemplo: calcularEstadisticas([4, 8, 15, 16, 23, 42]); -- Resultado esperado: { suma: 108, promedio: 18, max: 42, min: 4 }

const calcularEstadisticas = (numeros) => {
    // cálculo de la suma total usando reduce
    const suma = numeros.reduce((acc, num) => acc + num, 0);
    
    // cálculo del promedio
    const promedio = suma / numeros.length;
    
    // cálculo del número más grande
    const max = Math.max(...numeros);
    
    // cálculo del número más pequeño
    const min = Math.min(...numeros);

    // Devolvemos el objeto con las estadísticas
    return { suma, promedio, max, min };
};

console.log(calcularEstadisticas([4, 8, 15, 16, 23, 42]));