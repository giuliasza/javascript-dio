
const entradas = [5, 50, 10, 98, 23];
let i = 0;

function gets(){
    const valor = entradas[i];
    i++;
    return valor;
} // mocado = simulando uma interação

function print(texto){
    console.log(texto);
}

module.exports = { gets, print };
// é como se eu definisse um objeto que puxa as funções
//e exporta elas.