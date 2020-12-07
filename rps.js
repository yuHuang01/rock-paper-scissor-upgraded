
let playerName = prompt('Enter your name: ');
let playerScore = 0;
let compScore = 0 ;
let resultDisp = document.querySelector('#resultdisp');
let resulth3 = document.querySelector("#resulth3");


function compPlay() {
    let items = ["rock", "paper", "scissor"]
    let comChoice = items[Math.floor(Math.random() * 3)]
    return(comChoice)
}

function playRound(playSelect, compSelect) {
    switch(playSelect) {
        case "rock":
                switch(compSelect) {
                    case "rock":
                        return("tie")
                        break;
                    case "paper":
                        return("comp")
                        break;
                    case "scissor":
                        return("player")
                        break;
                    }
            break;

        case "paper":
                switch(compSelect) {
                    case "rock":
                        return("player")
                        break;
                    case "paper":
                        return("tie")
                        break;
                    case "scissor":
                        return("comp")
                        break;
                    }
            break;

        case "scissor":
                switch(compSelect) {
                    case "rock":
                        return("comp")
                        break;
                    case "paper":
                        return("player")
                        break;
                    case "scissor":                        
                        return("tie")
                        break;
                }
            break;
    }
};

function deleteLastScore(){
    let lastScore = document.getElementById("cScore");
    lastScore.parentNode.removeChild(lastScore)
}

function addScore (roundResult) {
    if(roundResult === "player") {
        playerScore += 1;
    }
    else if(roundResult === "comp") {
        compScore += 1;
    }
}

function finalResult(playerScore, compScore) {

    if(playerScore == 5){
        alert("Congratulation you WON!");
        playerScore = 0;
        compScore = 0;
    }
    else if(compScore == 5){
        alert("Ohh you lose. Better luck next time");
        playerScore = 0;
        compScore = 0;
    }
    else {

    }
};

function printScores(playerScore, compScore) {
    let currentScore = document.createElement("h3");
    currentScore.id = "cScore"
    currentScore.textContent = playerScore + " : " + compScore;
    resultDisp.appendChild(currentScore);
}

const rockbtn = document.querySelector("#rockbtn")
rockbtn.addEventListener("click", ()=>{
    deleteLastScore();
    let playSelect = "rock";
    compPlay();
    let compSelect = compPlay();
    let roundResult = playRound(playSelect, compSelect);
    addScore(roundResult);
    printScores(playerScore, compScore);
    finalResult(playerScore, compScore);
    console.log(playerScore);
    console.log(compScore);
});

const paperbtn = document.querySelector("#paperbtn")
paperbtn.addEventListener("click", ()=>{
    deleteLastScore();
    let playSelect = "paper";
    compPlay();
    let compSelect = compPlay()
    let roundResult = playRound(playSelect, compSelect);
    addScore(roundResult);
    printScores(playerScore, compScore);
    finalResult(playerScore, compScore);
    console.log(playerScore);
    console.log(compScore);
});

const scissorbtn = document.querySelector("#scissorbtn")
scissorbtn.addEventListener("click", ()=>{
    deleteLastScore();
    let playSelect = "scissor";
    compPlay();
    let compSelect = compPlay();
    let roundResult = playRound(playSelect, compSelect);
    addScore(roundResult);
    printScores(playerScore, compScore)
    finalResult(playerScore, compScore)
    console.log(playerScore)
    console.log(compScore)
});



let playvscomp = document.createElement("h2");
playvscomp.textContent = `${playerName} VS Machine`;
resultDisp.insertBefore(playvscomp, resulth3);

let currentScore = document.createElement("h3");
currentScore.id = "cScore";
currentScore.textContent = playerScore + " : " + compScore;
resultDisp.appendChild(currentScore);

