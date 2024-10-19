const text = document.getElementById('text');

const check = document.getElementById('check');

const textarea = document.getElementById('textarea');

const select = document.getElementById('select');

text.addEventListener('change', handler);
check.addEventListener('change', handler);
textarea.addEventListener('change', handler);
select.addEventListener('change', handler);

function handler(event){
    event.target.nextElementSibling.innerHTML += 'change';
}