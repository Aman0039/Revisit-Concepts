// Q5. Remove duplicates from sorted array;

// let arr5 = [3,4,5,5,6,7,7,8];

// function RemoveDuplicates(arr){
//     let i = 0;
     
//     for(let j = 1; j < arr.length;j++){
//         if(arr[j] !== arr[i]){
//             i++;
//             arr[i] = arr[j];
//         }
//     }
//     return i+1;
// }

// console.log(RemoveDuplicates(arr5))

console.log([] == [])

//---------------------------------------------------

// // Q4. Reverse an array

// let arr4 = [3,4,5,4,4,6];


// function reverseArr(arr){

// // approach 1 (using extra array);

//     // let nArr = [];
//     // for(let i = arr.length-1;i >= 0;i--){
//     //     nArr.push(arr[i]);
//     // }
//     // return nArr;


//     //approach 2 (Two Poiners);
//     let left = 0;
//     let right = arr.length-1;

//     while(left < right){

//         // swapping element using destructuring.
//         [arr[left] , arr[right]] = [arr[right] , arr[left]];

//         left++;
//         right--;
//     }

//     return arr;

// }

// console.log(reverseArr(arr4))

//---------------------------------------------------

// // Q3. Check if array is sorted;

// let arr3 = [1,2,3,4,5,6,7,8,9];

// function checkSorted(arr){
//     let res = true;
//     let i = 0;
//     while(i < arr.length-1){
//         if(arr[i] <= arr[i+1]){
//             i++;
//             continue;
//         }
//         else{
//             return res = !res;
//         }
//     }
//     return res;
// }

// console.log(checkSorted(arr3)) //Output : true


//---------------------------------------------------


// // Q2. Find the second largest element;

// let arr2 = [4,5,4,6,7,24,19,5,3];


// function findSecLargest(arr){
//     let largest = arr[0];
//     let secLargest = -1;

//         for(let i = 1;i < arr.length;i++){
//            if(largest < arr[i]){
//             secLargest = largest;
//             largest = arr[i];
//            }
//            else if(secLargest < arr[i] && arr[i] < largest){ // when largest number occurs before then it works.
//             secLargest = arr[i];
//            }
//         }
//     return secLargest;
// }

// console.log(findSecLargest(arr2)) // Output : 19


//---------------------------------------------------


// // // Q1. Find the largest element in an array

// let arr1 = [2,4,5,4,6,7,5];

// function findLargest(arr){

//     let maxlen = arr[0];
    
//     for(let i = 1;i < arr.length;i++){
//         if(arr[i] > maxlen){
//             maxlen = arr[i];
//         }
//     }
//     return maxlen;
// }

// console.log(findLargest(arr1)) // Output : 7