// 3. Añadir y Eliminar Elementos de un Array

// Trabaja con el siguiente array de frutas:
// const fruits = ['apple', 'banana', 'cherry'];

/*
Instrucciones:
- Agrega 'grape' al final usando push y 'mango' al principio usando unshift.
- Luego elimina el primer y último elemento usando shift y pop.
-- Resultado esperado: ['banana', 'cherry']
*/

const fruits = ['apple', 'banana', 'cherry'];

// agregar 'grape' al final y 'mango' al principio
fruits.push('grape');
fruits.unshift('mango');
console.log(fruits); 

// eliminar el primer y último elemento
fruits.shift(); // elimina 'mango'
fruits.pop();   // elimina 'grape'
console.log(fruits); // ['banana', 'cherry']