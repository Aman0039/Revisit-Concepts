let input = document.querySelector("#input");
let clear = document.querySelector("#clear");
let keyStrokes = document.querySelector(".dial");

const displayEl = (val) => {

    input.innerText += val;
}



const handleCalculate = (id, value) => {
    let keyId = id;
    let val = value;

    if (id == "clear") {
        clearFn()
    }
    else{
        displayEl(val)
    }
}


const clearFn = () => clear.addEventListener("click", () => {
    input.innerText = ""
})

// console.log(keyStrokes.children);

let actionPerform = []

Array.from(keyStrokes.children).forEach((child) => {
    let value = child.textContent;
    let id = child.id;
    actionPerform.push({ key: [id, value] });
});

Array.from(keyStrokes.children).forEach((child) => {
    child.addEventListener("click", () => {
        
        // console.log("button clicked!");

        for (let { key } of actionPerform) {
            if (child.textContent == key[1]) {
                handleCalculate(key[0], key[1]);
            }
        }
    })
})

// console.log(actionPerform)

// for (let { key } of actionPerform) {

//     // console.log(key);
// }



