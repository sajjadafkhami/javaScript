// define Event listener

let button = document.querySelector('button');
button.addEventListener('click', handler);


function handler(){
    let main = document.getElementById('main');
    let p = document.createElement('p');
    p.textContent = 'Open the site';
    main.appendChild(p);
}


button.addEventListener('click', () => console.log(Date.now()));