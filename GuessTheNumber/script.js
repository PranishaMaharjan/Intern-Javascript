// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Correct Number !";

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").textContent = 23;
// console.log(document.querySelector(".guess").value);

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //when there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "NO NUMBER !";
  }

  //when the number guessed and the secret number is same
  else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "CORRECT NUMBER !";
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector(".container").style.backgroundColor = "#60b347";
    document.querySelector(".guess").style.backgroundColor = "#60b347";
  }

  // when the number guessed is greater than secret number
  else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector(".message").textContent = "TOO HIGH";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "YOU LOST !";
    }
  }

  // when the number guessed is lesser than secret number
  else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector(".message").textContent = "TOO LOW !";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "YOU LOST !";
    }
  }
});
