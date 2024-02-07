// Funções são First-class objects (Objetos de primeira classe)
// Declaração de função (Function hoisting)
//Ou seja, podemos chamá-la antes ou depois da declaração
function falaOi() {
    console.log('Oi');
}

// Function expression (pode ser uma variável)
const souUmDado = function (params) {
    console.log('Sou um dado');
} 
//Chamando
souUmDado();

// Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
}