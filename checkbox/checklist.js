
const button = document.querySelector('button');
button.addEventListener('click', handler);

function handler(){
    const marriageOptions = document.querySelector('select[name="marriage"]');
    const educationOptions = document.querySelector('select[name="education"]');

    let marriage , education;

    for(let option of marriageOptions){
        if(option.selected){
            marriage = option.value;
            break;
        }
    }

    for(let option of educationOptions){
        if(option.selected){
            education = option.value;
            break;
        }
    }
    const div = document.getElementById('result');
    div.innerHTML += `<p>شما ${marriage} هستید و دارای مدرک ${education} هستید</p>`;

}
//.......................................................................

/*
const marriageMenu = document.querySelector('select[name="marriage"]');
const educationMenu = document.querySelector('select[name="education"]');

const button = document.querySelector('button');
button.addEventListener('click', handler);

function handler(){
    const div = document.getElementById('result');
    div.innerHTML += `<p>شما ${marriageMenu.value} هستید و دارای مدرک ${educationMenu.value} هستید</p>`;

}

*/


