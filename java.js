
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

function getHumanChoice (){
    
    return prompt ("Enter rock, paper, scissors");

}
/* Players Score*/

let humanScore = 0;
let computerScore = 0;

/* 1 round logic */

function playRound (humanChoice, computerChoice) {

    humanChoice = humanChoice.toLowerCase();
    
    if (humanSelection === computerSelection) {
        console.log ("It's tie, try again!")
    }
    else if (computerSelection ===1 && humanSelection ===0 ||
             computerSelection ===2 && humanSelection ===1 ||
             computerSelection ===0 && humanSelection === 2)
    {
        console.log("Too bad, computer wins")
        computerScore ++;
    }
    else {
        console.log("Congrats ! You Win!!!")
        humanScore ++;
    }
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(`Computer choose ${computerSelection}`)
console.log(`You choose ${humanSelection}`)

playRound (humanSelection, computerSelection) 
console.log(`Your Score ${humanScore} Computer Score ${computerScore}`)