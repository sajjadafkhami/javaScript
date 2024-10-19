const Once = document.getElementById("once");
const Repeat = document.getElementById('repeat');
const Set = document.getElementById('set');
const Clear = document.getElementById('clear');

Once.addEventListener('click', function(){
    setTimeout(() => {
        alert('3 second elapsed');
    }, 3000);
});

Repeat.addEventListener('click', function(){
    setTimeout(timeout, 2000);
});

function timeout(){
    alert('2 second elapsed');
    setTimeout(timeout, 2000);
}