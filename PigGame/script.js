document.querySelector(".score--a").textContent = 0;
document.querySelector(".score--b").textContent = 0;
const dice = document.querySelector(".dice");

const currentscore0 = document.getElementsById("current-score-0");
const currentscore1 = document.getElementsById("current-score-1");

const btnnew = document.getElementsByClassName("btn--new");
const btnroll = document.getElementsByClassName("btn--roll");
const btnhold = document.getElementsByClassName("btn--hold");

const scores = [0, 0];
dice.addClass("hidden");

let currentscore = 0;
let activePlayer = 0;

btnroll.addEventListener("click", function () {
  const diceafter = Math.trunc(Math.random * 6) + 1;
  console.log(diceafter);

  // dice.classList.remove("hidden");
  // dice.src = `dice-${dice}.png`;

  if (dice !== 1) {
    currentscore += dice;
    document.getElementById(`current-score-${activePlayer}`).textContent =
      currentscore;
  } else {
    activePlayer = activePlayer === 0 ? 1 : 0;
  }
});
