const ul = document.querySelector('ul');
const p = document.querySelector('p');
const button = document.querySelector('button');


//button.addEventListener('click', buttonhandler);
ul.addEventListener('click', handler);


function handler(event){
    p.textContent = event.target.textContent;
   
}



button.addEventListener('click', () => {
    ul.innerHTML += '<li>Lemon</li><li>lime</li>';
   
    
});

/*
function buttonhandler(){
    li.removeEventListener('click', buttonhandler)
}
*/

//button.removeEventListener('click', handler);

/*
function buttonhandler() {
    button.removeEventListener('click', buttonhandler);

}

*/