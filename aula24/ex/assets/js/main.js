const data = new Date();
const diasSemana = [
    'Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira',
    'Sexta-feira', 'Sábado'
];
const mesesAno = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',
    'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

let texto = document.querySelector('.container h1');
texto.innerHTML = `${diasSemana[data.getDay()]},
 ${zeroAEsquerda(data.getDate())} de ${mesesAno[data.getMonth()]} de ${data.getFullYear()} 
 ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`;
console.log(data.getDate());

//Outra forma de fazer
let h1 = document.querySelector('.container h1');
const data2 = new Date();
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short',
};
h1.innerHTML = data2.toLocaleDateString('pt-BR', opcoes);