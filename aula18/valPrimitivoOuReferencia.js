/*
Primitivo (imutáveis): - são copiados e fica lá guardado
string, number, boolean, undefined, null (bigint, symbol)
*/
//Ex.:
let nome = 'Vlaydisson';
console.log(nome[0]);
nome[0] = 'S';
//Mesmo tentando alterar o índice, continua imutável
console.log(nome[0]);
//Ex.:
let numero1 = 10;
let numero2 = numero1;
console.log(numero1, numero2);
numero1 = 20;
//Alterado o numero1, mas o numero2 que recebeu inicialmente 10, fica imutável
console.log(numero1, numero2);
/*
Referência (mutável) - array, object, function
é mostrado por referência, logo sempre é alterado e depois apontado
*/
//Ex.:
let nomes = ['Vlaydisson', 'Vladymir'];
console.log(nomes[0]);
nomes[0] = 'Juvenil';
//Alterar o índice 0, recebe o novo valor, pois é mutável
console.log(nomes[0]);
//Ex.:
let numeros1 = [10, 20];
/* spred [...]
O numeros3 recebe valor de numeros1 
e fica guardado o valor original e independente
*/
let numeros3 = [...numeros1];
let numeros2 = numeros1;
console.log(numeros1, numeros2);
numeros1[0] = 50;
/*
Alterado do índice 0 do numeros1, e o numeros2 que recebeu inicialmente,
 recebe o novo valor, pois é mutável
 */
console.log(numeros1, numeros2, numeros3);