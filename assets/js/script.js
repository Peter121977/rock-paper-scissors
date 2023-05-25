// game result set to 0 will update after every game
const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0,
  };
  // object with live choise hand player and computer
  const game = {
    playerHand: "",
    aiHand: "",
  };
  // take all img and convert to array, array has more methods than NodeList
  const hands = [...document.querySelectorAll(".select img")];
  
  // first function which hand is selected
  function handSelection() {
    game.playerHand = this.dataset.option;
    // chect wich hand was clicked
    console.log(game.playerHand);
    hands.forEach((hand) => (hand.style.boxShadow = ""));
    this.style.boxShadow = "0 0 0 4px red";
  }
  // computer choice function
function aiChoice() {
  return hands[Math.floor(Math.random() * 3)].dataset.option;
}
// result function who won
function checkResult(player, ai) {
  // console.log(player, ai);
  if (player === ai) {
    return "draw";
  } else if (
    (player === "paper" && ai === "rock") ||
    (player === "rock" && ai === "scissors") ||
    (player === "scissors" && ai === "paper")
  ) {
    return "win";
  } else {
    return "loss";
  }
}

// publish result function
function publishResult(player, ai, result) {
  document.querySelector('[data-summary="your-choice"]').textContent = player;
  document.querySelector('[data-summary="ai-choice"]').textContent = ai;
  document.querySelector("p.numbers span").textContent = ++gameSummary.numbers;

  if (result === "win") {
    document.querySelector("p.wins span").textContent = ++gameSummary.wins;
    document.querySelector('[data-summary="who-win"]').textContent =
      "You WIN!!!!";
    document.querySelector('[data-summary="who-win"]').style.color = "green";
  } else if (result === "loss") {
    document.querySelector("p.losses span").textContent = ++gameSummary.losses;
    document.querySelector('[data-summary="who-win"]').textContent =
      "Computer WIN :(";
    document.querySelector('[data-summary="who-win"]').style.color = "red";
  } else {
    document.querySelector("p.draws span").textContent = ++gameSummary.draws;
    document.querySelector('[data-summary="who-win"]').textContent = "Draw :\\";
    document.querySelector('[data-summary="who-win"]').style.color = "gray";
  }
}

//start/control function
function startGame() {
  if (!game.playerHand) {
    return alert("choose hand!!!!");
  }
  game.aiHand = aiChoice();
  const gameResult = checkResult(game.playerHand, game.aiHand);
  console.log(gameResult);
  publishResult(game.playerHand, game.aiHand, gameResult);
}
  
  // set click listiner for everty hand
  hands.forEach((hand) => hand.addEventListener("click", handSelection));
  //start game
document.querySelector(".start").addEventListener("click", startGame);