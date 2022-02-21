let gameBoard = document.querySelector("#game");
let wonCardsSpace = document.querySelector("#removedcards");
var cardTurnNumber = false;
var firstCard;
var firstCardSelected;
var secondCardSelected;
var cardArray = [];
var wonCards = [];
var wonCardsArray = [];
let cardsWon = 0;
var seconds = 30;
var timer;
let countDown;
var secondsDisplay = document.getElementById("secondsDisplay");
let firstCardHolder;
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
    card.hex = `${cardDeck[i].hex}`;
    card.className = "grey";
    gameBoard.appendChild(card);
    card.addEventListener("click", checkTurnNumber);
    cardArray.push(card);
  }
}

function checkTurnNumber() {
  if (cardTurnNumber === false) {
    firstCardSelected = this.hex;
    firstCardHolder = this;
    cardTurnNumber = true;
    this.style.backgroundColor = this.hex;
    this.style.pointerEvents = "none";
  } else {
    secondCardSelected = this.hex;
    var secondthis = this;
    if (firstCardSelected === secondCardSelected) {
      flashBackground();
      removeCards(secondthis);
      addToWonCards();
    }
    flipCardBack(this);
    cardTurnNumber = false;
  }
}

function dealWinningCardsHolder() {
  for (let i = 0; i <= 5; i++) {
    let wonCard = document.createElement("div");
    wonCard.id = `wonCard${i}`;
    wonCard.className = "removedCards";
    wonCard.style = "black";
    wonCardsSpace.appendChild(wonCard);
    wonCardsArray.push(wonCard);
  }
}

function addToWonCards() {
  wonCards.push(firstCardSelected);
  for (i = 0; i < wonCards.length; i++) {
    wonCardsArray[i].style.backgroundColor = wonCards[i];
  }
}

function flipCardBack(secondcardClicked) {
  secondcardClicked.style.backgroundColor = secondcardClicked.hex;
  for (i = 0; i < 12; i++) {
    cardArray[i].style.pointerEvents = "none";
  }
  setTimeout(function () {
    for (let i = 0; i < 12; i++) {
      document.querySelector("#card" + i).style.backgroundColor = "grey";
      if (cardArray[i].style.opacity == "0") {
      console.log("equal to 1")
      cardArray[i].style.pointerEvents = "none";
    }
      else {
        console.log("NOT! equal to 1")
        cardArray[i].style.pointerEvents = "auto";
      }
    }
   }, 700);
}

function flashBackground() {
  document.getElementById("game").style.backgroundColor = firstCardSelected;
  setTimeout(() => {
    document.getElementById("game").style.backgroundColor = "white";
  }, 600);
}

function removeCards(secondPassedCard) {
  cardsWon++;
  firstCardHolder.style.opacity = "0";
  secondPassedCard.style.opacity = "0";
  if (cardsWon === 6) {
    gameWon();
  }
}

function gameWon() {
  for (i = 0; i < 12; i++) {
    clearInterval(countDown);
    cardArray[i].style.display = "none";
    document.getElementById("gameWon").style.display = "block";
  }
}

function gameLost() {
  for (i = 0; i < 12; i++) {
    cardArray[i].style.display = "none";
    document.getElementById("gameLost").style.display = "block";
  }
}

init();
