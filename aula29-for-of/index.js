const nomes = ['Vlaydisson', 'Fernanda', 'Vladymir', 'Juvenil'];
const pessoa = {
    nome: 'Vlaydisson',
    sobrenome: 'Valóis',
    idade: 43
};

//for in dá pra iterar objeto, mas o for of não
for(let chave in pessoa){
    console.log(chave, pessoa[chave]);
}

for (const nome of nomes) {
    console.log(nome);
}

// nomes.forEach(function (valor, indice, array) {
//     console.log(indice, valor, array);
//     console.log(array);
// });