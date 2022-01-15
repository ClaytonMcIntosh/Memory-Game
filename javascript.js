let gameBoard = document.querySelector("#game");

//loop to add 12 cards (divs) to the game

addCards();

function addCards() {
  for (let i = 0; i < 12; i++) {
    let card = document.createElement("div");
    card.id = `card${i}`;
    card.setAttribute("class", "card");
    gameBoard.appendChild(card);
  }
}

const cardsObj = {
  0: document.getElementById("card1"),
  1: document.getElementById("card2"),
  2: document.getElementById("card3"),
  3: document.getElementById("card4"),
  4: document.getElementById("card5"),
  5: document.getElementById("card6"),
  6: document.getElementById("card7"),
  7: document.getElementById("card8"),
  8: document.getElementById("card9"),
  9: document.getElementById("card10"),
  10: document.getElementById("card11"),
  11: document.getElementById("card12"),
  12: document.getElementById("card13"),
};

//set color

function randomNumberSix() {
  let x = Math.floor(Math.random() * 6) + 1;
  return x;
}

generateNumbs();

function generateNumbs() {
  for (let i = 0; i < 11; i++) {
    console.log(i);
    if (randomNumberSix() === 1) {
      cardsObj[i].setAttribute("class", "green");
    } else if (randomNumberSix() === 2) {
      cardsObj[i].setAttribute("class", "yellow");
    } else if (randomNumberSix() === 3) {
      cardsObj[i].setAttribute("class", "blue");
    } else if (randomNumberSix() === 4) {
      cardsObj[i].setAttribute("class", "red");
    } else if (randomNumberSix() === 5) {
      cardsObj[i].setAttribute("class", "purple");
    } else if (randomNumberSix() === 6) {
      cardsObj[i].setAttribute("class", "orange");
    }
  }
}
