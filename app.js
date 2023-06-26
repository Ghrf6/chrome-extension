let boniButton = document.getElementsByClassName("ScCoreButton-sc-ocjdkq-0 ScCoreButtonSuccess-sc-ocjdkq-5 ibtYyW kIlsPe");
let blue = document.getElementsByClassName("Layout-sc-1xcs6mc-0 gcdnNQ fixed-prediction-button fixed-prediction-button--blue");
let intervalId;
let interval;
let blueButtonClickCount = 0;
let activeBtn;
let isActive = true;
let pink = false;

let buttons = document.getElementsByTagName("button");

function start() {
  setInterval(clicking, 1000);
  setInterval(bet, 2000);
}

function clicking() {
  if (boniButton.length > 0) {
    boniButton[0].click();
  }
}

function bet() {
  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].textContent === "Vorhersagen") {
      console.log("betting startet")
      buttons[i].click();
      if (blue.length > 0 && isActive === true) {
        getChannelpointNumber();
      }
      console.log("Element mit dem Inhalt 'Vorhersagen' gefunden!");
      console.log(buttons[i]);
      break;
    }
  }
}

function getChannelpointNumber() {
  let channelpointsSpan = document.getElementsByClassName("ScAnimatedNumber-sc-1iib0w9-0");
  if (channelpointsSpan.length > 0) {
    let channelpoints = Math.floor(channelpointsSpan[0].innerHTML * 0.01);
    console.log(channelpoints);
    pressBlue(channelpoints);
  } else {
    console.log("Kein Element mit der angegebenen Klasse gefunden.");
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

  interval = setInterval(clickButton, 1000);
  isActive = false;

  setTimeout(function () {
    clearInterval(interval);
    isActive = true;
    location.reload();
  }, 900000);
}

function resetBlueButtonClickCount() {
  blueButtonClickCount = 0;
}

start();
