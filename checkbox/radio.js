
const button = document.querySelector('button');

button.addEventListener('click', handler);

function handler(){
    const marriageInputs = document.querySelectorAll('input[name="marriage"]');
    const educationInputs = document.querySelectorAll('input[name="education"]');

    let marriage , education;

    for(let input  of marriageInputs){
        if(input.checked){
            marriage = input.value;
            break;
        }
    }

    for(let input of educationInputs){
        if(input.checked){
            education = input.value;
            break;
        }
    }
    const div = document.getElementById('result');
    div.innerHTML += `<p>شما ${marriage} هستید و دارای مدرک ${education} هستید</p>`;

}





