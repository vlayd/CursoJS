function getTimeFromSeconds(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}
let segundos = 0;
let timer;

function startTime() {
    timer = setInterval(function(params) {
        segundos++;
        relogio.innerHTML = getTimeFromSeconds(segundos);
    }, 1000);
}

document.addEventListener('click', function (e) {
    const elementClicked = e.target;
    if(elementClicked.classList.contains('zerar')){
        relogio.classList.remove('pausado');
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        segundos = 0;
    } else if(elementClicked.classList.contains('pausar')){
        clearInterval(timer);
        relogio.classList.add('pausado');
    } else if(elementClicked.classList.contains('iniciar')){
        relogio.classList.remove('pausado');
        clearInterval(timer);
        startTime();
    }
});
