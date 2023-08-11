/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 * - Ejemplos: Nepal – Panel, Frase – Fresa, Pagar – Praga, Nacionalista – Altisonancia
 */

const validateAnagram = (firstWord, secondWord) => {

    if (firstWord.length !== secondWord.length || firstWord === secondWord)
        return false;

    let arrayFirstWord = firstWord.toLowerCase().split('').sort();
    let arraySecondWord = secondWord.toLowerCase().split('').sort();

    return arrayFirstWord.every((letter, index) => {
        return arraySecondWord[index] === letter;
    });
}

console.log(validateAnagram('Nacionalista', 'Altisonanci'));