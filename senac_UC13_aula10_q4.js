/**
 * Exibe os elementos de um array de strings em ordem reversa.
 * 
 * Itera sobre o array começando do último elemento até o primeiro, 
 * imprimindo cada palavra no console.
 * 
 * @param {string[]} words 
 * 
 * @return {void} 
 */

let words = [
    'hello',
    'world',
    'this',
    'is',
    'and',

];

for (let i =words.length -1 ; i >= 0; i--) {
    console.log(words[i]);
}