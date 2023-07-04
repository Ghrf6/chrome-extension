let betting = true;           // betting is on
let boni = true;              // claiming the bonus is on
let bettPercentAmount = 20;   // how many percent of your points you want to bet
let waitingTime = 15;         // how many minutes you wait until you bet again
let betOn = "blue"            // bet on "blue" or "pink"
let keyword = "Predict"   // you NEED to change this variabel to 'Predict' if your Twitch language is english


let channelpointsSpan = document.getElementsByClassName("ScAnimatedNumber-sc-1iib0w9-0");
let boniButton = document.getElementsByClassName("ScCoreButton-sc-ocjdkq-0 ScCoreButtonSuccess-sc-ocjdkq-5 ibtYyW kIlsPe");
let blue = document.getElementsByClassName("Layout-sc-1xcs6mc-0 gcdnNQ fixed-prediction-button fixed-prediction-button--" + betOn);
let buttons = document.getElementsByTagName("button");

let interval;
let blueButtonClickCount = 0;
let isActive = true;
let pink = false;


start();

function start() {
  console.log("started")
  if(boni){
    setInterval(clicking, 1000);
  }
  if (betting) {
    setInterval(bet, 2000);
  }
}

function clicking() {
  if (boniButton.length > 0) {
    boniButton[0].click();
  }
}

function bet() {
  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].textContent === keyword) {
      console.log("betting startet");
      buttons[i].click();
      if (blue.length > 0 && isActive === true) {
        getChannelpointNumber();
      }
      console.log("Not found!");
      break;
    }
  }
}

function getChannelpointNumber() {

  if (channelpointsSpan.length > 0) {
    let channelpoints = Math.floor(channelpointsSpan[0].innerHTML * bettPercentAmount * 0.001);
    console.log(channelpoints);
    pressBtn(channelpoints);
  } else {
    console.log("Kein Element mit der angegebenen Klasse gefunden.");
  }
}

function pressBtn(points) {
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
  }, waitingTime * 60000);
}

function resetBlueButtonClickCount() {
  blueButtonClickCount = 0;
}