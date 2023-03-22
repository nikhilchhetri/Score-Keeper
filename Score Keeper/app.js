const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const button1 = document.querySelector("#p1Button");
const button2 = document.querySelector("#p2Button");
const resetButton = document.querySelector("#reset");
const playToSelect = document.querySelector("#playTo");

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

button1.addEventListener("click", function(){
    if (!isGameOver){
        p1Score++;
        if (p1Score===winningScore){
            isGameOver = true;
            p1Display.classList.add("has-text-success");
            p2Display.classList.add("has-text-danger");
            button1.disabled = true;
            button2.disabled = true;
        }
        p1Display.innerText = p1Score;
    }
})

button2.addEventListener("click", function(){
    if (!isGameOver){
        p2Score++;
        if (p2Score===winningScore){
            isGameOver = true;
            p2Display.classList.add("has-text-success");
            p1Display.classList.add("has-text-danger");
            button1.disabled = true;
            button2.disabled = true;
        }
        p2Display.innerText = p2Score;
    }
})

playToSelect.addEventListener("change", function(){
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener("click", reset)

function reset(){
    p1Score=0;
    p2Score=0;
    p1Display.innerText = p1Score;
    p2Display.innerText = p2Score;
    p1Display.classList.remove("has-text-success", "has-text-danger");
    p2Display.classList.remove("has-text-danger", "has-text-success");
    isGameOver=false;
    button1.disabled = false;
    button2.disabled = false;
}