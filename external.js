const message = document.querySelector('.message');
let computerScore = 0;
let playerScore = 0;


function computerPlay () {
    let computerChoice =  Math.floor(Math.random() * 3);
    let result;
    if (computerChoice == 0) {
        result = 'rock';
    } else if (computerChoice == 1) {
        result = 'paper';
    } else {
        result = 'scissor';
    } return result;
    }

    function playRound (playerChoice, computerChoice) {
        if ((playerChoice === 'rock' && computerChoice === 'rock') ||
        (playerChoice === 'paper' && computerChoice === 'paper') ||
        (playerChoice === 'scissor' && computerChoice === 'scissor')) {
            message.textContent = `It's a draw! Computer score: ${computerScore} PlayerScore: ${playerScore}`;
        } else if ((playerChoice === 'rock' && computerChoice === 'paper') ||
            (playerChoice === 'paper' && computerChoice === 'scissor') ||
            (playerChoice === 'scissor' && computerChoice === 'rock')) {
                message.textContent = `You lose! Computer score: ${computerScore} PlayerScore: ${playerScore}`;
                computerScore++;
        } else {
            message.textContent = `You win! Computer score: ${computerScore} PlayerScore: ${playerScore}`;
            playerScore++;
        }
    }

    function play (playerChoice) {
        let computerChoice;
        for (let i = 0; i < 5; i++){
        playerChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();
        computerChoice = computerPlay();
        playRound(playerChoice, computerChoice);
    }
    }

    play();