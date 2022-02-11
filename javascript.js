let gameBoard = document.querySelector("#game");
let wonCardsSpace = document.querySelector("#removedcards");
var cardTurnNumber = false;
var firstCard;
var firstCardSelected;
var secondCardSelected;
var coverArray = [];
var cardArray = [];
var wonCards = [];
var wonCardsArray = [];
let cardsWon = 0;
var seconds = 30;
var timer;
let countDown;
var secondsDisplay = document.getElementById("secondsDisplay");
const cardDeck = [
  {
    color: "green",
    hex: "#65ac70",
  },
  {
    color: "green",
    hex: "#65ac70",
  },
  {
    color: "yellow",
    hex: "#f9ee75",
  },
  {
    color: "yellow",
    hex: "#f9ee75",
  },
  {
    color: "blue",
    hex: "#5ab0c7",
  },
  {
    color: "blue",
    hex: "#5ab0c7",
  },
  {
    color: "red",
    hex: "#ee5f5d",
  },
  {
    color: "red",
    hex: "#ee5f5d",
  },
  {
    color: "purple",
    hex: "#88579d",
  },
  {
    color: "purple",
    hex: "#88579d",
  },
  {
    color: "orange",
    hex: "#efb323",
  },
  {
    color: "orange",
    hex: "#efb323",
  },
];

let randCard = cardDeck.sort(() => 0.5 - Math.random());

function init() {
  dealCards();
  dealWinningCardsHolder();
  startTimer();
}

function startTimer() {
  countDown = setInterval(timer, 1000);
}

function timer() {
  seconds--;
  secondsDisplay.textContent = seconds;
  if (seconds === 0) {
    clearInterval(countDown);
    gameLost();
  }
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

function dealWinningCardsHolder() {
  for (let i = 0; i <= 5; i++) {
    let wonCard = document.createElement("div");
    wonCard.id = `wonCard${i}`;
    wonCard.className = "removedCards";
    wonCardsSpace.appendChild(wonCard);
    wonCardsArray.push(wonCard);
  }
}

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
    }
    cardTurnNumber = true;
    this.style.opacity = "0";
    this.style.pointerEvents = "none";
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
    }
    if (
      cardDeck[firstCardSelected].color === cardDeck[secondCardSelected].color
    ) {
      removeCards();
      flashBackground();
      addToWonCards();
    }
    flipCardBack(this);
    cardTurnNumber = false;
  }
}

function addToWonCards() {
  wonCards.push(cardDeck[firstCardSelected].hex);

  for (i = 0; i < wonCards.length; i++) {
    wonCardsArray[i].style.backgroundColor = wonCards[i];
  }
}

function flipCardBack(passedThis) {
  passedThis.style.opacity = "0";
  for (i = 0; i < 12; i++) {
    coverArray[i].style.pointerEvents = "none";
  }
  setTimeout(function () {
    for (let i = 0; i < 12; i++) {
      document.querySelector("#cover" + i).style.opacity = 1;
      if (coverArray[i].className === "grey") {
        coverArray[i].style.pointerEvents = "auto";
      }
    }
  }, 500);
}

function flashBackground() {
  document.getElementById("game").style.backgroundColor =
    cardDeck[firstCardSelected].hex;
  setTimeout(() => {
    document.getElementById("game").style.backgroundColor = "white";
  }, 600);
}

function removeCards() {
  cardsWon++;
  coverArray[firstCardSelected].style.display = "none";
  coverArray[firstCardSelected].style.pointerEvents = "none";
  cardArray[firstCardSelected].style.opacity = "0";
  coverArray[secondCardSelected].style.display = "none";
  coverArray[secondCardSelected].style.pointerEvents = "none";
  cardArray[secondCardSelected].style.opacity = "0";
  if (cardsWon === 6) {
    gameWon();
  }
}

function gameWon() {
  for (i = 0; i < 12; i++) {
    clearInterval(countDown);
    coverArray[i].style.display = "none";
    cardArray[i].style.display = "none";

    document.getElementById("gameWon").style.display = "block";
  }
}

function gameLost() {
  for (i = 0; i < 12; i++) {
    coverArray[i].style.display = "none";
    cardArray[i].style.display = "none";
    document.getElementById("gameLost").style.display = "block";
  }
}

init();
