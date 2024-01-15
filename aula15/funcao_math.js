let num1 = 9.939944;
//Arredonda pra menos -> 9
let num2 = Math.floor(num1);
console.log(num2);
//Arredonda pra mais -> 10
num2 = Math.ceil(num1);
console.log(num2);
//Arredonda para o que deve ser correto -> 10
num2 = Math.round(num1);
console.log(num2);
//Pega o maior número da sequência
console.log(Math.max(1,2,3,5,-19,433,1500,4,2));
//Pega o menor número da sequência
console.log(Math.min(1,2,3,5,-19,433,1500,4,2));
//Aleatório entre 0 e 1, com casas decimais
let aleatorio = Math.random();
console.log(aleatorio);
//Aleatório entre 1 e 100, sem casas decimais (gambriarra)
aleatorio = Math.round(Math.random() * 100);
console.log(aleatorio);
//Valor de PI
console.log(Math.PI);
//Potenciação, 2 elevado a 10
console.log(Math.pow(2, 10));
console.log(2 ** 10);
//Radiciação, raiz quadrada de 9
let nRaiz = 9;
console.log(nRaiz ** (1/2));
console.log(nRaiz ** (0.5));