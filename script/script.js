let randomNumber = generateRandomNumber();
let attempts = 10;
let randomBombe = generateRandomBombe ();
let explosions = 3;
let level = "level01";

function startGame() {
  window.location.href = "./index_game.html";
}

function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;}
  console.log(randomNumber);

  function generateRandomBombe() {
    const bombNumbers = [];
    for (let i = 0; i < 3; i++) {
      let randomBomb = Math.floor(Math.random() * 100) + 1;
      while (bombNumbers.includes(randomBomb)) {
        randomBomb = Math.floor(Math.random() * 100) + 1;
      }
      bombNumbers.push(randomBomb);
    }
    return bombNumbers;
  }  console.log(randomBombe)
  document.getElementById("test_bombe").innerHTML = randomBombe;


    function checkGuess() {
      let inputElement = document.getElementById('display');
      let feedbackElement = document.getElementById('feedback');
      let display = parseInt(inputElement.textContent.trim());
    
      if (display === "") {
        feedbackElement.innerHTML = "Please enter a number before pressing GO!";
        feedbackElement.style.color = "red";
        return;
      }
    
      if (display === randomNumber) {
        feedbackElement.innerHTML = "";
        const changeCss = document.getElementById('css');
        changeCss.setAttribute("href", "./css/style_" + level + "_goodgirl.css");
        const changeGif = document.querySelector('.video_goodGirl');
        changeGif.setAttribute("src", "./video/goodGirl.gif");
    
        const goLevel01 = document.getElementById('level01');
        const goLevel02 = document.getElementById('level02');
        const goLevel03 = document.getElementById('level03');
    
        goLevel01.innerHTML = "Level I";
        goLevel02.innerHTML = "Level II";
    
        if (showLevel3Button) {
          goLevel03.innerHTML = "Level III";
        }


      } else if (randomBombe.includes(display)) {
        feedbackElement.innerHTML = "OH NO! You found a BOMB. Escape the other " + (explosions - 1);
        feedbackElement.style.color = "red";
        explosions = explosions - 1;
        attempts = attempts - 1;
    
        if (explosions > 0) {
          clearDisplay();
        } 
        
        else {
          feedbackElement.innerHTML = "";
          const changeGif = document.querySelector('.video_goodGirl');
          changeGif.setAttribute("src", "./video/gameOver.gif");
          const changeCss = document.getElementById('css');
          changeCss.setAttribute("href", "./css/style_level01_gameover.css");
          const stayButton = document.getElementById('level01');
          stayButton.innerHTML = "TRY AGAIN";
        }
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


function level01() {
  location.reload();
}



function level02() {
  level = "level02";
  randomNumber = generateRandomNumber();
  attempts = 7;
  randomBombe = generateRandomBombe ();
  explosions = 3;
  showLevel3Button = true;

  const changeCss = document.getElementById('css');
  changeCss.setAttribute("href", "./css/style_" + level + ".css");

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
  console.log(randomBombe);
  document.getElementById("test_bombe").innerHTML = randomBombe;
}


function level03() {
  level = "level03";
  randomNumber = generateRandomNumber();
  attempts = 5;
  randomBombe = generateRandomBombe ();
  explosions = 3;
  showLevel3Button = true;
      
  const changeCss = document.getElementById('css');
  changeCss.setAttribute("href", "./css/style_" + level + ".css");
      
  const changeGif = document.querySelector('.video_goodGirl');
  changeGif.setAttribute("src", "")
      
  const changeChanges = document.querySelector('.chances');
  changeChanges.innerHTML = "You have five chances"
        
  const stayButton = document.getElementById('level01');
  stayButton.innerHTML = '';
      
  const nextButton = document.getElementById('level02');
  nextButton.innerHTML = '';

  const goLevel03 = document.getElementById('level03');
  goLevel03.innerHTML = "Level III";

      
  clearDisplay();
  console.log(randomNumber);
  console.log(randomBombe);
  document.getElementById("test_bombe").innerHTML = randomBombe;
}   
   