const form1 = document.getElementById('form1');

form1.addEventListener('submit', validate);

function validate(event){
    const user = document.getElementById('user');
    const pass = document.getElementById('pass');
    if(user.value.length <= 3 || user.value.length > 15){
        event.preventDefault();
        user.nextElementSibling.innerHTML = 'please enter a number between 4 and 14';
        user.focus();
    }
    if(pass.value.length <= 5 || pass.value.length > 20){
        event.preventDefault();
        pass.nextElementSibling.innerHTML = 'please enter a number between 6 and 20';
        pass.focus();
        
    }
}

const form2 = document.getElementById('form2');

form2.addEventListener('submit', validateyear);

function validateyear(event){
    const year = document.getElementById('year');
    if(!Number.isInteger(Number(year.value))){
        
        year.nextElementSibling.innerHTML = 'enter a correct integer';
        event.preventDefault();
    }else if(year.value < 1300 || year.value > 1400 ){
        event.preventDefault();
        year.nextElementSibling.innerHTML = 'enter a number between 1300 and 1400';
    }

}