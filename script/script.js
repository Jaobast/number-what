let randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
  let inputElement = document.querySelector(".guess");
  let feedbackElement = document.getElementById('feedback');
  let guess = parseInt(inputElement.value);

  if (guess === randomNumber) {
    feedbackElement.innerHTML = "good girl!";
    feedbackElement.style.color = "green";
  } else if (guess < randomNumber) {
    feedbackElement.innerHTML = "Too low! Try again.";
    feedbackElement.style.color = "red";
  } else {
    feedbackElement.innerHTML = "Too high! Try again.";
    feedbackElement.style.color = "red";
  }
}
