const elementos = [
    {tag: 'p', texto: 'Frase1'},
    {tag: 'div', texto: 'Frase2'},
    {tag: 'footer', texto: 'Frase3'},
    {tag: 'section', texto: 'Frase4'},
];

//Minha solução
// const container = document.querySelector('.container');
// const div = document.createElement('div');
// for (let i = 0; i < elementos.length; i++) {
//     const tag =  document.createElement(elementos[i].tag);
//     tag.innerHTML = elementos[i].texto;
//     div.appendChild(tag);
//     container.appendChild(div);
// }

//Solução do professor
const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    //Associação por desestruturação
    let {tag, texto} = elementos[i];   
    //Cria tag html
    let tagCriada = document.createElement(tag); 
    //Cria texto para por na tag html
    let textoCriada = document.createTextNode(texto);
    tagCriada.appendChild(textoCriada);
    //NOVO innerText serve para texto
    // tagCriada.innerText = texto;
    div.appendChild(tagCriada);
}

container.appendChild(div);
