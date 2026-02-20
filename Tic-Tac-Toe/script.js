const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector("#reset-btn");
const newGamebtn = document.querySelector(".newGame-btn");
const result = document.querySelector(".win");
let msg = document.querySelector("#win-msg");
let container = document.querySelector("#main-container");

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [6, 7, 8],
    [3, 4, 5]
]

let turnO = true;
let draw = false;

const checkWinner = () => {

    if (draw) {
        msg.innerText = "Match is Draw !! Start New Game.";
        result.classList.remove("hide");
        container.classList.add("hide");
    }

    else {

        for (let pattern of winPatterns) {
            let pos1Val = boxes[pattern[0]].innerText;
            let pos2Val = boxes[pattern[1]].innerText;
            let pos3Val = boxes[pattern[2]].innerText;

            if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
                if (pos1Val === pos2Val && pos2Val === pos3Val) {
                    msg.innerText = `Congrats🎉🎊 Player ${pos1Val} Win`;
                    result.classList.remove("hide");
                    container.classList.add("hide");
                }
            }
        }
    }

}

let cnt = 0;

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        box.innerText = (turnO) ? "O" : "X";
        turnO = !turnO;
        if (!box.disabled) {
            cnt++;
        }
        box.disabled = true
        checkWinner();
        if (cnt > 8) {
            draw = true;
            checkWinner();
        }
    })
})


const resetGame = () => {
    boxes.forEach((box) => {
        box.innerText = ""
        box.disabled = false;
        result.classList.add("hide");
        cnt = 0;
        draw = false;
    })
}

const newGame = () => {
    resetGame();
    container.classList.remove("hide")
}

resetBtn.addEventListener("dblclick", resetGame);
newGamebtn.addEventListener("click", newGame);