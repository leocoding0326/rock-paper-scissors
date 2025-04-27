
/*computer choice*/
function getComputerChoice (){
    
    const num = Math.floor (Math.random() * 3);

    if (num === 0){
        return "pc choose rock";
    }
    else if (num === 1){
         return "pc choose paper";
    }
    else{
        return "pc choose scissors"
    }
    }
console.log(getComputerChoice())

/* User Choice */

function getHumanChoice (){
    
    let choice =prompt ("Enter 1 for rock, 2 for paper, 3 for scissors");
    
    choice=Number(choice)

    if(choice === 1) {
        console.log("rock")
    }
    else if (choice === 2) {
        console.log("paper")
    }
    else if (choice === 3) {
        console.log ("scissors")
    }
    else {
        "invalid choice"
    }
}
console.log(getHumanChoice())

