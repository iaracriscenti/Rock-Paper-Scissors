//Declaration of variables
let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;

const text = document.querySelector('.text');
const text1 = document.querySelector('.text1');
const text2 = document.querySelector('.text2');
const pText2 = document.querySelector('.text2 #text2');
const myArray = ["Rock", "Paper", "Scissors"];

//This function returns a random value of myArray, which simulates the election of the computer.
function computerPlay(array) {
    return array[~~(Math.random()*array.length)];
};

//This function shows the result of a single round and keeps track of the score 
function playRound (playerSelection, computerSelection) {
    if (playerSelection !== computerSelection && ((playerSelection == "Rock" && computerSelection == "Paper") || (playerSelection == "Paper" && computerSelection == "Scissors") || (playerSelection == "Scissors" && computerSelection == "Rock"))) {
        computerScore += 1;
        text1.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if (playerSelection == computerSelection) {
            text1.textContent = `It's a tie!`;
            }
        else {
            playerScore ++;
            text1.textContent =	`You Win! ${playerSelection} beats ${computerSelection}`;
}       };

//This function invoques the playRound function and display the total result 
function game(playerSelection) {
    computerSelection = computerPlay(myArray);
    text.textContent = `The computer choose: ${computerSelection}`;
    playRound(playerSelection,computerSelection);
    if (playerScore == 5) {
        pText2.textContent = "You Won!";
        btnRestart();
        }
        else if (computerScore == 5){
            pText2.textContent = "You Lost!";
            btnRestart();
        }
        else {
            pText2.textContent = `Player: ${playerScore} VS Computer: ${computerScore}`;
        };   
};

//This function creates a button that calls the reset function when is clicked
function btnRestart () {
    const btn = document.createElement ('button');
    btn.id = "Restart";
    btn.textContent = "Restart";
    text2.appendChild(btn);
    btnConfig(true);
    btn.addEventListener('click', () => {
        resetGame();
})};

//Reset function
function resetGame () {
    playerScore = 0;
    computerScore = 0;
    text.textContent = "";
    text1.textContent = "";
    text2.textContent = "";
    pText2.textContent = "";
    text2.appendChild(pText2);
    btnConfig(false);
};

//This function disables/ables the main buttons 
function btnConfig (condition) {
    for (var i=0; i < 3; i++) {
        option = myArray[i];
        document.getElementById(option).disabled = condition;
    }
}