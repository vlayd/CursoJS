/*
&&
FALSY (avaliado como falseo):
false, 0, '', "", ``, null, undefined, NaN
ele retorna o próprio valor falso, quando não acha, retorna
o último

||
Ele retorna o primeiro valor true, caso contrário, o último
*/
function falaOi() {
    return 'Oi';
}
/*Retorna o falaOi(), pois a comparação é true 
e retorna a última, que é a função falaOi
*/
let nome = 'João';
let vazio = '';
console.log(nome && falaOi());
//No caso retorna o nome='João' que é o primeiro que aparece
console.log(vazio || nome || falaOi());