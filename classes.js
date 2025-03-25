/*-- OBJETOS 
"console.log()" é um objeto, por ex. lembra uma array.

const pessoa = {        //é uma coleção de dados, valores
    nome: "maria giulia", //lembre de colocar vírgula após um novo valor!
    idade: 17,
    descrever: function(){
       // "this" diz respeito ao contexto onde a função tá sendo executada \
        // (ou seja, o "this" nesse caso é o objeto em si)
        console.log(`meu nome é  ${this.nome}  e minha idade é...  ${this.idade}`)
    }
};      // então no caso o $(this.x) é pra dizer que é um valor do local que a função tá dentro!

const atributo = idade;

console.log(pessoa[atributo]); // assim consigo buscar o valor específico dentro da função!
*/
//pessoa.altura = 18; //pode incrementar valores por fora dele!
// delete pessoa.idade; //assim como dá pra deletar dados!
//pessoa.descrever();


// CLASSES

// se eu quero alterar alguns detalhes de um objeto, mas sem 
// \ precisar duplicar inteiramente, criamos as classes, 
// \ que é um modelo do objeto,  e podemos fazer várias versões
/*
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
*/
//assim fica BEM mais fácil pra atribuir valores á objetos que já criamos!


// TESTANDO CONSTRUCTOR

//construtor serve para darmos parametros prontos para objetos 
//que vamos criar depois da classe, facilitando a forma que
// alteramos ou adicionamos valores nos nossos novos objetos!

//ex:

class Pessoa {
    nome;
    idade;

    constructor(nome, idade){ //mini banquinho de dados!!!
        this.nome = nome;
        this.idade = idade;
        this.nascimento = 2025 - idade;
    }

    descrever(){
        console.log(`meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const lia = new Pessoa("giulia", 17);
const ique = new Pessoa("caique", 18); // do que definir em cada um o nome e idade, colocamos no construtor e fazemos direto

lia.descrever();
ique.descrever();

//antes
/* PS C:\Users\Lia\Documents\GitHub\javascript-dio\aula> node classes.js
meu nome é luca e minha idade é 55
meu nome é luca e minha idade é 55
depois 
PS C:\Users\Lia\Documents\GitHub\javascript-dio\aula> node classes.js
meu nome é giulia e minha idade é 17
meu nome é caique e minha idade é 18
*/