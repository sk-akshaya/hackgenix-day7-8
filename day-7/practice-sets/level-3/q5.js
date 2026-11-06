/*Play rock-paper-scissors against the computer for 5 rounds using Math.random and show the final
score.*/
let userScore=0;
let computerScore=0;
let options=["rock","paper","scissors"];
for(let i=1;i<=5;i++){
    console.log("===== ROUND "+i+" =====");
    let userChoice=prompt("Enter rock, paper or scissors").toLowerCase();
    let computerChoice=options[Math.floor(Math.random()*3)];
    console.log("Your choice: "+userChoice);
    console.log("Computer choice: "+computerChoice);
    if(userChoice===computerChoice){
        console.log("It's a tie!");
    }
    else if(userChoice==="rock" && computerChoice==="scissors" || userChoice==="paper" && computerChoice==="rock" || userChoice==="scissors" && computerChoice==="paper"){
        console.log("You win this round!");
        userScore++;
    }
    else if(userChoice==="rock" || userChoice==="paper" || userChoice==="scissors"){
        console.log("Computer wins this round!");
        computerScore++;
    }
    else{
        console.log("Invalid choice!");
    }
}
console.log("===== FINAL SCORE =====");
console.log("Your score: "+userScore);
console.log("Computer score: "+computerScore);
if(userScore>computerScore){
    console.log("You won the game!");
}
else if(userScore<computerScore){
    console.log("Computer won the game!");
}
else{
    console.log("The game is a tie!");
}