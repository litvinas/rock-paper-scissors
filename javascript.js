const buttons = document.querySelectorAll('button');
const para = document.querySelector('p.round');
const score = document.querySelector('p.score');
const container = document.querySelector('.container');
const allButtons = document.querySelector('.allButtons');

let computerScore = 0;
let playerScore = 0;

score.textContent = `Player: ${playerScore} --- Computer: ${computerScore}`;

const buttonPlayAgain = document.createElement('button');
buttonPlayAgain.textContent = 'Play again?';

buttonPlayAgain.addEventListener('click', () => location.reload());


buttons.forEach((button) => {
    button.addEventListener('click', () => {

        playerChoice = button.classList.value;
        roundResult = playRound(playerChoice, getComputerChoice())
        if (roundResult.includes('You lose')) {
            computerScore++;
        }
        if (roundResult.includes('You win')) {
            playerScore++;
        }
        para.textContent = roundResult;
        score.textContent = `Player: ${playerScore} --- Computer: ${computerScore}`;

        if (playerScore === 5 || computerScore === 5) {
            computerScore = 0;
            playerScore = 0;
            // container.setAttribute('style', 'pointer-events: none');
            container.removeChild(allButtons);
            container.appendChild(buttonPlayAgain);
    
            if (playerScore === 5) {
                para.textContent = "You win the game!";
            } else if (computerScore === 5) {
                para.textContent = "You lose the game!";
            }
        }
    });
})

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

