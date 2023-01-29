let userScore = 0;
let computerScore = 0;
const result_p = document.querySelector(".result > p");
const userScore_span = document.getElementById("userScore");
const computerScore_span = document.getElementById("computerScore");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");
const refreshButton = document.querySelector('.refreshButton')

function getComputerChoice () {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "p") return "Paper";
    if (letter === "r") return "Rock";
    return "Scissors";
}

function win (userChoice, computerChoice) {
    

    userScore++;
    userScore_span.textContent = userScore;
    computerScore_span.textContent = computerScore;
    result_p.textContent = `${convertToWord(userChoice)} eats ${convertToWord(computerChoice)} . You win!`;
    if (userScore === 5) {
        refreshButton.style.display = "block";
    }

}

function lose (userChoice, computerChoice) {
   

    computerScore++;
    userScore_span.textContent = userScore;
    computerScore_span.textContent = computerScore;
    result_p.textContent = `${convertToWord(computerChoice)} eats ${convertToWord(userChoice)} . You lose!`;

    if (computerScore == 5) {
        refreshButton.style.display = "block";
    }
}

function draw () {
    result_p.textContent = `It's a draw!`
    }



    function game (userChoice) {
        if (userScore === 5 || computerScore === 5) return;
    const computerChoice = getComputerChoice();
switch (userChoice + computerChoice) {
    case "rs":
    case "sp":
    case "pr":
        win(userChoice, computerChoice, userScore_span);
        break;
    case "sr":
    case "ps":
    case "rp":
        lose(userChoice, computerChoice, computerScore_span);
        break;
    case "rr":
    case "ss":
    case "pp":
        draw();
        break;
        
        default:
            gameOver();
}
}

function reloadPage(){
    window.location.reload();
 }



function main () {

rock_div.addEventListener('click', function () {
    game("r");    
});

paper_div.addEventListener('click', function () {
    game("p");
});

scissor_div.addEventListener('click', function () {
    game("s");
});
}

refreshButton.addEventListener('click', reloadPage)
main();