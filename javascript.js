let gameBoard = document.querySelector("#game");
const cardDeck = [
  {
    color: "green",
  },
  {
    color: "green",
  },
  {
    color: "yellow",
  },
  {
    color: "yellow",
  },
  {
    color: "blue",
  },
  {
    color: "blue",
  },
  {
    color: "red",
  },
  {
    color: "red",
  },
  {
    color: "purple",
  },
  {
    color: "purple",
  },
  {
    color: "orange",
  },
  {
    color: "orange",
  },
];

let randCard = cardDeck.sort(() => 0.5 - Math.random());

dealCards();

//Adds cards to board and calls chooseColour function to choose colour
function dealCards() {
  for (let i = 0; i <= 11; i++) {
    let card = document.createElement("div");
    card.id = `card${i}`;
    card.className = `${cardDeck[i].color}`;
    gameBoard.appendChild(card);
    var cover = document.createElement("div");
    cover.id = `cover${i}`;
    cover.className = "grey";
    cover.style.opacity = 1;
    cover.addEventListener("click", flipCardBack);
    card.appendChild(cover);
  }
}

function flipCardBack() {
  var thisVar = this;
  thisVar.style.opacity = "0";
  setInterval(function () {
    thisVar.style.opacity = "1";
  }, 2000);
}
