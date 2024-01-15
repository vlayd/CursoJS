let num1 = 1500;
let num2 = 2.149592653;
//Convert number em string
console.log(num1.toString());
//Convert number em binário
console.log(num1.toString(2));
//Deixa o número decimal em 2 casa arredondando
console.log(num2.toFixed(2));
//Verifica se o número é inteiro
console.log(Number.isInteger(num1));
console.log(Number.isInteger(num2));
//Verifica se o número é inválido
let temp = num1 * 'olá';
console.log(Number.isNaN(temp));
//Padrão IEEE 754-2008, causa imprescisão 0.7999999999...
let num3 = 0.7;
let num4 = 0.1;
let numTotal = num3 + num4;
console.log(numTotal);
//Resolvendo o problema
numTotal = Number(numTotal.toFixed(2));
console.log(numTotal);