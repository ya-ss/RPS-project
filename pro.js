const shootBtn = document.querySelector("#shootBtn");
const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorBtn = document.querySelector("#scissorBtn");

const RPS = ["Rock","Paper", "Scissor"]
let playerChoice;
let enemyChoice;

// fai object styles, o l'array cosi name:--, color:--


function aiRandomChoice(){
    let rndmIndx;

    rndmIndx = Math.floor(Math.random()*RPS.length)
    enemyChoice = RPS[rndmIndx]

    document.querySelector("#enemyImg").setAttribute("src", "./images/"+enemyChoice+".png")

}

rockBtn.addEventListener("click", event => {
    document.querySelector("#playerImg").setAttribute("src", "./images/Rock.png");
    playerChoice = RPS[0];
})
paperBtn.addEventListener("click", event => {
    document.querySelector("#playerImg").setAttribute("src", "./images/Paper.png");
    playerChoice = RPS[1];
})
scissorBtn.addEventListener("click", event => {
    document.querySelector("#playerImg").setAttribute("src", "./images/Scissor.png");
    playerChoice = RPS[2];
})

const winloseLbl1 = document.querySelector("#winloseLbl1");
const winloseLbl2 = document.querySelector("#winloseLbl2");

let currentBgId;
let currentLbl1CN;
let currentLbl2CN;

function changeTieStyle(){
    document.querySelector("#bigContainer").id = "bigContainerTie"
    winloseLbl1.textContent = "It's a Tie!"
    winloseLbl1.className = "lbl1-tie"
    winloseLbl2.textContent = "It's a Tie!"
    winloseLbl2.className = "lbl2-tie"
    shootBtn.textContent = "Try Again"
    
    currentLbl1CN = "lbl1-tie"
    currentLbl2CN = "lbl2-tie"
    currentBgId = "bigContainerTie"

    winloseLbl1.className = currentLbl1CN
    winloseLbl2.className = currentLbl2CN

}
function changeWinStyle(){
    document.querySelector("#bigContainer").id = "bigContainerWin"
    winloseLbl1.textContent = "You Won!"
    winloseLbl1.className = "lbl1-win"
    winloseLbl2.textContent = "You Won!"
    winloseLbl2.className = "lbl2-win"
    shootBtn.textContent = "Try Again"

    currentLbl1CN = "lbl1-win"
    currentLbl2CN = "lbl2-win"
    currentBgId = "bigContainerWin"

    winloseLbl1.className = currentLbl1CN
    winloseLbl2.className = currentLbl2CN
}
function changeLostStyle(){
    document.querySelector("#bigContainer").id = "bigContainerLost"
    winloseLbl1.textContent = "You Lost!"
    winloseLbl1.className = "lbl1-lost"
    winloseLbl2.textContent = "You Lost!"
    winloseLbl2.className = "lbl2-lost"
    shootBtn.textContent = "Try Again"

    currentLbl1CN = "lbl1-lost"
    currentLbl2CN = "lbl2-lost"
    currentBgId = "bigContainerLost"
    
    winloseLbl1.className = currentLbl1CN
    winloseLbl2.className = currentLbl2CN

}

function resetStyle(){
    document.querySelector("#"+currentBgId).id = "bigContainer"
    currentBgId = "bigContainer";
    winloseLbl1.className = "lbl1"
    winloseLbl2.className = "lbl2"

}

function aiNcheck(){
    
    aiRandomChoice();

    if(playerChoice==enemyChoice){
        changeTieStyle();
    }else if(enemyChoice== RPS[0]){
        playerChoice == RPS[1]? changeWinStyle() : changeLostStyle()
    }else if(enemyChoice == RPS[1]){
        playerChoice == RPS[2]? changeWinStyle() : changeLostStyle()
    }else if(enemyChoice == RPS[2]){
        playerChoice == RPS[0]? changeWinStyle() : changeLostStyle()
    }
}

function shoot(){
    if(shootBtn.textContent == "Try Again"){
        resetStyle();
        shootBtn.textContent = "SHOOT"
    }else{
        aiNcheck();
    }
    



}
 shootBtn.addEventListener("click", shoot)