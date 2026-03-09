let boxes = document.querySelectorAll(".box");
let message = document.querySelector("#msg");
let result = document.querySelector(".result");
let resetBtn = document.querySelector("#reset-btn");
let newGame = document.querySelector("#newgame-btn");
let game = document.querySelector(".game");

let turnO = true;
let draw = false;
let cnt = 0;

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

const resetGame = () => {
    draw = false;
    cnt = 0;
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    })
    game.classList.remove("hide");

}

const newGameFn = () => {
    resetGame();
    result.classList.add("hide");

}

const winner = (x) => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
    message.innerText = `Congrats🎉 Player ${x} is Winner!`
    result.classList.remove("hide");
    game.classList.add("hide");

}

const checkWinner = () => {
    for (let [i, j, k] of winPattern) {
        let posVal1 = boxes[i].innerText;
        let posVal2 = boxes[j].innerText;
        let posVal3 = boxes[k].innerText;

        if (posVal1 !== "" && posVal2 !== "" && posVal3 !== "") {
            if (posVal1 == posVal2 && posVal2 == posVal3) {
                winner(posVal1);
            }
        }
    }
}

const checkDraw = () => {
    message.innerText = `Match is Draw! please restart the game!`
    result.classList.remove("hide");
    game.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerText == "") {
            box.innerText = (turnO) ? "O" : "X";
            box.style.color = (turnO) ? "red" : "blue";
            turnO = !turnO;
            cnt++;
        }
        checkWinner();
        if(cnt > 8){
            checkDraw();
        }
    })
});



resetBtn.addEventListener("click", resetGame);
newGame.addEventListener("click", newGameFn)



