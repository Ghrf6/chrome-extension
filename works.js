let boniButton = document.getElementsByClassName("ScCoreButton-sc-ocjdkq-0 ScCoreButtonSuccess-sc-ocjdkq-5 ibtYyW kIlsPe");
let testBtn = document.getElementsByClassName("ScCoreButton-sc-ocjdkq-0 ibtYyW ScButtonIcon-sc-9yap0r-0 iqxxop");
let vorhersagen = document.getElementsByClassName("ScCoreButton-sc-ocjdkq-0 ScCoreButtonPrimary-sc-ocjdkq-1 ibtYyW wgheP");
let blue = document.getElementsByClassName("Layout-sc-1xcs6mc-0 gcdnNQ fixed-prediction-button fixed-prediction-button--blue");
let intervalId;
let interval;

function start() {
  // setInterval(clicking, 1000);
  setInterval(bet, 1000);
}

function clicking() {
  if (boniButton.length > 0) {
    boniButton[0].click();
  }
}

function bet() {
  console.log("betting");
  if (vorhersagen.length > 1) {
    vorhersagen[1].click();
    let count = 0;
    intervalId = setInterval(function () {
      if (blue.length > 0) {
        pressBlue();
        count++;
      }
      if (count > 3) {
        clearInterval(intervalId);
        console.log("stopped");
        setTimeout(resetBlueButtonClickCount, 180000);
      }
    }, 2000);
  }
}


function resetBlueButtonClickCount() {
  blueButtonClickCount = 0;
}


function pressBlue() {
  blue[0].click();
}

start();


/*
// H1-Element erstellen
var heading = document.createElement("h1");
heading.innerHTML = "Dies ist ein H1-Element erstellt mit JavaScript";

// Das H1-Element zum Container hinzufügen
var container = document.getElementsByClassName("Layout-sc-1xcs6mc-0 gpZUGb");
container.appendChild(heading);
*/
