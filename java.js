
function getComputerChoice (){
    
    const num = Math.floor (Math.random() * 3);

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
console.log(getComputerChoice())