function sayHello(){
    return `Hello, my name is ${this.name}`
}

console.log(sayHello());

const name1 = {name : 'Amir'};
const name2 = {name : 'Ali'};

console.log(sayHello.call(name1));
console.log(sayHello.call(name2));
//---------------------------------------------------------------

function sayHello2(greeting){
    return `${greeting}, my name is ${this.name}`;

}

console.log(sayHello2.call(name1, 'Good morning'));
console.log(sayHello2.call(name2, 'Good evening'));

console.log(sayHello2.apply(name1, ["I'm very happy to see you again, Good morning"]));
//----------------------------------------------------------------

x = 5;
const obj = {
    x : 10,
    myMethod : function(){
        console.log(this.x);
    },
};

obj.myMethod();
const myfunction = obj.myMethod;
myfunction();
//-----------------------------------------------------------------
function sumArgs(num1, num2, num3){
    return num1 + num2 + num3;
}

console.log(sumArgs(1, 2, 3));
const sum = sumArgs.bind(null, 10, 20)
console.log(sum(30));

//------------------------------------
const obj2 = {
    x : 20,
    myMethod : () => console.log(this.x)
};

obj2.myMethod();
//-------------------------------------
function fact(n){
    if(n === 1){
        return 1;
    }
    else {
        return n * fact(n - 1);
    }
}

console.log(fact(5));

//-------------------------------------
//send args to IIFEs //another function
(function(n){
    let result = 1;
    for(let i = 1; i <= n; i++){
        result *= i;
    }
    console.log(result);
})(5);
//--------------------------------------
function f(){
    if(Math.random() > 0.5){
        return[2, 4, 7];
    }else{
        return[5,6];
    }   
}
[a ,b ,c=22] = f();
console.log(a, b, c);
//--------------------------------------

//assigning the rest of array to a variable
colors = ['green', 'red', 'blue', 'pen'];

[a, b, ...c] = colors;

console.log(a, b, c)
//---------------------------------------
//#closure

function outer(){
    let outside = 'Outside';
    function inner(){
        let inside = 'Inside';
        console.log(inside);
        console.log(outside);
    }
    return inner;
}
let myfunc = outer();
myfunc(); 

//----------------------------------------
//#closure//change outside variable
function makeCounter(start){
    let i = start;
    return function(){
        return i++;
    }
}
const counter1 = makeCounter(1);
const counter2 = makeCounter(10);

console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter2());
console.log(counter2());
//------------------------------------

//map()// key -> value
// let myMap = new map();
let person = new Map([['name','sajjad'],['age','33'],['educate','Math']]);
console.log(person);
person.set('class', '2');

//-------------------------------------



