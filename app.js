let boniButton = document.getElementsByClassName("ScCoreButton-sc-ocjdkq-0 ScCoreButtonSuccess-sc-ocjdkq-5 ibtYyW kIlsPe");
let testBtn = document.getElementsByClassName("ScCoreButton-sc-ocjdkq-0 ibtYyW ScButtonIcon-sc-9yap0r-0 iqxxop");
let vorhersagen = document.getElementsByClassName("ScCoreButton-sc-ocjdkq-0 ScCoreButtonPrimary-sc-ocjdkq-1 ibtYyW wgheP");
let blue = document.getElementsByClassName("Layout-sc-1xcs6mc-0 gcdnNQ fixed-prediction-button fixed-prediction-button--blue");
let intervalId;
let interval;
let channelpoints;
let blueButtonClickCount = 0;
let activeBtn;
let isActive = true;

let channelpointsSpan = document.getElementsByClassName("ScAnimatedNumber-sc-1iib0w9-0");
let betBtnBlue = document.getElementsByClassName("InjectLayout-sc-1i43xsx-0 custom-prediction-button__interactive edTANu");
let betBtnPink = document.getElementsByClassName("ScInputBase-sc-vu7u7d-0 ScInput-sc-19xfhag-0 eeTKnM iXedIZ InjectLayout-sc-1i43xsx-0 hQzFgv tw-input");
let pointsInputFeld = document.getElementsByClassName("ScInputBase-sc-vu7u7d-0 ScInput-sc-19xfhag-0 eeTKnM iXedIZ InjectLayout-sc-1i43xsx-0 hQzFgv tw-input");
let pointsInputFeldClick = document.getElementsByClassName("Layout-sc-1xcs6mc-0 bZVrjx");

let betrag = document.getElementsByClassName("ScCoreButton-sc-ocjdkq-0 ScCoreButtonText-sc-ocjdkq-3 hUGgcQ jYfhUy");

function getChannelpointNumber() {
  if (channelpointsSpan.length > 0) {
    let channelpoints = Math.floor(channelpointsSpan[0].innerHTML * 0.01);
    console.log(channelpoints);
    pressBlue(channelpoints);
  } else {
    console.log("Kein Element mit der angegebenen Klasse gefunden.");
  }
}

function clicking() {
  if (boniButton.length > 0) {
    boniButton[0].click();
  }
}

function bet() {
  console.log("betting");
if (vorhersagen.length > 2) {
    vorhersagen[2].click();
    if (blue.length > 0 && isActive === true) {
      getChannelpointNumber()
    }
  } 
}

function pressBlue(points) {
  console.log(points);
  let counter = 0;

  function clickButton() {
    if (counter < points) {
      blue[0].click();
      counter++;
    } else {
      clearInterval(interval);
      isActive = false;
      console.log("stopped");
    }
  }

  let interval = setInterval(clickButton, 1000);
  isActive = false;

  setTimeout(function () {
    clearInterval(interval);
    isActive = true;
    console.log("stopped");
  }, 900000);
}


function resetBlueButtonClickCount() {
  blueButtonClickCount = 0;
}

function start() {
  setInterval(clicking, 1000);
  setInterval(bet, 2000);
}

start();


/*
function bet(pointsAmount) {
  if (vorhersagen.length > 1) {
    vorhersagen[1].click();
    //bet;
    //waitBeforBet()
  }
  if (betrag.length > 0) {
    betrag[0].click();
  }
  pointsInputFeld[0].focus();

  let numberString = pointsAmount.toString();
  let length = numberString.length;

  for (let i = 0; i < length; i++) {
    let digit = parseInt(pointsAmount.toString()[i]);
    setTimeout(function () {
      simulateKeyPress(digit);
    }, 1000);
    betBtnBlue[0].click();
  }

let numericValue = parseInt(Math.floor(pointsAmount * 0.01));
pointsInputFeld[0].value = numericValue

console.log(pointsInputFeld[0].value)
console.log(numericValue);
console.log(typeof numericValue);

 
}

function simulateKeyPress(key) {
  let event = new KeyboardEvent("keydown", {
    key: key.toString(),
  });

  document.addEventListener("keydown", function (e) {
    console.log("Gedrückte Taste:", e.key);
  });

  document.dispatchEvent(event);
}*/
