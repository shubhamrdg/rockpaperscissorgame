let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const genCompChoice = () =>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}
const drawGame = () =>{
    console.log("Game was draw.");
    msg.innerText = "Game was Draw."
}
const showWinner = (userWin) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Win!");
        msg.innerText = "You Win!";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You Lose.");
        msg.innerText = "You Lose.";
    }
}
const playGame =(userChoice) =>{
    console.log("user choice =", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice =" , compChoice);
    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice ==="rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true; 
        }else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
}
choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});