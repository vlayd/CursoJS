const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [primeiroNumero, segundoNumero, ...restante] = numeros;
const [, segundo, , quarto, , sexto] = numeros;
//É atribuído só o primeiro número e o segundo número
console.log(primeiroNumero, segundoNumero);
console.log(segundo, quarto, sexto);
//O restante é o array que sobrou (rest operation)
console.log(restante);
const numeros2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
//Acessar o 5
const [, [, cinco]] = numeros2;
//Acessar o 5
const [lista1, lista2, lista3] = numeros2;
console.log(numeros2[1][1]);
console.log(cinco);
console.log(lista2[1]);