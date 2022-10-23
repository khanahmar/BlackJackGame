let massageEl = document.getElementById("massage-el");
let sumEl = document.getElementById("sum");
let cardEl = document.getElementById("card");

let firstCard = 11;
let secondCard = 10;
let card = [firstCard, secondCard];
let blackjack = false;
let isAlive = true;
let massage = "";

let sum = firstCard + secondCard;

function startGame() {
  renderGame();
}

function renderGame() {
  if (sum <= 20) {
    massage = "Do you want to draw a new card? 😊";
  } else if (sum === 21) {
    massage = "Wohoo! You've got a blackjack! 😄";
    blackjack = true;
  } else {
    massage = "Your are out of the game! 😭";
    isAlive = false;
  }
  massageEl.innerText = massage;
  sumEl.innerText = `Sum : ${sum}`;
  cardEl.innerText = `Card : ${card[0]} ${card[1]}`;
}

function newCard() {
  let card = 5;
  sum += card;
  renderGame();
}
