const wordText = document.querySelector(".container__content__word");

const initGame = () => {
  let randomObject = words[Math.floor(Math.random() * words.length)];
  let wordArray = randomObject.container__content__word.split("");

  for (let i = wordArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [wordArray[i].wordArray[j]] = [wordArray[j], wordArray[i]];
  }
  wordText.innerText = wordArray.join("");
  console.log(wordArray, randomObject.word);
};
initGame();
