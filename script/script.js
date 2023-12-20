let randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
  let inputElement = document.getElementById('display');
  let feedbackElement = document.getElementById('feedback');
  let display = parseInt(inputElement.value);

  if (display === randomNumber) {
    feedbackElement.innerHTML = "good girl!";
    feedbackElement.style.color = "green";
  } else if (display < randomNumber) {
    feedbackElement.innerHTML = "Too low! Try again.";
    feedbackElement.style.color = "red";
  } else {
    feedbackElement.innerHTML = "Too high! Try again.";
    feedbackElement.style.color = "red";
  }
}

let display = document.getElementById('display');

function addToDisplay(value) {
  display.textContent += value;
}

function clearDisplay() {
  display.textContent = '';
}
