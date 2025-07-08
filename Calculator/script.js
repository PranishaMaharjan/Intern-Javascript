let input = document.getElementById("inputnumber");
console.log(typeof input);

let buttons = document.querySelectorAll("button");
// let pranishaBtn = document.getElementsByClassName("pranisha");
// console.log("pranisha btn type " + pranishaBtn[0]);

let string = "";
let arr = Array.from(buttons);
arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      console.log(e.target, "what is event");
      string = eval(string);
      input.value = string;
    } else if (e.target.innerHTML == "AC") {
      string = "";
      input.value = string;
    } else {
      console.log(e.target, "what is event");
      string += e.target.innerHTML;
      input.value = string;
    }
  });
});
