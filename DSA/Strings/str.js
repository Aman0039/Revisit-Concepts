let str = "hello";
let str2 = "helloaaa";
let res = ""
for(let i = 0;i < str2.length;i++){
    if(str.includes(str2[i]) == false){
        res += str2[i]
    }
}

console.log(res);
