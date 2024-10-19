const Alert = document.getElementById("alert");
Alert.addEventListener('click', function(){
    alert('IT IS Good');
});


const Confirm = document.getElementById('confirm');

Confirm.addEventListener('click', function(){
    let message = confirm('Are you sure?');
    if(message){
        alert('You have correct answer');
    }
    else{
        alert('Your answer is incorrect');
    }
});

const Prompt = document.getElementById('prompt');

Prompt.addEventListener('click', function(){
    let name = prompt("Enter your First and lastname");
    let age = prompt("Enter your age:", "32 ");
    let print = `your name is: ${name} and your age is: ${age}`;
    alert(print);

});