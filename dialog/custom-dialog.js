

const showbtn = document.getElementById('show');
const closebtn = document.getElementById('hide');
const dialog = document.getElementById('dialog');


showbtn.addEventListener('click', function(){
    dialog.classList.remove('hidden');
});

closebtn.addEventListener('click', function(){
    dialog.classList.add('hidden');
});

const yesshow = document.getElementById('yes');
const noshow = document.getElementById('no');

yesshow.addEventListener('click', function(){
    alert('Your request have done');
});

noshow.addEventListener('click', function(){
    alert('Your request have Failed');
});

