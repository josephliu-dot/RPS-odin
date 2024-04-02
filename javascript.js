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


console.log(getComputerChoice());
