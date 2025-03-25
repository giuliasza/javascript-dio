// exercício 1 

const readlineSync = require('readline-sync');
/*
console.log ("Olá! você aplicará algumas informações\
    para calcularmos o valor da sua viagem!");
    let combustivel = readlineSync.question("digite o preço de litro de combustível \
        ");
        combustivel = parseFloat(combustivel);
    let gasto = readlineSync.question("digite o gasto médio de km alcançado por litro \
        ");
        gasto = parseFloat(gasto);
    let distancia = readlineSync.question("qual a distancia em KM da viagem \
        ");
        distancia = parseFloat(distancia);

        let dist = distancia / gasto;
        let preco = dist * combustivel;

        console.log("Você gastará " + preco.toFixed(2) + " nesta viagem!");
        */

        // parseFloat é pra ter uma segurança de que o valor definido pelo usuário será convertido pra um numero no final
        // readline-sync é uma biblioteca que o node busca pra declarar que o usuario escreve por aí, \
        // então quando utilizamos ele, a gnt declara uma frase ao mesmo tempo que pede pro usuario declarar tb, na mesma linha de código.
        //readline.question é justamente pra dizer que estamos fazendo uma pergunta (é necessário colocar o .question!)
        //toFixed é pra dizer que se o número utilizar decimais, que seja uma quantia de x decimais para aparecer no máximo, no caso botei pra declarar 2 casas.
        //dá pra usar o questionInt pra ele definir diretamente a resposta do usuário em um numero.
        //existe o readline.keyInYN pra fazer valor booleano, sendo Y pra sim e N pra não.
        //tb existe o readline.keyInSelect pra fazer o usuario escolher uma das opcoes declaradas.

        //exercício 2
/*
        console.log ("Olá! você aplicará algumas informações\
            para calcularmos o valor da sua viagem!");
           
            let tipos = ["etanol", "gasolina"];
            let precos = [3.50, 5.00];
            const tipo = readlineSync.keyInSelect (tipos, "digite qual o tipo de combustível que seu carro utiliza");
            const gasto = readlineSync.questionInt ("digite o gasto médio de KM por litro  ");
            const km = readlineSync.questionInt ("digite a distância em km da viagem  ");

            let dist = km / gasto;
            let preco = dist * precos[tipo];

            console.log("Você vai gastar " + preco.toFixed(2) + " nesta viagem!");
*/

//exercicio 3

// fazer algoritmo de media de 3 notas de um aluno num semestre
/*
console.log ("Olá! digite suas notas para dizer qual sua média \
    e sua classificação");
    const nota1 = readlineSync.questionInt ("digite sua primeira nota  ");
    const nota2 = readlineSync.questionInt ("digite sua segunda nota  ");
    const nota3 = readlineSync.questionInt ("digite sua terceira nota  ");

    const soma = nota1 + nota2 + nota3 
    const media = soma / 3;

    if(media > 7){
        console.log("Parabéns! Sua média é " + media.toFixed(1) + " e você passou de semestre!");
    }
    else if(5 < media < 7){
        console.log ("uh... sua média é " + media.toFixed(1) + " e você está de recuperação... é bom estudar ein");
    }
    else{
        console.log("Puts! Sua média é " + media.toFixed(1) + " e você tá reprovado!");
    }
    */
   // exercicio 4

   //formula do imc = peso / (altura * altura)
   // condicoes: abaixo de 18.5 = abaixo do peso;
   // entre 18.5 e 25 = peso normal
   // entre 25 e 30 = acima do peso
   // entre 30 e 40 = obeso;
   // acima de 40 = obesidade grave
    /*
   console.log ("Olá! digite seu peso e sua altura para" +
   " calcularmos seu imc!");
   const peso = readlineSync.questionFloat("digite seu peso (digite em formato XX.X) ");
   const altura = readlineSync.questionFloat ("digite sua altura (digite em formato de metro: X.XX) ");

   const imc = peso / (altura ** 2);
   

   if(18.5 < imc && imc < 25){
    console.log ("Seu imc é de " + imc.toFixed(1) + " e você está normal!");
   }
   else if (imc < 18.5){
    console.log ("Hum... você está abaixo do peso com " + imc.toFixed(1) + " de imc.");
   }
   else if (25 < imc && imc < 30){
    console.log ("Opa! Você está acima do peso com " + imc.toFixed(1) + " de imc.");
   }
   else if (30 < imc  && imc < 40){
    console.log ("Opa! Você está obeso com " + imc.toFixed(1) + " de imc.");
   }
   else {
    console.log ("Hum... você tá com obesidade grave com " + imc.toFixed(2) + " de imc.");
   }
    */

   //exercicio 5
   /*
   condição do pagamento:
   débito : 10% de desconto;
   no dinheiro ou pix: 15% de desconto;
   crédito 2x: preço normal sem juros;
   crédito +2x: preço normal + juros de 10%;
   
   const produto = readlineSync.questionFloat("Olá! digite o preço do produto  ");
   const pag = ["débito", "dinheiro ou pix", "crédito até 2x sem juros", "crédito +2x com juros"];
   const tipo = readlineSync.keyInSelect (pag, "digite"
    +" qual sua forma de pagamento!");
    const preco = [(produto * 90) / 100, (produto * 85) / 100, produto, produto + (produto * 10) / 100];
   
    console.log("este é total: " + preco[tipo]);


    // EXERCICIO FUNÇÕES

    function escreva (nome){
        console.log ("Meu nome é " + nome);
    }
    nome = readlineSync.question ("diga seu nome  ");

    escreva(nome);

    

    // EXERCICIO 2 FUNÇÕES

    function maior(idade){
        if(idade < 18){
            console.log("você não é maior de idade");
        }
        else{
            console.log("você é de maior...");
        }
    }

    idade = readlineSync.questionInt("qual sua idade?  ");

    maior(idade);

    */

    // EXERCICIO 3 FUNCOES

    const produto = readlineSync.questionFloat("Olá! digite o preço do produto  ");
    function pagamento()
    {
    const pag = ["débito", "dinheiro ou pix", "crédito até 2x sem juros", "crédito +2x com juros"];
    const preco = [(produto * 90) / 100, (produto * 85) / 100, produto, produto + (produto * 10) / 100];
    }
   const tipo = readlineSync.keyInSelect (pag, "digite"
    +" qual sua forma de pagamento!");

    
    console.log("este é total: " + pagamento);
