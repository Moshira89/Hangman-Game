const WORDS = ["apple", "banana", "grape", "orange", "melon"];
const MAX_ATTEMPTS = 6;

const secretWord = WORDS[Math.floor(Math.random() * WORDS.length)];
const guessedLetters = [];

let attemptsRemaining = MAX_ATTEMPTS;
let currentWordDisplay = Array(secretWord.length).fill("_");

while (attemptsRemaining > 0 && currentWordDisplay.includes("_")) {
  alert(`Word: ${currentWordDisplay.join(" ")}\nAttempts remaining: ${attemptsRemaining}\nGuessed letters: ${guessedLetters.join(", ")}`);

  const guess = prompt("Enter a letter:");
  
  if (guess === null) {
    alert("Game cancelled.");
    break;
  }
  
  const lowerCaseGuess = guess.toLowerCase();

  if (!lowerCaseGuess || lowerCaseGuess.length !== 1 || !/^[a-z]$/.test(lowerCaseGuess)) {
    alert("Invalid input. Please enter a single letter.");
    continue;
  }

  if (guessedLetters.includes(lowerCaseGuess)) {
    alert(`You already guessed "${lowerCaseGuess}". Try a different letter.`);
    continue;
  }

  guessedLetters.push(lowerCaseGuess);

  if (secretWord.includes(lowerCaseGuess)) {
    for (let i = 0; i < secretWord.length; i++) {
      if (secretWord[i] === lowerCaseGuess) {
        currentWordDisplay[i] = lowerCaseGuess;
      }
    }
  } else {
    attemptsRemaining--;
  }
}

if (!currentWordDisplay.includes("_")) {
  alert(`Congratulations! You guessed the word: ${secretWord}`);
} else if (attemptsRemaining === 0) {
  alert(`Game over! The word was: ${secretWord}`);
}


