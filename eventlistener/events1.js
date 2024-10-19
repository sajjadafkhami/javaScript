// Mouse Events - part1

const button = document.querySelector('button');
const input = document.querySelector('input');
const p = document.querySelector('p');


button.addEventListener('click', () => {
    p.innerHTML += `<p> click: ${Date.now()}</p>`;
});


button.addEventListener('click', buttonhandler);

function buttonhandler(){
    p.innerHTML += 'I`m buttonHandler';
    button.removeEventListener('click', buttonhandler);
}

/*
const input = document.querySelector('input');
const p = document.querySelector('p');
*/
input.addEventListener('keypress', handler);

function handler(event){
    p.innerHTML += event.type + ' ';
}

