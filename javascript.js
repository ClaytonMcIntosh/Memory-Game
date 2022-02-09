let gameBoard = document.querySelector("#game");
var cardTurnNumber = false;
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

function init() {
  dealCards();
}

function dealCards() {
  for (let i = 0; i <= 11; i++) {
    let card = document.createElement("div");
    card.id = `card${i}`;
    card.className = `${cardDeck[i].color}`;
    gameBoard.appendChild(card);
    addCoverCard(card, i);
  }
}

function addCoverCard(card, i) {
  var cover = document.createElement("div");
  cover.id = `cover${i}`;
  cover.className = "grey";
  cover.style.opacity = 1;
  cover.addEventListener("click", checkTurnNumber);
  card.appendChild(cover);
}

function checkTurnNumber() {
  console.log(cardTurnNumber);
  if (cardTurnNumber === false) {
    cardTurnNumber = true;
    this.style.opacity = "0";
  } else flipCardBack(this);
  //when you click on the first card, it stays up
  //when you click on the second card it checks if its the same as the first card
  //if cards are same, they go to bottom
  //if cards are not the same, they turn back
}

// function checkIfMatch() {

// }

function flipCardBack(passedThis) {
  console.log("hi");
  let passedThisVar = passedThis;
  passedThisVar.style.opacity = "0";
  setInterval(function () {
    passedThisVar.style.opacity = "1";
  }, 2000);
}
init();
