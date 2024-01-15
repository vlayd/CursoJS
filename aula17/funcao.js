//Como criar função
function saudacao(nome) {
    console.log(`Bom dia ${nome}!`);
}
saudacao('Vladymir');

//Função anônima
const raiz = function(n){
    return n ** 0.5;
};
console.log(raiz(16));

//Função anônima com arrow funcion
const potencia = n => n ** 2;
console.log(potencia(20));