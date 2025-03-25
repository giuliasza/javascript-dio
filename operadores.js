/*

// let é uma variável
const pi = 3.14; 
// const é um valor fixo, não há como alterar

let a = 1;
let b = 10;
let soma = a + b;
console.log(soma);

-- equacao de 2 grau  -- 

let a = 1;
let b = 2;
let c = -4;
let delta = b ** 2 -4 * a * c;
let raiz = Math.sqrt(delta);
let resultado = b + raiz;
let denominador = 2 * a;
let resultado1 = resultado / denominador;
let resultadoo = b - raiz;
let resultado2 =  resultadoo / denominador;

console.log(resultado1);

-- operadores de igualdade --

um = é pra atribuir um valor
dois == é pra igualdade (e geralmente ele converte \
implpicitamente uma string pra int. ele ignora o tipo \
de variavel
tres === é mais usado pra igualdade

FUNÇÕES

invoca a execução do código 

function teste(){
xxxx
}

dá pra invocar ela dnv dps (teste()).

ex: 

function saymyname(name){
console.log("your name is " + name);
}

saymyname('renan');
saymyname('vitor');

- utilizamos o return pra devolver um valor.


function quadrado (valor){
    return valor ** 2;
}
 
const quad = quadrado(2);
console.log(quad);

-- trabalharemos agr só com funções! 
nos códigos principais!

é uma forma de organizar o código e fundamental
na codificação, levando tudo ao main.

funções são valores, não dá pra printar elas por fora.
coloca o console.log dentro dela, e chama ela por fora.

utilizamos as funções quando queremos fazer um 
código rodar uma vez só (acontece mais em web!)


function main(){
    console.log("programa principal");
}

main();

-- OBJETOS 

console é um objeto, por ex.
lembra uma array, 




const pessoa = {        //é uma coleção de dados, valores
    nome: "maria giulia", //lembre de colocar vírgula após um novo valor!
    idade: 17,
    descrever: function(){
        this  // diz respeito ao contexto onde a função tá sendo executada \
        // (ou seja, o "this" nesse caso é o objeto em si)
        console.log("meu nome é " + $(this.nome) + " e minha idade é... " + $(this.idade)
    }
};      // então no caso o $(this.x) é pra dizer que é um valor do local que a função tá dentro!

const atributo = idade;

console.log(pessoa[atributo]); // assim consigo buscar o valor específico dentro da função!

//pessoa.altura = 18; //pode incrementar valores por fora dele!
// delete pessoa.idade; //assim como dá pra deletar dados!
//pessoa.descrever();

*/
 
// CLASSES

// se eu quero alterar alguns detalhes de um objeto, mas sem 
// \ precisar duplicar inteiramente, criamos as classes, 
// \ que é um modelo do objeto,  e podemos fazer várias versões

class Pessoa{   // classe é a definição. método de classe sempre tem letra maiuscula no nome.
    nome;
    idade;
    descrever() {
        console.log(`meu nome é ${this.nome} e minha idade é ${this.idade}`);
    } //tava dando bug pq tem que usar CRASE e não aspinha simples/dupla!!!
    
}
const lia = {   // objeto! instância, é a ocorrência
    nome: "maria giulia",
    idade: 17,
    descrever: function() {
        console.log(`meu nome é ${this.nome} e minha idade é ${this.idade}`);
    } //tava dando bug pq tem que usar CRASE e não aspinha simples!
};

const ique = new Pessoa();
ique.nome = "caique";
ique.idade = 19;
console.log(ique);

//assim fica BEM mais fácil pra atribuir valores á objetos que já criamos!