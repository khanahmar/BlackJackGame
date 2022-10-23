let massageEl = document.getElementById("massage-el");
let sumEl = document.getElementById("sum");
let cardEl = document.getElementById("card");
let greeting = document.getElementById("greeting");

let firstCard = randomCard();
let secondCard = randomCard();
let cards = [firstCard, secondCard];
let blackjack = false;
let isAlive = true;
let massage = "";
let sum = firstCard + secondCard;

function randomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  renderGame();
}

function renderGame() {
  cardEl.innerText = `Card :`;
  for (let i = 0; i < cards.length; i++) {
    cardEl.innerText += ` ${cards[i]}`;
  }

  sumEl.innerText = `Sum : ${sum}`;

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
}

function newCard() {
  let card = randomCard();
  sum += card;
  cards.push(card);
  renderGame();
}
