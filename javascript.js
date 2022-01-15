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
  if ((rand == 1 && deck.green == 1) || (rand == 1 && deck.green == 2)) {
    deck.green--;
    x = "green";
    console.log("green=" + deck.green);
    return x;
  } else if (
    (rand == 2 && deck.yellow == 1) ||
    (rand == 2 && deck.yellow == 2)
  ) {
    deck.yellow--;
    x = "yellow";
    console.log("yellow=" + deck.yellow);
    return x;
  } else if ((rand == 3 && deck.blue == 1) || (rand == 3 && deck.blue == 2)) {
    deck.blue--;
    x = "blue";
    console.log("blue=" + deck.blue);
    return x;
  } else if ((rand == 4 && deck.red == 1) || (rand == 4 && deck.red == 2)) {
    deck.red--;
    x = "red";
    console.log("red=" + deck.red);
    return x;
  } else if (
    (rand == 5 && deck.purple == 1) ||
    (rand == 5 && deck.purple == 2)
  ) {
    deck.purple--;
    x = "purple";
    console.log("purple=" + deck.purple);
    return x;
  } else if (
    (rand == 6 && deck.orange == 1) ||
    (rand == 6 && deck.orange == 2)
  ) {
    deck.orange--;
    x = "orange";
    console.log("orange=" + deck.orange);
    return x;
  } else if (deck.green == 1 || deck.green == 2) {
    x = "green";
    return x;
  } else if (deck.yellow == 1 || deck.yellow == 2) {
    x = "yellow";
    return x;
  } else if (deck.blue == 1 || deck.blue == 2) {
    x = "blue";
    return x;
  } else if (deck.red == 1 || deck.red == 2) {
    x = "red";
    return x;
  } else if (deck.purple == 1 || deck.purple == 2) {
    x = "purple";
    return x;
  } else if (deck.orange == 1 || deck.orange == 2) {
    x = "orange";
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
