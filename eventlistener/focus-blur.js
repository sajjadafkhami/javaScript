const day = document.getElementById('day');
const month = document.getElementById('month');

day.addEventListener('blur', (event) => {
    if(!(day.value >= 1 && day.value <= 31)){
        day.nextElementSibling.innerHTML = 'Enter number from 1 to 31';

    }
});

month.addEventListener('blur', (event) => {
    if(!(month.value >= 1 && month.value <= 12)){
        month.nextElementSibling.innerHTML = 'Enter number from 1 to 12';

    }
});