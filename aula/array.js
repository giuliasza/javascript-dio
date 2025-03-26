/*const a = [];

a.push = 10; // o método .push adiciona um novo valor (não importa o que ele seja) na array.

a.pop();// o .pop deleta o valor mais próximo da última casa da arraay.
        // e o .shift() deleta o primeiro valor da array
        // 
*/
// ex:
/*
const numeros = ["1", "2", "3"];
console.log(numeros);
console.log(numeros.pop());
console.log(numeros);
*/
/*
[ '1', '2', '3' ] -- antes
3 --mostrou o numero retirado
[ '1', '2' ] -- depois
 */
/*
const notas = [];

notas.push(7);
notas.push(5);
notas.push(8);
notas.push(10);
notas.push(6);
let soma = 0;

for (let i = 0; i < notas.length; i++){
    const media = notas[i];
    soma = soma + media;
}

const mediaa = soma / notas.length;
console.log(mediaa);
*/

//EXERCICIO 1
// dado um número, imprima sua tabuada.
/*
const readlineSync = require('readline-sync');
let num = readlineSync.questionInt ("digite um número que te dou a tabuada dele");
const tab = [];
for (let i = 1; i <= 10; i++) {
    tab.push(num * i);
    console.log(`${num} x ${i} = ${num * i}`);
}
console.log("Tabuada completa:", tab);

*/ 
// EXERCICIO 2
/*
const a = [25, 97, 30, 45, 8];

for (let i = 0; i < a.length; i++) {
    const num = a[i];
    if(num % 2 === 0){
        console.log(num);
    }
}
*/