function mean(operation, ...numbers){
    let result;
    if (operation === 'sum'){
        result = 0;
        for(let number of numbers){
        result += numbers;
    }
    }
    else if (operation === 'subtract'){
        result = 1;
        for(let number of numbers){
            result *= numbers; 
        }
    }
    return result;
}

console.log(mean('sum', 2, 4))
console.log(mean('subtract', 5, 8, 10))
//----------------------------------------------------------------------------------
function example(callbak){
    Callback()
}

example(function(){
    console.log("I'm a student");
});

example(() => console.log("I'm a student")); // (arrow function  + //callback function)
//-----------------------------------------------------------------------------------
let numbers = [5, 9, 15, 23, 19];
let result = numbers.sort();
console.log(result);

 result = numbers.sort(function(value1, value2){
    return value1 - value2
});
console.log(result);

result = numbers.sort((value1, value2) => value1 - value2);
console.log(result);
//------------------------------------------------------------------------------------
let element = ['green', 22, 11, 12, 24, 'blue']
let aply = element.filter(value => value % 2 === 0); //filter

console.log(aply);
//-------------------------------------------------------------------------------------