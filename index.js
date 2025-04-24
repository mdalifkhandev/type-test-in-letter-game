// Get references to DOM elements
const letter = document.getElementById("letter");
const time = document.getElementById("time");
const score = document.getElementById("score");
const button = document.getElementById("button");
const cancel=document.getElementById("cancel");

// Initialize variables
let currentLetter = ''; 
let timeLimit = 30;      
let timeEnd;            
let timeLeft;           

// Function to generate a random letter
function letterGenerator() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return letters[Math.floor(Math.random() * letters.length)];
}

// Function to generate and display a new letter
function generateNewLetter() {
    currentLetter = letterGenerator(); // Generate a random letter
    letter.innerText = currentLetter; // Display the letter in the DOM
}

// Function to check if the pressed key matches the current letter
function checkLetter(e) {
    if (e.key.toUpperCase() === currentLetter) { // Check if the key matches
        score.innerText++; // Increment the score
        generateNewLetter(); // Generate a new letter
    }
}

function endGame() {
    clearInterval(timeEnd);
    document.removeEventListener("keydown", checkLetter);
    alert("Game Cancelled");
    
    cancel.style.display='none'; // Hide the cancel button
    button.style.display='block'; // Show the button again
  
    // Optional: Reset everything visually
    time.innerText = timeLimit;
    score.innerText = 0;
    letter.innerText = "?";
  }

// Function to start the game
function startGame() {
    button.style.display = 'none'; // Hide the button
    cancel.style.display='block'; // Show the cancel button
    timeLeft = timeLimit; // Reset the time left
    time.innerText = timeLeft; // Display the initial time
    score.innerText = 0; // Reset the score
    generateNewLetter(); // Generate the first letter

    // Remove any existing keydown event listener to avoid duplicates
    document.removeEventListener('keydown', checkLetter);
    // Add a new keydown event listener
    document.addEventListener('keydown', checkLetter);

    // Clear any existing interval timer
    clearInterval(timeEnd);

    // Start a new interval timer to count down the time
    timeEnd = setInterval(() => {
        timeLeft--; // Decrease the time left
        time.innerText = timeLeft; // Update the time in the DOM

        if (timeLeft <= 0) { // Check if time has run out
            alert("Game Over"); // Show game over alert
            clearInterval(timeEnd); // Stop the timer
            document.removeEventListener('keydown', checkLetter); // Remove the event listener
            button.innerText='New Game'
            button.style.display='block'; // Show the button again
        }
    }, 1000); // Run the interval every 1 second
}

