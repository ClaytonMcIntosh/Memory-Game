let gameBoard = document.querySelector("#game");

//loop to add 12 cards (divs) to the game

addCards();

function addCards() {
  for (let i = 0; i < 12; i++) {
    let card = document.createElement("div");
    card.id = `card${i}`;
    //card.setAttribute("class", `card`);
    gameBoard.appendChild(card);
  }
}

//begin game with start button and explanation. On click start game.

//add timer. If timer gets to zero. Game over

//give each card one of the six colours. Each colour only twice.

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

//set color

function randomNumberSix() {
  let x = Math.floor(Math.random() * 6) + 1;
  return x;
}

//let random = Math.floor(Math.random() * 6) + 1;

// generateNumbs();
// play();

// function play() {
//   // let i = 1



// // console.log(card1);
// let getcard1 = document.getElementById("card1");
// let getcard2 = document.getElementById("card2");
// let getcard3 = document.getElementById("card3");
// let getcard4 = document.getElementById("card4");
// let getcard5 = document.getElementById("card5");
// let getcard6 = document.getElementById("card6");
// let getcard7 = document.getElementById("card7");
// let getcard8 = document.getElementById("card8");
// let getcard9 = document.getElementById("card9");
// let getcard10 = document.getElementById("card10");
// let getcard11 = document.getElementById("card11");
// // let getcard12 = document.getElementById("card12");

// generateNumbs();

// function generateNumbs() {
//   for (let i = 0; i < 12; i++) {
//     // console.log(`card${i}`);
//     // console.log(document.body.section.id="game")
//     if (randomNumberSix() == 1) {
//       card1.setAttribute("class", "green");
//     } else if (randomNumberSix() == 2) {
//       card1.setAttribute("class", "red");
//     } else if (randomNumberSix() == 3) {
//       card1.setAttribute("class", "red");
//     } else if (randomNumberSix() == 4) {
//       card1.setAttribute("class", "red");
//     } else if (randomNumberSix() == 5) {
//       card1.setAttribute("class", "red");
//     } else if (randomNumberSix() == 6) {
//       card1.setAttribute("class", "red");
//     }
//   }
// }

//Hide colours or cover colours.

//On click, colour is revealed.

//If there are no other cards clicked (if its the first card clicked), then keep the colour unclicked
//If its the second card clicked, then check if they are a match
//If they are a match add cards to cards won
//If they are not a match, then turn them back to gray

// //event listener test
// card1.addEventListener("click", (e) => {
//   console.log(e.target);
//   e.target.id = "cardred";
// });
