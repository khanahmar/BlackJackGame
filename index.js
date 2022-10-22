let firstCard = 11;
let secondCard = 10;
let blackjack = false;
let isAlive = true;
let massage = "";

let sum = firstCard + secondCard + 5;

if (sum <= 20) {
  massage = "Do you want to draw a new card?";
} else if (sum === 21) {
  massage = "Wohoo! You've got a blackjack! 😄";
  blackjack = true;
} else {
  massage = "Your are out of the game! 😭";
  isAlive = false;
}

console.log(massage);
