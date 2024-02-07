const paragrafos = document.querySelector('.paragrafos');
//Pega todos os parágrafos dentro da div 'paragrafos'
const ps = paragrafos.querySelectorAll('p');
//Pegar o background do body
const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
for (let p of ps) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#ffffff';
}