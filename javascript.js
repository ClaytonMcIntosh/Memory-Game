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
    console.log("CTN end " + cardTurnNumber);
    
  }
}

function flipCardBack(passedThis) {
  passedThis.style.opacity = "0";
  setTimeout(function () {
    cover0.style.opacity = "1";
    cover1.style.opacity = "1";
    cover2.style.opacity = "1";
    cover3.style.opacity = "1";
    cover4.style.opacity = "1";
    cover5.style.opacity = "1";
    cover6.style.opacity = "1";
    cover7.style.opacity = "1";
    cover8.style.opacity = "1";
    cover9.style.opacity = "1";
    cover10.style.opacity = "1";
    cover11.style.opacity = "1";
    cardTurnNumber = false;
    console.log("END " + cardTurnNumber);
  }, 2000);
}

init();
