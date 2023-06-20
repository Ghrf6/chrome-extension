let boniButton = document.getElementsByClassName("ScCoreButton-sc-ocjdkq-0 ScCoreButtonSuccess-sc-ocjdkq-5 ibtYyW kIlsPe");
let testBtn = document.getElementsByClassName("ScCoreButton-sc-ocjdkq-0 ibtYyW ScButtonIcon-sc-9yap0r-0 iqxxop");
let vorhersagen = document.getElementsByClassName("ScCoreButton-sc-ocjdkq-0 ScCoreButtonPrimary-sc-ocjdkq-1 ibtYyW wgheP");
let blue = document.getElementsByClassName("Layout-sc-1xcs6mc-0 gcdnNQ fixed-prediction-button fixed-prediction-button--pink");
let intervalId;
let interval;
let channelpoints;
let blueButtonClickCount = 0;

let channelpointsSpan = document.getElementsByClassName("ScAnimatedNumber-sc-1iib0w9-0");
let betBtnBlue = document.getElementsByClassName("InjectLayout-sc-1i43xsx-0 custom-prediction-button__interactive edTANu");
let pointsInputFeld = document.getElementsByClassName("ScInputBase-sc-vu7u7d-0 ScInput-sc-19xfhag-0 eeTKnM iXedIZ InjectLayout-sc-1i43xsx-0 hQzFgv tw-input");

let betrag = document.getElementsByClassName("ScCoreButton-sc-ocjdkq-0 ScCoreButtonText-sc-ocjdkq-3 hUGgcQ jYfhUy");


function getChannelpointNumber() {
  if (channelpointsSpan.length > 0) {
    let channelpoints = channelpointsSpan[0].innerHTML;
    console.log(channelpoints);
    toBet(channelpoints)
  } else {
    console.log("Kein Element mit der angegebenen Klasse gefunden.");
  }
  
}

function toBet(pointsAmount){
  if (vorhersagen.length > 1) {
    vorhersagen[1].click();
  }
  if (betrag.length > 0) {
    betrag[0].click();
  }

  let numericValue = parseInt(Math.floor(pointsAmount * 0.15));
  pointsInputFeld[0].setAttribute("value", numericValue);
 
  console.log(typeof numericValue);

  betBtnBlue[0].click();
}

function start() {
  setInterval(getChannelpointNumber, 3000);
}

start()
/*
function start() {
  setInterval(clicking, 1000);
  setInterval(bet, 3000);
}

function clicking() {
  if (boniButton.length > 0) {
    boniButton[0].click();
  }
}

function bet() {
  getChannelpointNumber()
  console.log("betting");
  
  if (vorhersagen.length > 1) {
    vorhersagen[1].click();
    if (blue.length > 0) {
      interval = setTimeout(pressBlue, 3000);
    }
  }
}

function pressBlue() {
  alert('I\'m the blue')
  if (blueButtonClickCount < 12) {
    blue[0].click();
    blueButtonClickCount++;
    let randomNumber = Math.floor(Math.random() * (7000 - 5000 + 1)) + 5000;
    interval = setTimeout(pressBlue, randomNumber);
  } else {
    clearInterval(interval);
    console.log("stopped");
    setTimeout(resetBlueButtonClickCount, 180000);
  }
}

function resetBlueButtonClickCount() {
  blueButtonClickCount = 0;
}

start();
*/