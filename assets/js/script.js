
  
  // first function which hand is selected
  function handSelection() {
    game.playerHand = this.dataset.option;
    // chect wich hand was clicked
    console.log(game.playerHand);
    hands.forEach((hand) => (hand.style.boxShadow = ""));
    this.style.boxShadow = "0 0 0 4px red";
  }
  
  // set click listiner for everty hand
  hands.forEach((hand) => hand.addEventListener("click", handSelection));