// // Stack & Queue

// N = 100 
// K = 5
// let Q = []

// for( i = 0; i <= N; i = i + K ){

//      Q.shift(i%3)
// }

// console.log(Q)

// // Object in JS.

// const obj = { a: 1, b: 2, c: 3 };
// const result = Object.entries(obj).map(([key, value]) => key + value).join(", ");
// console.log(result);

// const array = [1, 2, 3];
// const copy = [...array];
// copy.push(4);
// console.log(array, copy);

// const numbers = [1, 2, 3, 4, 5];
// const filtered = numbers.filter((n) => n % 2 === 0);
// console.log(filtered);

// const data = [1, 2, 3, 4, 5];
// const sum = data.reduce((accumulator, current) => { accumulator + current });
// console.log(sum);

// Pattern.js

// Square Shape.

// * * * * 
// *     *
// *     *
// * * * *

// function square(n){
//     for(let i = 1;i <= n;i++){ // outer loop
//         let temp = ""
//         for(let j = 1; j <= n; j++){ // inner loop
//             (i == 1 || i == n || j == 1 || j == n) ? temp = temp + "* " : temp += "  " // *_*_*_*_
//         }
//         console.log(temp)
//     }
// }
// // n * n / 4 < 4 = ? (False)

// square(6)
