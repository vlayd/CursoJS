//Data zero 01/01/1970
// const data = new Date(0);
//Hora zero mais 1 dia (milissegundos)
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(umDia);
//17/07(-1)/1980 às 15:45:27 e 500ms       120s = 2min
//                       a, m,  d,  h,  M,   s, ms
const data = new Date(1980, 6, 17, 15, 45, 120, 500);
//Hora padrão do sistema
console.log(data);
//Hora padrão local
console.log(data.toString());
const data2 = new Date('2019-04-20 20:15:59.199');
//Mostra o dia
console.log('Dia', data2.getDate());
//Mostra o mês
console.log('Mês', data2.getMonth() +1);
//Mostra o ano
console.log('Ano', data2.getFullYear());
//Mostra a hora
console.log('Hora', data2.getHours());
//Mostra o minuto
console.log('Minuto', data2.getMinutes());
//Mostra o segundo
console.log('Segundo', data2.getSeconds());
//Mostra o milissegundo
console.log('Milissegundo', data2.getMilliseconds());
//Mostra o dia da semana (0-domingo e 6-domingo)
console.log('Dia da semana', data2.getDay());
console.log(data2);
console.log(data2.toString());
//Data atual (milissegundo)
console.log(Date.now());

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = data.getFullYear();
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());
    return `${dia}/${mes}/${ano} às ${hora}:${min}:${seg}`
}

const dataSemFormat = new Date();
const dataFormatada = formataData(dataSemFormat);
console.log(dataFormatada);