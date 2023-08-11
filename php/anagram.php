<?php

/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 * - Ejemplos: Nepal – Panel, Frase – Fresa, Pagar – Praga, Nacionalista – Altisonancia
 */

function validateAnagram(string $firstWord, string $secondWord): bool
{
    if (strlen($firstWord) != strlen($secondWord) || $firstWord == $secondWord) {
        return false;
    }

    $arrayFirstWord = str_split(strtolower($firstWord));
    $arraySecondWord = str_split(strtolower($secondWord));

    sort($arrayFirstWord);
    sort($arraySecondWord);

    return count(array_diff_assoc($arrayFirstWord, $arraySecondWord)) == 0;
}

echo validateAnagram('Nacionalista', 'Altisonancia')."\n";