
/*computer choice*/
function getComputerChoice (){
    
    let num = Math.floor (Math.random() * 3);

    if (num === 0){
        return "rock";
    }
    else if (num === 1){
         return "paper";
    }
    else{
        return "scissors"
    }
    }

/* User Choice */

function getHumanChoice(){
    
    return prompt ("Enter rock, paper, scissors");
}
    
let humanScore = 0;
let computerScore = 0;

    /* 1 round logic */

function playRound (humanChoice, computerChoice) {

    humanChoice = humanChoice.toLowerCase();
    
    if (humanChoice === computerChoice) {
        console.log ("It's tie, try again!")
    }
    else if  (computerChoice === "paper" && humanChoice === "rock" ||
             computerChoice === "scissors" && humanChoice === "paper" ||
             computerChoice === "rock" && humanChoice === "scissors")
    {
        console.log("Too bad, computer wins")
        computerScore ++;
    }
    else {
        console.log("Congrats ! You Win!!!")
       
        humanScore ++;
    }
    console.log(`Computer choose ${computerChoice}`)
    console.log(`You choose ${humanChoice}`);
    console.log(`Your Score ${humanScore} Computer Score ${computerScore}`)
    console.log ("")
}

/* Five rounds logic */

const humanSelection = getHumanChoice;
const computerSelection = getComputerChoice;

function playGame () {
    
    for (let i = 1; i <= 5; i++) {
    console.log(`Round ${i}:`)
    playRound (humanSelection(5), computerSelection(5))
    
    }
    if (humanScore > computerScore) {
        console.log("You are the Winner!!!")
    }
    else {
        console.log("Sorry, Computer Wins!")
    }
}

playGame ()