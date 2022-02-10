let gameBoard = document.querySelector("#game");
var cardTurnNumber = false;
var firstCard;
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
  if (cardTurnNumber === false) {
    cardTurnNumber = true;
    this.style.opacity = "0";
  } else {
    flipCardBack(this);
  }
}

function flipCardBack(passedThis) {
  passedThis.style.opacity = "0";
  setTimeout(function () {
    for (let i = 0; i < 12; i++) {
      document.querySelector('#cover' + i).style.opacity = 1;
  }
  }, 2000);
}

init();
