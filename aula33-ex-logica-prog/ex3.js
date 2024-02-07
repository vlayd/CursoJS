/* Escreva uma função que recebe um número e retore o seguinte
Número é divisível por 3 = Fizz
Número é divisível por 5 = Buzz
Número é divisível por 3 e por 5 = FizzBuzz
Número não é divisível por 3 e por 5 = retorna o próprio número
Chegar se o número é realmente um número = retorna o próprio
Use a função com números de 0 a 100
*/
let n = 0
while(n <= 100){
    let p = '';
    if((n%3)===0) p='Fizz';
    if((n%5)===0) p+='Buzz';
    else p = n;
    console.log(p); 
    n++;   
}