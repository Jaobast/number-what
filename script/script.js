let randomNumber = generateRandomNumber();

function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function checkGuess() {
  let inputElement = document.getElementById('display');
  let feedbackElement = document.getElementById('feedback');
  let display = inputElement.textContent.trim();

  if (display === randomNumber.toString()) {
    feedbackElement.innerHTML = "Good guess!";
    feedbackElement.style.color = "green";
  } else if (parseInt(display) < randomNumber) {
    feedbackElement.innerHTML = "Too low! Try again.";
    feedbackElement.style.color = "red";
  } else {
    feedbackElement.innerHTML = "Too high! Try again.";
    feedbackElement.style.color = "red";
  }

  clearDisplay(); 
}

let display = document.getElementById('display');

function addToDisplay(value) {
  display.textContent += value;
}

function clearDisplay() {
  display.textContent = '';
}
