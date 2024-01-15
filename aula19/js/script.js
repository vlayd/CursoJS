function meuEscopo() {    
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const pessoas = [];
    let dados = {};

    function recebeEventoForm(evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome').value;
        const sobrenome = form.querySelector('.sobrenome').value;
        const peso = form.querySelector('.peso').value;
        const altura = form.querySelector('.altura').value;
        dados = {nome, sobrenome, peso, altura};
        pessoas.push(dados);
        console.log(pessoas);
        resultado.innerHTML += `
            <p>Nome completo: ${nome} ${sobrenome}</p>
            <p>Peso: ${peso}</p>
            <p>Altura: ${altura}</p>`;
    }
    //Escuta os eventos|Nome do evento|    
    form.addEventListener('submit', recebeEventoForm);
    // form.onsubmit = function(evento){
    //     //Previne que a página seja recarregada
    //     evento.preventDefault();
    //     alert(1);
    // };
}
meuEscopo();