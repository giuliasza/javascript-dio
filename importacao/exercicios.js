const {gets ,print} = require('./funcoesaux');

const numeros = [];

for(let i = 0; i < 5; i++){
    const num = gets();
    numeros.push(num);
}

print(numeros);