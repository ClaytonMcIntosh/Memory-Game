let gameBoard = document.querySelector("#game");
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

dealCards();

//Adds cards to board and calls chooseColour function to choose colour
function dealCards() {
  for (let i = 0; i <= 11; i++) {
    let card = document.createElement("div");
    card.id = `card${i}`;
    card.className = `${cardDeck[i].color}`;
    gameBoard.appendChild(card);
    let cover = document.createElement("div");
    cover.id = `cover${i}`;
    cover.className = "grey";
    cover.style.opacity = 1;
    card.appendChild(cover);
  }
}

document.getElementById("cover0").addEventListener("click", function () {
  cover0.style.opacity = "0";
  setInterval(function () {
    cover0.style.opacity = "1";
  }, 2000);
});

document.getElementById("cover1").addEventListener("click", function () {
  cover1.style.opacity = "0";
  setInterval(function () {
    cover1.style.opacity = "1";
  }, 2000);
});

document.getElementById("cover2").addEventListener("click", function () {
  cover2.style.opacity = "0";
  setInterval(function () {
    cover2.style.opacity = "1";
  }, 2000);
});

document.getElementById("cover3").addEventListener("click", function () {
  cover3.style.opacity = "0";
  setInterval(function () {
    cover3.style.opacity = "1";
  }, 2000);
});

document.getElementById("cover4").addEventListener("click", function () {
  cover4.style.opacity = "0";
  setInterval(function () {
    cover4.style.opacity = "1";
  }, 2000);
});

document.getElementById("cover5").addEventListener("click", function () {
  cover5.style.opacity = "0";
  setInterval(function () {
    cover5.style.opacity = "1";
  }, 2000);
});

document.getElementById("cover6").addEventListener("click", function () {
  cover6.style.opacity = "0";
  setInterval(function () {
    cover6.style.opacity = "1";
  }, 2000);
});

document.getElementById("cover7").addEventListener("click", function () {
  cover7.style.opacity = "0";
  setInterval(function () {
    cover7.style.opacity = "1";
  }, 2000);
});

document.getElementById("cover8").addEventListener("click", function () {
  cover8.style.opacity = "0";
  setInterval(function () {
    cover8.style.opacity = "1";
  }, 2000);
});

document.getElementById("cover9").addEventListener("click", function () {
  cover9.style.opacity = "0";
  setInterval(function () {
    cover9.style.opacity = "1";
  }, 2000);
});

document.getElementById("cover10").addEventListener("click", function () {
  cover10.style.opacity = "0";
  setInterval(function () {
    cover10.style.opacity = "1";
  }, 2000);
});

document.getElementById("cover11").addEventListener("click", function () {
  cover11.style.opacity = "0";
  setInterval(function () {
    cover11.style.opacity = "1";
  }, 2000);
});
