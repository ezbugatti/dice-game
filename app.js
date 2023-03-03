var DicePhoto = document.querySelector(".dice");
var activePlayer;
var score;
var roundScore;
var IsNewGame;
restart();
function restart() {
  activePlayer = 0;
  score = [0, 0];
  roundScore = 0;
  IsNewGame = true;
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  DicePhoto.style.display = "none";
}

document.querySelector(".btn-roll").addEventListener("click", function () {
  if (IsNewGame) {
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    DicePhoto.style.display = "block";
    DicePhoto.src = "dice-" + diceNumber + ".png";

    if (diceNumber !== 1) {
      roundScore = roundScore + diceNumber;
      document.getElementById("current-" + activePlayer).textContent =
        roundScore;
    } else {
      NewPlayerNext();
    }
  } else {
    alert("Togloom duuslaa");
  }
});

document.querySelector(".btn-hold").addEventListener("click", function () {
  if (IsNewGame) {
    score[activePlayer] = score[activePlayer] + roundScore;
    document.getElementById("score-" + activePlayer).textContent =
      score[activePlayer];
    if (score[activePlayer] >= 50) {
      document.getElementById("name-" + activePlayer).textContent = "Winner";
      IsNewGame = false;
    } else {
      NewPlayerNext();
    }
  } else {
    alert("Togloom duuslaa");
  }
});

function NewPlayerNext() {
  roundScore = 0;
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  DicePhoto.style.display = "none";
}

document.querySelector(".btn-new").addEventListener("click", restart);
