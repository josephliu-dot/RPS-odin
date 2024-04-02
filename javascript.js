function getComputerChoice() {
    if ((Math.random() * 1) <= (1/3)) {
    return 'paper';
    }
    else if ((Math.random() * 1) <= (2/3)) {
        return 'rock';
    }
    else if ((Math.random() * 1) <= (1)) {
        return 'scissors'
    }    
}


function playRound(playerChoice, computerChoice) {
    if (playerChoice == 'rock' && computerChoice == 'rock') {
        return 'Tie!';
    }
    else if (playerChoice == 'rock' && computerChoice == 'paper') {
        return 'You Lose!';
    }
    else if (playerChoice == 'rock' && computerChoice == 'scissors') {
        return 'You Win!';
    }
    else if (playerChoice == 'paper' && computerChoice == 'rock') {
        return 'Tie!';
    }
    else if (playerChoice == 'paper' && computerChoice == 'paper') {
        return 'You Lose!';
    }
    else if (playerChoice == 'paper' && computerChoice == 'scissors') {
        return 'You Win!';
    }
    else if (playerChoice == 'scissors' && computerChoice == 'rock') {
        return 'Tie!';
    }
    else if (playerChoice == 'scissors' && computerChoice == 'paper') {
        return 'You Lose!';
    }
    else if (playerChoice == 'scissors' && computerChoice == 'scissors') {
        return 'You Win!';
    }
}


function playGame() {
    let userPrompt = prompt("Please type Rock, Paper, or Scissors.", "Rock, Paper, or Scissors");
    let lowerCaseChoice = userPrompt.toLowerCase();
    return playRound(lowerCaseChoice, getComputerChoice());
    
}

console.log(playGame());
console.log(playGame());
console.log(playGame());
console.log(playGame());
console.log(playGame());
