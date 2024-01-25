const verdadeiro = true;
//Let tem escopo de bloco {... bloco}
//Var só tem escopo de função

let nome = 'Luiz';
var nome2 = 'Luiz';

if(verdadeiro){
    //Pode criar a mesma let name, pois está dentro de um bloco
    let nome = 'Vladymir';
    console.log(nome, nome2);
}

console.log(sobrenome);
//Há um hoist, pois mesmo depois, há um reconhecimento da variável
var sobrenome = 'Valóis';
//Isso não acontece com o let (dá erro!)
console.log(sobrenome2);
let sobrenome2 = 'Valóis';