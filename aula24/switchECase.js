//Foi colocado 4h, pois o fuso horário oficial não ia dá certo
const data = new Date('1994-02-20 04:00:00');
let diaSemana = data.getDay();
const dias = {
    0: 'domingo',
    1: 'segunda',
    2: 'terça',
    3: 'quarta',
    4: 'quinta',
    5: 'sexta',
    6: 'sábado'
};
console.log(dias[diaSemana]);
switch (diaSemana) {
    case 0:
        diaSemana = 'Domingo'
        break;
    case 1:
        diaSemana = 'Segunda-feira'
        break;
    case 2:
        diaSemana = 'Terça-feira'
        break;
    case 3:
        diaSemana = 'Quarta-feira'
        break;
    case 4:
        diaSemana = 'Quinta-feira'
        break;
    case 5:
        diaSemana = 'Sexta-feira'
        break;
    case 6:
        diaSemana = 'Sábado'
        break;
    default:
        diaSemana = '';
}
console.log(diaSemana);
