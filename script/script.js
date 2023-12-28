let randomNumber = generateRandomNumber();
let attempts = 10;
let level = "level01";

function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;}
  console.log(randomNumber);

function checkGuess() {
  let inputElement = document.getElementById('display');
  let feedbackElement = document.getElementById('feedback');
  let display = inputElement.textContent.trim();

  if (display === randomNumber.toString()) {
    feedbackElement.innerHTML = "";
    const changeCss = document.getElementById('css');
    changeCss.setAttribute("href", "./css/style_" + level +"_goodgirl.css");
    const changeGif = document.querySelector('.video_goodGirl');
    changeGif.setAttribute("src", "./video/goodGirl.gif")

    const stayButton = document.getElementById('level01');
    const nextButton = document.getElementById('level02');

  
    stayButton.innerHTML = "PRACTICE MORE LEVEL I";
    nextButton.innerHTML = "I'M READY FOR LEVEL II";
  }


  else if (parseInt(display) < randomNumber) {
    feedbackElement.innerHTML = "Too low! You still have " + (attempts -1) + " chances";
    feedbackElement.style.color = "red";
    attempts = attempts - 1;

       if (attempts > 0) {
       clearDisplay();}
       
       else {
       feedbackElement.innerHTML = "";
       const changeGif = document.querySelector('.video_goodGirl');
       changeGif.setAttribute("src", "./video/gameOver.gif")
       const changeCss = document.getElementById('css');
       changeCss.setAttribute("href", "./css/style_level01_gameover.css");
       const stayButton = document.getElementById('level01');
       stayButton.innerHTML = "TRY AGAIN";}}
      
  else {
    feedbackElement.innerHTML = "Too high! You still have " + (attempts -1) + " chances";
    feedbackElement.style.color = "red";
    attempts = attempts - 1;

       if (attempts > 0) {
       clearDisplay();}
       
       else {
        feedbackElement.innerHTML = "";
        const changeGif = document.querySelector('.video_goodGirl');
        changeGif.setAttribute("src", "./video/gameOver.gif")
        const changeCss = document.getElementById('css');
        changeCss.setAttribute("href", "./css/style_" + level + "_gameover.css");
        const stayButton = document.getElementById('level01');
        stayButton.innerHTML = "TRY AGAIN";}}}



let display = document.getElementById('display');

function addToDisplay(number) {
  display.textContent += number;}

function clearDisplay() {
  display.textContent = '';}

function stay() {
  location.reload();
  }

  function next() {
    level = "level02";
    randomNumber = generateRandomNumber();
    attempts = 7;

    const changeCss = document.getElementById('css');
    changeCss.setAttribute("href", "./css/style_level02.css");

    const changeGif = document.querySelector('.video_goodGirl');
    changeGif.setAttribute("src", "")

    const changeChanges = document.querySelector('.chances');
    changeChanges.innerHTML = "You have seven chances"
  
    const stayButton = document.getElementById('level01');
    stayButton.innerHTML = '';

    const nextButton = document.getElementById('level02');
    nextButton.innerHTML = '';

    clearDisplay();
    console.log(randomNumber);
         }