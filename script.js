// Global Variables and Caching Dom
const playerScore = document.getElementById('playerScore');
const computerScore = document.getElementById('computerScore');
const round = document.getElementById('round');
const result = document.getElementById('result');
const computerPick = document.getElementById('computerPick');
const playerPick = document.getElementById('playerPick');

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors')

const options = ['rock','paper','scissors'];
var player = 0;
var computer = 0;
var roundNumber = 1; 

  function playerSelection() {
    rock.addEventListener('click', () => {
      playerPick.textContent = 'Player picked rock';
      playRound('rock');
    });
    paper.addEventListener('click', () => {
      playerPick.textContent = 'Player picked paper';
      playRound('paper');
    });
    scissors.addEventListener('click', () => {
      playerPick.textContent = 'Player picked scissors';
      playRound('scissors');
    });
  }
  playerSelection();

  // Each round will compare to computer's random selection
  function playRound(playerSelection) {
    const computerSelection = options[Math.floor(Math.random() * options.length)];
    computerPick.textContent = `Computer picked ${computerSelection}`;

      if (playerSelection === 'rock' && computerSelection === 'scissors') {
          player++;
          result.textContent = "You win! Rock beats Scissors!"

      } else if (playerSelection === 'rock' && computerSelection === 'paper') {
          computer++; 
          result.textContent = "You lose, Paper beats Rock!"

      } else if (playerSelection === 'paper' && computerSelection ==='rock') {
          player++;
          result.textContent = "You win! Paper beats rock!"

      } else if (playerSelection == 'paper' && computerSelection === 'scissors') {
          computer++;
          result.textContent = "You lose, Scissors beats paper!"

      } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
          player++;
          result.textContent = "You win! Scissors beats paper!"

      } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
          computer++;
          result.textContent = "You lose, Rock beats scissors!"
      } else {
          result.textContent = "It's a tie!"
        }

      playerScore.textContent = `Player Score: ${player}`;
      computerScore.textContent = `Computer Score: ${computer}`;
      roundNumber++;
      round.textContent = `Round: ${roundNumber}`;
  
      // Calculate winner
      if (roundNumber > 5) {
        if (player > computer) {
          round.textContent = `You win!!! You beat the computer ${player} to ${computer}!!`;
        } else if (player < computer) {
          round.textContent = `Sorry, you lose :( Computer beat you ${computer} to ${player}.`;
        } else {
          round.textContent = `The game is a tie!! Final score is ${player} to ${computer}`
        }
        restart();
      }
    }

    function restart() {
      const button = document.createElement('BUTTON');
      button.textContent = 'New Game';
      document.body.appendChild(button);
      button.addEventListener('click', () => {
        location.reload();
      })
    }