// map function

let arr = [2,3,4,5,4,3];

let value = arr.map((el)=>{
  return el*2
})

console.log(value)





//filer with search functionality

let fruits = ["apple","grapes","banana","pineapple","mango"];

let searchFilter = (params)=>{
  let res = fruits.filter((el)=>{
    return el.includes(params);
  })
  
  return (res.length == 0) ? `${params} is not found`
  : res
}

let val = searchFilter("app")

console.log(val)




// reduce method

let nums = [2,3,4,3,5,6,4,3,8];

// reduce one callback fn and one initial value as an parameter for the accumulator ;

let result = nums.reduce((acc, curr)=>{
    return acc += curr;
}, 0);

console.log(result)

