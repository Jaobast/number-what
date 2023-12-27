let randomNumber = generateRandomNumber();
let attempts = 7;

function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;}
  console.log(randomNumber);

function checkGuess() {
  let inputElement = document.getElementById('display');
  let feedbackElement = document.getElementById('feedback');
  let display = inputElement.textContent.trim();

  if (display === randomNumber.toString()) {
    const changeChances = document.querySelector('.chances');
    changeChances.innerHTML= "You have five chances";
    const changeCss = document.getElementById('css')
    const changeGif = document.querySelector('.video_goodGirl');
    changeCss.setAttribute("href", "./css/style_level01_goodgirl.css");
    changeGif.setAttribute("src", "./video/goodGirl.gif")
    
  }


  else if (parseInt(display) < randomNumber) {
    feedbackElement.innerHTML = "Too low! You still have " + (attempts -1) + " chances";
    feedbackElement.style.color = "red";
    attempts = attempts - 1;

       if (attempts > 0) {
       clearDisplay();}
       
       else {
       feedbackElement.innerHTML = "Game Over";
       feedbackElement.style.color = "red";}}
      
  else {
    feedbackElement.innerHTML = "Too high! You still have " + (attempts -1) + " chances";
    feedbackElement.style.color = "red";
    attempts = attempts - 1;

       if (attempts > 0) {
       clearDisplay();}
       
       else {
       feedbackElement.innerHTML = "Game Over";
       feedbackElement.style.color = "red";}}}



let display = document.getElementById('display');

function addToDisplay(number) {
  display.textContent += number;}

function clearDisplay() {
  display.textContent = '';}
