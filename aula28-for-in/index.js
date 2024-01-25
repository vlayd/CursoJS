const frutas = ['Pêra', 'Maçã', 'Uva'];
const pessoa = {
    nome: 'Vlaydisson',
    sobrenome: 'Valóis',
    idade: 43,
};

console.log(pessoa.nome); //ou
console.log(pessoa['nome']);
// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }

//O i acessa o índice
for (const i in frutas) {
    console.log(frutas[i]);
}
console.log();
//chave acessa as chaves
for(const chave in pessoa){
    console.log(chave, pessoa[chave]);
}