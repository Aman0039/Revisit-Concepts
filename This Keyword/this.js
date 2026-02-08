//This Refers to the Object where it is it present.

// console.log(this); // refers to the window object.
// console.log(window) // output are same.

//This inside the function also refers to the window object 


// function greet(){
//     console.log(this)
// }

//With these examples you will clear about how "This" work. (it refers to the object where it is present.)

// const person = {
//     name : "Alice",
//     age : 34,
//     greet: function(){
//         console.log(this) // Here this will refers to the person(Object).
//     },

//     nestedObj: {
//         country: "USA",
//         fun:function(){
//             console.log(this) // Here This will refers to the nestedObj.
//         }
//     }
// }

//Destructuring

// let arr = [[1,2],[3,4,5]];

// let [[a,b],[c,d,e]] = arr;

// console.log(a,b,c,d,e);