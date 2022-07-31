const buttons = document.querySelectorAll('button');
const para = document.querySelector('p.round');
const score = document.querySelector('p.score');
const container = document.querySelector('.container');
const allButtons = document.querySelector('.allButtons');
const h2 = document.querySelector('h2');

let computerScore = 0;
let playerScore = 0;

score.textContent = `${playerScore} : ${computerScore}`;

const buttonPlayAgain = document.createElement('button');
buttonPlayAgain.textContent = 'Play again?';
buttonPlayAgain.classList.add('play-again-button');

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
        score.textContent = `${playerScore} : ${computerScore}`;

        if (playerScore === 5) {
            para.textContent = "You win the game!";
            container.removeChild(allButtons);
            container.removeChild(h2);
            container.appendChild(buttonPlayAgain);
    
        } else if (computerScore === 5) {
            para.textContent = "You lose the game!";
            container.removeChild(allButtons);
            container.removeChild(h2);
            container.appendChild(buttonPlayAgain);
        }
        button.classList.add('clicked');
        setTimeout(() => button.classList.remove('clicked'), 100);
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
        return `You: 🧻. PC: 🪨 : You lose.`;
    } else if (playerChoice === 'Rock' && computerChoice === 'Rock') {
        return `You: 🪨. PC: 🪨 : It's a tie.`;
    } else if (playerChoice === 'Rock' && computerChoice === 'Scissors') {
        return `You: 🪨. PC: ✂️ : You win.`;
    } else if (playerChoice === 'Paper' && computerChoice === 'Rock') {
        return `You: 🧻. PC: 🪨 : You win.`;
    } else if (playerChoice === 'Paper' && computerChoice === 'Paper') {
        return `You: 🧻. PC: 🧻 : It's a tie.`;
    } else if (playerChoice === 'Paper' && computerChoice === 'Scissors') {
        return `You: 🧻. PC: ✂️ : You lose.`;
    } else if (playerChoice === 'Scissors' && computerChoice === 'Rock') {
        return `You: ✂️. PC: 🪨 : You lose.`;
    } else if (playerChoice === 'Scissors' && computerChoice === 'Paper') {
        return `You: ✂️. PC: 🧻 : You win.`;
    } else if (playerChoice === 'Scissors' && computerChoice === 'Scissors') {
        return `You: ✂️. PC: ✂️ : It's a tie.`
    }
}

