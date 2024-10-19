const button = document.querySelector('button');
const input = document.querySelector('input');
const p = document.querySelector('p');


button.addEventListener('click', buttonhandler);

function buttonhandler(){
    p.innerHTML += 'I`m buttonhandler<br />'
    button.removeEventListener('click', buttonhandler)
}

input.addEventListener('keypress', inputhandler);

function inputhandler(event){
    event.preventDefault();
}

document.addEventListener('contextmenu', (event) => event.preventDefault());
