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
    feedbackElement.innerHTML = "";
    const changeCss = document.getElementById('css');
    changeCss.setAttribute("href", "./css/style_level01_goodgirl.css");
    const changeGif = document.querySelector('.video_goodGirl');
    changeGif.setAttribute("src", "./video/goodGirl.gif")

    const stayButton = document.getElementById('stay_button');
      
    const nextButton = document.getElementById('next_button');

  
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
       const stayButton = document.getElementById('stay_button');
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
        changeCss.setAttribute("href", "./css/style_level01_gameover.css");
        const stayButton = document.getElementById('stay_button');
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
    const changeCss = document.getElementById('css');
    changeCss.setAttribute("href", "./css/style_level02.css");

    const changeGif = document.querySelector('.video_goodGirl');
    changeGif.setAttribute("src", "")

    randomNumber = generateRandomNumber();
    attempts = 5;

    const changeChanges = document.querySelector('.chances');
    changeChanges.innerHTML = "You have five chances"

    const feedbackElement = document.getElementById('feedback');
    feedbackElement.innerHTML = '';
    feedbackElement.style.color = '';
  
    const stayButton = document.getElementById('stay_button');
    stayButton.innerHTML = '';
    stayButton.classList.remove('next_button');

    const nextButton = document.getElementById('next_button');
    nextButton.innerHTML = '';
    nextButton.classList.remove('next_button');
  
    clearDisplay();
    console.log(randomNumber);
  }