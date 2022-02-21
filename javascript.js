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
let banana;
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
  // dealWinningCardsHolder();
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
    card.hex = `${cardDeck[i].color}`
    card.className = "grey";
    gameBoard.appendChild(card);
    card.addEventListener("click", checkTurnNumber)
    // addCoverCard(card, i);
    cardArray.push(card);
  }
}

function checkTurnNumber() {
  if (cardTurnNumber === false) {
    firstCardSelected = this.hex
    console.log(firstCardSelected)
    banana = this;
    cardTurnNumber = true;
    this.style.backgroundColor = this.hex;
    console.log("Yo")
    console.log(banana)
    console.log("Yo")
    // this.style.pointerEvents = "none";
  } else {
    secondCardSelected = this.hex
    var secondthis = this;
    console.log("secondThis")
    console.log(secondthis)
    console.log("secondThis")
    if (
      firstCardSelected === secondCardSelected
    ) {
      console.log("match")
      removeCards(banana, secondthis);
      // flashBackground();
      // addToWonCards();
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
    wonCardsSpace.appendChild(wonCard);
    wonCardsArray.push(wonCard);
  }
}



function addToWonCards() {
  wonCards.push(cardDeck[firstCardSelected].hex);

  for (i = 0; i < wonCards.length; i++) {
    wonCardsArray[i].style.backgroundColor = wonCards[i];
  }
}

function flipCardBack(passedThis) {
  passedThis.style.backgroundColor = passedThis.hex;
  for (i = 0; i < 12; i++) {
    // coverArray[i].style.pointerEvents = "none";
  }
  setTimeout(function () {
    for (let i = 0; i < 12; i++) {
      // document.querySelector("#cover" + i).style.opacity = 1;
      // if (coverArray[i].className === "grey") {
      // //   coverArray[i].style.pointerEvents = "auto";
      // }
    }
  }, 500);
}

// function flashBackground() {
//   document.getElementById("game").style.backgroundColor =
//     cardDeck[firstCardSelected].hex;
//   setTimeout(() => {
//     document.getElementById("game").style.backgroundColor = "white";
//   }, 600);
// }

function removeCards(passedCard, secondPassedCard) {
  cardsWon++;

  let cardo = passedCard

  console.log("Scab")
  console.log(passedCard)
  console.log(secondPassedCard)
  console.log("Scab")
  
  banana.style.opacity = "0";
  secondPassedCard.style.opacity = "0";

  console.log("aert")
  console.log(passedCard)
  console.log(cardo)
  console.log("aert")
  
  // cardArray[firstCardSelected].style.color = "none";
  // cardArray[firstCardSelected].style.pointerEvents = "none";
  // // cardArray[firstCardSelected].style.opacity = "0";
  // cardArray[secondCardSelected].style.display = "none";
  // cardArray[secondCardSelected].style.pointerEvents = "none";
  // // cardArray[secondCardSelected].style.opacity = "0";
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
