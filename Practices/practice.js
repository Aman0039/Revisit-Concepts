// let arr = [1, 2, 3, 4];

// const new_arr = arr.map((el) => el * 2);

// console.log(new_arr);

// const arr2 = arr.forEach((el)=>el);

// console.log(arr2)

// Join Word using rest parameter ("variable" , "" ,"" .... n number of arguments..)


// function joinWord(symbol, ...str) {
//     let res = str[0]

//     if (str.length > 1) {
//         for (let i = 1; i < str.length; i++) {
//             res += ` ${symbol} ${str[i]}`
//         }
//     }
//     console.log(res);
// }

// joinWord("~", "Hello", "World");

// Rest Operator Bundle all the Numbers or Arguments inside and array.

// It is Allowing functions to work with many number of arguments bundling them into an array.


// console.log(console);


// Closures : Whenever a Function returning another function then ,
// it will also carry its lexical Environment;


//Example :

// function outer(){
//     let b = 8;
//     return function inner(){
//         let a = 6
//         return a+b;
//     }
// }

// here outer fn vanished from call stack after
// returning the inner fn();



// let getSum = outer();  // getSum = inner();

// console.log(getSum()) // there is a catch;

// Example 2 :

function outer(){
    let total = 0;
    return function inner(value){

        total += value;
        return `Current Total Sum is ${total}`
    }
}

let calculate = outer();
calculate(5);
calculate(15)
console.log(calculate(10))