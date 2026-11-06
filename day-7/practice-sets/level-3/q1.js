//Build a number guessing game with hints (too high / too low), a counter, and a limit of 5 attempts.
let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let guess;
console.log("===== NUMBER GUESSING GAME =====");
console.log("Guess a number between 1 and 100");
console.log("You have only 5 attempts!");
while (attempts < 5) {
    guess = Number(prompt("Enter your guess"));
    attempts++;
    if (guess === secretNumber) {
        console.log("Congratulations! You guessed correctly.");
        console.log("Attempts taken: " + attempts);
        break;
    }
    else if (guess > secretNumber) {
        console.log("Too High! Try a smaller number.");
    }
    else {
        console.log("Too Low! Try a bigger number.");
    }
    console.log("Attempts left: " + (5 - attempts));
}
if (attempts === 5 && guess !== secretNumber) {
    console.log("Game Over!");
    console.log("The correct number was: " + secretNumber);
}