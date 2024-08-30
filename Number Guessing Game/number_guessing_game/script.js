let randomNumber;
let attempts;
const maxAttempts = 5;

function startGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById("feedback").textContent = '';
    document.getElementById("attempts").textContent = attempts;
    document.getElementById("chances").textContent = `You have ${maxAttempts} chances`;
    document.getElementById("userGuess").value = '';
    document.getElementById("checkButton").disabled = false;
    document.getElementById("userGuess").disabled = false;
}

function checkGuess() {
    const userGuess = parseInt(document.getElementById("userGuess").value);
    
    // Validation: Check if the input is a number and within the range
    if (isNaN(userGuess)) {
        document.getElementById("feedback").textContent = "Please enter a number.";
        return;
    }
    if (userGuess < 1 || userGuess > 100) {
        document.getElementById("feedback").textContent = "Please enter a number between 1 and 100.";
        return;
    }

    attempts++;
    document.getElementById("attempts").textContent = attempts;

    if (userGuess === randomNumber) {
        document.getElementById("feedback").textContent = `Congratulations! You guessed the correct number in ${attempts} attempts.`;
        document.getElementById("checkButton").disabled = true;
        document.getElementById("userGuess").disabled = true;
    } else if (attempts >= maxAttempts) {
        document.getElementById("feedback").textContent = `Sorry, you've run out of chances. The number was ${randomNumber}.`;
        document.getElementById("checkButton").disabled = true;
        document.getElementById("userGuess").disabled = true;
    } else if (userGuess < randomNumber) {
        document.getElementById("feedback").textContent = "Your number is too low.";
    } else if (userGuess > randomNumber) {
        document.getElementById("feedback").textContent = "Your number is too high.";
    }

    document.getElementById("chances").textContent = `You have ${maxAttempts - attempts} chances left.`;
}

document.getElementById("checkButton").addEventListener("click", checkGuess);
document.getElementById("restartButton").addEventListener("click", startGame);

startGame();
