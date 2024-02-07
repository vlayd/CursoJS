const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function (e) {
    //Aqui pega o keyCode da tecla
    // console.log(e);
    //!3 é o keyCode do enter
    if (e.keyCode === 13) {
        if(!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});

function createButtonClear(li) {
    li.innerText += ' ';
    const buttonClear = document.createElement('button');
    buttonClear.innerText = 'Apagar';
    //Duas formas de criar class dentro do elemento
    // buttonClear.classList.add('apagar');
    buttonClear.setAttribute('class', 'apagar');
    buttonClear.setAttribute('title', 'Apagar esta tarefa');
    li.appendChild(buttonClear);
}

function clearInput(params) {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    clearInput();
    createButtonClear(li);
    salvarTarefas();
}

btnTarefa.addEventListener('click', function () {
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function(e) {
    const elementoClicado = e.target;
    //Verifica qual o elemento foi clicado pelo nome da classe
    if(elementoClicado.classList.contains('apagar')){
        //Remove o pai, no caso a li que ele está contido
        elementoClicado.parentElement.remove();
        salvarTarefas()
    }
})

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];
    for (const tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }
    //Transforma o array em string stringify() e logo para json JSON.
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    //Salva localmente dentro do navegar como 'tarefas'
    localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    //Converte de json para array
    const listaDeTarefas = JSON.parse(tarefas);
    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}

adicionaTarefasSalvas();