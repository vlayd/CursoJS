//É como se fosse map
const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Camargo',
    idade: 15
};
console.log(pessoa1);
console.log(pessoa1['nome']);
console.log(pessoa1.nome);

//Forma normal
function criaPessoa1(nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}
//Forma resumida
const criaPessoa2 = function (nome, sobrenome, idade){
    return {nome, sobrenome, idade};
}
const pessoa2 = criaPessoa1('Vlaydisson', 'Valóis', 43);
const pessoa3 = criaPessoa2('Vladymir', 'Valóis', 17);
console.log(pessoa2.idade);
console.log(pessoa3.nome);

const pessoa4 = {
    nome: 'Luiz',
    sobrenome: 'Camargo',
    idade: 15,
    fala(){
        console.log(`Meu nome é ${this.nome} ${this.sobrenome} tenho ${this.idade} anos`);
    }
};
pessoa4.fala();