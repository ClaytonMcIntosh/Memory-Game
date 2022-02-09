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
    cover.style.opacity = 0.8;
    card.appendChild(cover);
  }
}

document.getElementById("cover0").addEventListener("click", function () {
  if (cover0.style.opacity === "0.8") {
    cover0.style.opacity = "0";
  } else {
    cover0.style.opacity = "0.8";
  }
});

document.getElementById("cover1").addEventListener("click", function () {
  if (cover1.style.opacity === "0.8") {
    cover1.style.opacity = "0";
  } else {
    cover1.style.opacity = "0.8";
  }
});

document.getElementById("cover2").addEventListener("click", function () {
  if (cover2.style.opacity === "0.8") {
    cover2.style.opacity = "0";
  } else {
    cover2.style.opacity = "0.8";
  }
});

document.getElementById("cover3").addEventListener("click", function () {
  if (cover3.style.opacity === "0.8") {
    cover3.style.opacity = "0";
  } else {
    cover3.style.opacity = "0.8";
  }
});

document.getElementById("cover4").addEventListener("click", function () {
  if (cover4.style.opacity === "0.8") {
    cover4.style.opacity = "0";
  } else {
    cover4.style.opacity = "0.8";
  }
});

document.getElementById("cover5").addEventListener("click", function () {
  if (cover5.style.opacity === "0.8") {
    cover5.style.opacity = "0";
  } else {
    cover5.style.opacity = "0.8";
  }
});

document.getElementById("cover6").addEventListener("click", function () {
  if (cover6.style.opacity === "0.8") {
    cover6.style.opacity = "0";
  } else {
    cover6.style.opacity = "0.8";
  }
});

document.getElementById("cover7").addEventListener("click", function () {
  if (cover7.style.opacity === "0.8") {
    cover7.style.opacity = "0";
  } else {
    cover7.style.opacity = "0.8";
  }
});

document.getElementById("cover8").addEventListener("click", function () {
  if (cover8.style.opacity === "0.8") {
    cover8.style.opacity = "0";
  } else {
    cover8.style.opacity = "0.8";
  }
});

document.getElementById("cover9").addEventListener("click", function () {
  if (cover9.style.opacity === "0.8") {
    cover9.style.opacity = "0";
  } else {
    cover9.style.opacity = "0.8";
  }
});

document.getElementById("cover10").addEventListener("click", function () {
  if (cover10.style.opacity === "0.8") {
    cover10.style.opacity = "0";
  } else {
    cover10.style.opacity = "0.8";
  }
});

document.getElementById("cover11").addEventListener("click", function () {
  if (cover11.style.opacity === "0.8") {
    cover11.style.opacity = "0";
  } else {
    cover11.style.opacity = "0.8";
  }
});
