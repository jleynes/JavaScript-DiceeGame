// Variables
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var diceImg1 = "images/dice" + randomNumber1 + ".png";
var diceImg2 = "images/dice" + randomNumber2 + ".png";

// Selecting the elements
document.querySelector(".img1").setAttribute("src", diceImg1);
document.querySelector(".img2").setAttribute("src", diceImg2);

// Changing the h1
if (randomNumber1 > randomNumber2){
  document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
}
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").textContent = "Draw!";
}
