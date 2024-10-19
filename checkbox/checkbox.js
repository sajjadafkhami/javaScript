const button1 = document.querySelector('#form1 button');

button1.addEventListener('click', () => {
    const input = document.querySelector('#form1 input');
    input.value += input.value;
});

//........................................................

const button2 = document.querySelector('#form2 button');

button2.addEventListener('click', handler);

function handler(){
    const inputs = document.querySelectorAll('#form2 input');
    let html = '<table border = "1" width = "200"';
    for(input of inputs){
        if(input.checked){
            html += `<tr><td>${input.value}</td></tr>`
        }
    }
    html += '</table>';
    const div = document.getElementById('result');
    div.innerHTML = html;

}