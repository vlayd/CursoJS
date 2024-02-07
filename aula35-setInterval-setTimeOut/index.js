function mostrarHora() {
    let data = new Date();
    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

/*Quando não pôs os parenteses ao lado de funcaoDoInterval,
logo está passando só a referência da função
e não a execução da mesma */
//Executar a cada 2000ms (2s)
const time = setInterval(() => {
    console.log(mostrarHora());
}, 2000);

//Parar após 10000ms (10s)
setTimeout(() => {
    clearInterval(time);
}, 10000);