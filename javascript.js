function getComputerChoice() {
    let num = Math.floor(Math.random()*3);
    switch(num){
        case 0: 
            return "Rock"; 
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
    }
}

function playRound(playerChoice, computerChoice) {

    playerChoice = playerChoice[0].toUpperCase() + playerChoice.slice(1).toLowerCase();

    if (playerChoice === 'Rock' && computerChoice === 'Paper') {
        return `You lose, paper beats rock!`;
    } else if (playerChoice === 'Rock' && computerChoice === 'Rock') {
        return `It's a tie.`;
    } else if (playerChoice === 'Rock' && computerChoice === 'Scissors') {
        return `You win. Rock beats scissors.`;
    } else if (playerChoice === 'Paper' && computerChoice === 'Rock') {
        return `You win, paper beats rock!`;
    } else if (playerChoice === 'Paper' && computerChoice === 'Paper') {
        return `It's a tie.`;
    } else if (playerChoice === 'Paper' && computerChoice === 'Scissors') {
        return `You lose. scissors beat paper.`;
    } else if (playerChoice === 'Scissors' && computerChoice === 'Rock') {
        return `You lose. Rock beats scissors.`;
    } else if (playerChoice === 'Scissors' && computerChoice === 'Paper') {
        return `You win. Scissors beat Paper.`;
    } else if (playerChoice === 'Scissors' && computerChoice === 'Scissors') {
        return `It's a tie.`
    }
}