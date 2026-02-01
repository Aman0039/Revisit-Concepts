// // console.log(a); // undefined due to hoisting.

// var a = 10; // Declaration and Initialization as Undefined.
// var b = 20; // a = 10 , b = Undefined due to hoisting.
// var c = 30; // a = 10 , b = 20 , c = Undefined due to hoisting.

// // Use Debugger to check the values of a, b, c at different stages.

// // Interview Question:
// // What will be the output of the following code snippet?

// var x = 10;
// console.log(x); // Output: 10
// console.log(y); // Output: undefined due to hoisting.
// console.log(z); // Output: undefined due to hoisting.

// var y = 20;
// var z = 30;

// console.log(y); // Output: 20
// console.log(z); // Output: 30


// Redeclaration with var

// var a; //= Declaration
// console.log(a); // Output: undefined

// a = 10; // Initialization
// console.log(a); // Output: 10;


//Re-Initialization with var

// var b = 30; // Declaration and Initialization

// console.log(b); // Output: 30

// b = 40; // Re-Initialization

// console.log(b); // Output: 40


// // let and const do not allow redeclaration

// let b = 10;

// // let b = 20; // SyntaxError: Identifier 'b' has already been declared

// const c = 30;

 // const c = 40; // SyntaxError: Identifier 'c' has already been declared   

// Temporal Dead Zone (TDZ) Example with let


// console.log(a); // ReferenceError: Cannot access 'a' before initialization;

// let a = 20;


let a;
console.log(a);