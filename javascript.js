let gameBoard = document.querySelector("#game");

//loop to add 12 cards (divs) to the game

for (let i = 0; i < 12; i++) {
  let card = document.createElement("div");
  card.id = `card${i}`;
  card.setAttribute("class", "card");
  gameBoard.appendChild(card);
}
