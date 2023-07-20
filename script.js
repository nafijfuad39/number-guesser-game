let guess = document.getElementById("btn");
let output = document.getElementById("output");

let number = [Math.floor(Math.random() * 100)];

const guessnumber = (event) => {
  let input = document.getElementById("userinput").value;
  if (input == number) {
    output.innerHTML = `You gussed right number, your number was ${number}`;
  } else if (input < number) {
    output.innerHTML = "You guessed too Low";
  }
  if (input > number) {
    output.innerHTML = "You guessed too high";
  }
};

guess.addEventListener("click", guessnumber);
