const pessoa = {
    nome: 'Vlaydisson',
    sobrenome: 'Valóis de Melo',
    idade: 43,
    endereco: {
        rua: 'Rua Pêssego',
        numero: 31
    }
};
//Acessando o nome
console.log(pessoa.nome);
//Acessando o nome (via desestruturação)
//Mudando o nome
const {nome: nomeModificado, sobrenome, endereco} = pessoa;
console.log(nomeModificado, sobrenome, endereco);