let gameBoard = document.querySelector("#game");
var cardTurnNumber = false;
var firstCard;
var firstCardSelected;
var secondCardSelected;
var coverArray = [];
var cardArray = [];
let cardsWon = 0;
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
    cardArray.push(card);
  }
}

console.log();

function addCoverCard(card, i) {
  var cover = document.createElement("div");
  cover.id = `cover${i}`;
  cover.className = "grey";
  cover.style.opacity = 1;
  cover.addEventListener("click", checkTurnNumber);
  card.appendChild(cover);
  coverArray.push(cover);
}

function checkTurnNumber() {
  if (cardTurnNumber === false) {
    switch (this.id) {
      case "cover0":
        firstCardSelected = 0;
        break;
      case "cover1":
        firstCardSelected = 1;
        break;
      case "cover2":
        firstCardSelected = 2;
        break;
      case "cover3":
        firstCardSelected = 3;
        break;
      case "cover4":
        firstCardSelected = 4;
        break;
      case "cover5":
        firstCardSelected = 5;
        break;
      case "cover6":
        firstCardSelected = 6;
        break;
      case "cover7":
        firstCardSelected = 7;
        break;
      case "cover8":
        firstCardSelected = 8;
        break;
      case "cover9":
        firstCardSelected = 9;
        break;
      case "cover10":
        firstCardSelected = 10;
        break;
      case "cover11":
        firstCardSelected = 11;
        break;
      default:
        console.log("ERR");
        break;
    }
    cardTurnNumber = true;
    this.style.opacity = "0";
  } else {
    switch (this.id) {
      case "cover0":
        secondCardSelected = 0;
        break;
      case "cover1":
        secondCardSelected = 1;
        break;
      case "cover2":
        secondCardSelected = 2;
        break;
      case "cover3":
        secondCardSelected = 3;
        break;
      case "cover4":
        secondCardSelected = 4;
        break;
      case "cover5":
        secondCardSelected = 5;
        break;
      case "cover6":
        secondCardSelected = 6;
        break;
      case "cover7":
        secondCardSelected = 7;
        break;
      case "cover8":
        secondCardSelected = 8;
        break;
      case "cover9":
        secondCardSelected = 9;
        break;
      case "cover10":
        secondCardSelected = 10;
        break;
      case "cover11":
        secondCardSelected = 11;
        break;
      default:
        console.log("ERR");
        break;
    }
    if (
      cardDeck[firstCardSelected].color === cardDeck[secondCardSelected].color
    ) {
      console.log("Match");
      removeCards();
      flashBackground();
    }
    flipCardBack(this);
    cardTurnNumber = false;
  }
}

function flipCardBack(passedThis) {
  passedThis.style.opacity = "0";
  setTimeout(function () {
    for (let i = 0; i < 12; i++) {
      document.querySelector("#cover" + i).style.opacity = 1;
    }
  }, 2000);
}

function flashBackground() {
  document.getElementById("game").style.backgroundColor =
    cardDeck[firstCardSelected].color;
  setTimeout(() => {
    document.getElementById("game").style.backgroundColor = "white";
  }, 1000);
}

function removeCards() {
  cardsWon++;
  console.log(cardsWon);
  console.log(firstCardSelected + " and " + secondCardSelected);
  coverArray[firstCardSelected].style.backgroundColor = "white";
  coverArray[secondCardSelected].style.backgroundColor = "white";
  if (cardsWon === 6) {
    console.log("Game won!");
  }
}

init();
