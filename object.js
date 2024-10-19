Objectoriented();

function Objectoriented() {
    let obj1 = new Object();

    obj1.property1 = 10;
    console.log(obj1.property1);

    obj1.Method1 = function () {
        console.log("I'm a method");
    };

    obj1.Method1();
}
//............................................................
/*
let person = {
    firstname: "sajad",
    lastname: "Afkhami",
    age: 33,
    showbio: function(){
        console.log("I'm sajjad afkhami and 28 years old");
    }
};

console.log(person);
*/
//---------------------------------------------------------------

let person = {
    firstname: 'sajjad',
    lastname: 'Afkhami',
    age : 33,
    account : {
        accountNumber:254,
        accountBalance:100000,
        getBalanceString(){
            return 'my accountBalance:' + this.accountBalance;
        }
    },
    getFullname(){
        return `${this.firstname} ${this.lastname}`;
    }
};

console.log(person.account.getBalanceString());
console.log(person.accountBalance);

//---------------------------------------------------------------

//#copy object

let a1 = {
    m: 10,
    n: 20
};

let a2 = {
    x: 30,
    y: 40
};

let b = {
    ...a1,
    ...a2,
    newproperty:66
};
console.log(b)

//------------------------------------------------------------------

//factory function(اگر بخواهیم از ویژیگی های یک شی چندین کپی داشته باشم.به طور مثال 10 تا ماشین داشته باشیم با ویژیگی های مختلف)
//(2)
function createcar(color, maxspeed){
    let car1 ={
        color : color,
        maxspeed : maxspeed,
        move(){
            console.log('The car is moving')
        },
        stop(){
            console.log('the car was stoped')
        }
    }
    return car1;
   
}
/*(1)
car1 = {
    color : 'black',
    maxspeed: 200,
    move(){
        console.log('The car is moving')
    },
    stop(){
        console.log('the car was stoped')
    }

}

let car2 = {...car1}
*/

let car1 = createcar('blue', 200);
console.log(car1)
let car2 = createcar('Red', 400);
console.log(car2)

//--------------------------------------------------------------

//Math Object

console.log(math.PI);
console.log(Math.E);
console.log(Math.random());
console.log(Math.random() * 5);

//---------------------------------------------------------------

//Date & RegExp

let myDate = new Date();
console.log(mydate.toString()); // برای خوانایی بیشتر استفاده شده است.

myDate = new Date('25 dec 2024');
console.log(mydate.toString());
console.log(Date.now());
console.log(Date.toLocaleDateString('fa-IR')); //تاریخ فارسی

let options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'

};
console.log(Date.toLocaleDateString('fa-Ir' , options));
//------------------------------------------------------------------

