const person = {
    firstName: "Alice",
    lastName: "Smith",
    age: 30,
    city: "New York"
}

// Using for in loop to iterate over object properties

// for (let key in person) {

//     //Here in the key variable it keep the all key reference of the object.
//     // console.log(person.key); -> Dot notion is not allowed in the for in loop.
//     // console.log(person[key]); // use bracket notion
// }

const details = {
    name: "Aman",
    age: 20,
    place: "Bengaluru",
}

// for(let data in details){
//     console.log(`${data} : ${details[data]}`)
// }


//Q. Print the value only when the value of the key is string. 

//=>
//    let student = {
//     name : "Samwell Tarly",
//     age : 22,
//     grade : "A",
//     isGraduate : true,
// }

// let data;
// for(let key in student){
//     data = student[key];
//     if(typeof(data) === "string"){
//         console.log(data);
//     }
// }

// Q. Return same object by appling 10% of discount.

// const goods = {
//     bread: 2,
//     milk: 1.5,
//     cheese: 5
// }

// let priceDiscount;

// for (let price in goods) {
//     // priceDiscount = (goods[price] / 100) * 10;
//     // goods[price] = goods[price] - priceDiscount;

//     goods[price] = goods[price] * 0.9;
// }

// console.log(goods);

// Q. Find The Occurence of the Character in string.

// function getCharFreq(str){

//     let obj = {};

//     for(let i = 0;i < str.length;i++){

//         obj[str[i]] ? obj[str[i]]++ : obj[str[i]] = 1
//     }

//     for(let key in obj){
//         console.log(`${key} is printed ${obj[key]} times.`)
//     }
// }

// getCharFreq("aasaaaazzzzttfff");

//Q. Find First none-repeating character.

// function firstNoneRepeatingChar(str){
//     let obj = {};

//     for(let i = 0;i < str.length;i++){
//         let char = str[i];

//         obj[char] ? obj[char]++ : obj[char] = 1;
//     }

//     for(let i = 0;i < str.length;i++){ // you can also use for(..in) loop here.
//         let char = str[i];

//         if(obj[char] == 1){
//             console.log(str[i]);
//             break;
//         }
//     }

//     return null;
// }

// firstNoneRepeatingChar("swiss");

// Q. Just an Example of Object Method.

//( When a function created inside the object then it is called as object method.)

// const myData = {
//     name: "Aman",
//     place: "Bengaluru",
//     greet:
//         function () {   // Object Method
//             console.log("Hello Everyone!")
//         },

//         // Using this Keyword you can access the Object Keys otherwise it will through
//         // Reference Error.

//     details: function(){
//         console.log(`Hi I am ${this.name} and I am Currently in ${this.place}`)
//     } 
// }

// myData.greet()
// myData.details();

// Will See This Method in more detail.

// Q. Write a object method to calculate the perimeter of rectangle.

// const obj = {
//     calc:function(l,b){
//         console.log(2*(l+b));
//     }
// }

// obj.calc(2,4)