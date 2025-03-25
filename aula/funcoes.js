/*FUNÇÕES

invoca a execução do código 

function teste(){
xxxx
}

dá pra invocar ela dnv dps (teste()).
*/
ex: 

function saymyname(name){
console.log("your name is " + name);
}

saymyname('renan');
saymyname('vitor');

// - utilizamos o return pra devolver um valor.


function quadrado (valor){
    return valor ** 2;
}
 
const quad = quadrado(2);
console.log(quad);

/*
-- trabalharemos agr só com funções! 
nos códigos principais!

é uma forma de organizar o código e fundamental
na codificação, levando tudo ao main.

funções são valores, não dá pra printar elas por fora.
coloca o console.log dentro dela, e chama ela por fora.

utilizamos as funções quando queremos fazer um 
código rodar uma vez só (acontece mais em web!)

*/

function main(){
    console.log("programa principal");
}

main();




