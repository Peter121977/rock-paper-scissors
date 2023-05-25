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

//start/control function
function startGame() {
  if (!game.playerHand) {
    return alert("choose hand!!!!");
  }
  game.aiHand = aiChoice();
}
  
  // set click listiner for everty hand
  hands.forEach((hand) => hand.addEventListener("click", handSelection));
  //start game
document.querySelector(".start").addEventListener("click", startGame);