let gameBoard = document.querySelector("#game");
const deck = {
  green: 2,
  yellow: 2,
  blue: 2,
  red: 2,
  purple: 2,
  orange: 2,
};

function init() {
  addCards();
}

//Adds cards to board and calls chooseColour function to choose colour
function addCards() {
  for (let i = 0; i < 12; i++) {
    let card = document.createElement("div");
    card.id = `card${i}`;

    card.setAttribute("class", chooseColor());

    gameBoard.appendChild(card);
    console.log(deck);
  }
}

//Randomly chooses a colour
function chooseColor() {
  let rand = Math.floor(Math.random() * 6) + 1;
  console.log(rand);
  if (rand == 1 && deck.green > 0) {
    deck.green--;
    x = "green";
    console.log("green=" + deck.green);
    return x;
  } else if (rand == 2 && deck.yellow > 0) {
    deck.yellow--;
    x = "yellow";
    console.log("yellow=" + deck.yellow);
    return x;
  } else if (rand == 3 && deck.blue > 0) {
    deck.blue--;
    x = "blue";
    console.log("blue=" + deck.blue);
    return x;
  } else if (rand == 4 && deck.red > 0) {
    deck.red--;
    x = "red";
    console.log("red=" + deck.red);
    return x;
  } else if (rand == 5 && deck.purple > 0) {
    deck.purple--;
    x = "purple";
    console.log("purple=" + deck.purple);
    return x;
  } else if (rand == 6 && deck.orange > 0) {
    deck.orange--;
    x = "orange";
    console.log("orange=" + deck.orange);
    return x;
  } else {
    x = "card";
    console.log("goal!");
    return x;
  }
}

init();

// const cardDeck = [
//   {
//     cardNumber: 1,
//     cardColor: "green",
//   },
//   {
//     cardNumber: 2,
//     cardColor: "green",
//   },
//   {
//     cardNumber: 3,
//     cardColor: "yellow",
//   },
//   {
//     cardNumber: 4,
//     cardColor: "yellow",
//   },
//   {
//     cardNumber: 5,
//     cardColor: "blue",
//   },
//   {
//     cardNumber: 6,
//     cardColor: "blue",
//   },
//   {
//     cardNumber: 7,
//     cardColor: "red",
//   },
//   {
//     cardNumber: 8,
//     cardColor: "red",
//   },
//   {
//     cardNumber: 9,
//     cardColor: "purple",
//   },
//   {
//     cardNumber: 10,
//     cardColor: "purple",
//   },
//   {
//     cardNumber: 11,
//     cardColor: "orange",
//   },
//   {
//     cardNumber: 12,
//     cardColor: "orange",
//   },
// ];
