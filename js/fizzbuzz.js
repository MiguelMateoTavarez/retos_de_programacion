
/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */

const numbers = Array.from({length: 100}, (_, i) => i + 1);
const fizz = "fizz";
const buzz = "buzz";

numbers.forEach(number => {
    let outPut = '';
    if(number % 3 === 0) outPut += fizz
    if(number % 5 === 0) outPut += buzz
    if(outPut === '') outPut = number
    console.log(outPut);
});