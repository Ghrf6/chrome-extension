// ============================================================================
// CONFIGURATION
// ============================================================================

const CONFIG = {
  betting: {
    enabled: true,
    percentAmount: 20,
    side: "blue", // "blue" or "pink"
    waitingTimeMinutes: 15
  },
  bonusCollection: {
    enabled: true
  },
  prediction: {
    keyword: "Predict" // Change to 'Predict' if Twitch language is English
  }
};

// ============================================================================
// CONSTANTS
// ============================================================================

const INTERVALS = {
  BONUS_CHECK_MS: 1000,
  BET_CHECK_MS: 2000,
  BUTTON_CLICK_MS: 1000
};

const MILLISECONDS_PER_MINUTE = 60000;
const PERCENTAGE_TO_DECIMAL = 0.001;

const SELECTORS = {
  CHANNEL_POINTS: "ScAnimatedNumber-sc-1iib0w9-0",
  BONUS_BUTTON: "ScCoreButton-sc-ocjdkq-0 ScCoreButtonSuccess-sc-ocjdkq-5 ibtYyW kIlsPe",
  PREDICTION_BUTTON: (side) => `Layout-sc-1xcs6mc-0 gcdnNQ fixed-prediction-button fixed-prediction-button--${side}`
};

// ============================================================================
// STATE
// ============================================================================

let bonusCollectionInterval = null;
let bettingInterval = null;
let buttonClickInterval = null;
let isBettingActive = true;

// ============================================================================
// INITIALIZATION
// ============================================================================

initializeExtension();

// ============================================================================
// MAIN FUNCTIONS
// ============================================================================

/**
 * Initializes the extension by starting enabled features
 */
function initializeExtension() {
  if (CONFIG.bonusCollection.enabled) {
    startBonusCollection();
  }
  
  if (CONFIG.betting.enabled) {
    startBetting();
  }
}

/**
 * Starts the bonus collection interval
 */
function startBonusCollection() {
  bonusCollectionInterval = setInterval(
    collectBonusIfAvailable,
    INTERVALS.BONUS_CHECK_MS
  );
}

/**
 * Starts the betting interval
 */
function startBetting() {
  bettingInterval = setInterval(
    placeBetIfAvailable,
    INTERVALS.BET_CHECK_MS
  );
}

/**
 * Collects bonus channel points if the bonus button is available
 */
function collectBonusIfAvailable() {
  const bonusButton = findBonusButton();
  if (bonusButton) {
    bonusButton.click();
  }
}

/**
 * Finds and returns the bonus button element if available
 * @returns {HTMLElement|null} The bonus button element or null
 */
function findBonusButton() {
  const buttons = document.getElementsByClassName(SELECTORS.BONUS_BUTTON);
  return buttons.length > 0 ? buttons[0] : null;
}

/**
 * Places a bet if the prediction button is available
 */
function placeBetIfAvailable() {
  if (!isBettingActive) {
    return;
  }

  const predictButton = findPredictButton();
  if (!predictButton) {
    return;
  }

  predictButton.click();
  processBetting();
}

/**
 * Finds and returns the predict button element if available
 * @returns {HTMLElement|null} The predict button element or null
 */
function findPredictButton() {
  const buttons = document.getElementsByTagName("button");
  
  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].textContent === CONFIG.prediction.keyword) {
      return buttons[i];
    }
  }
  
  return null;
}

/**
 * Processes the betting logic after clicking the predict button
 */
function processBetting() {
  const predictionButton = findPredictionButton();
  if (!predictionButton) {
    return;
  }

  const betAmount = calculateBetAmount();
  if (betAmount > 0) {
    clickPredictionButtonMultipleTimes(predictionButton, betAmount);
  }
}

/**
 * Finds and returns the prediction button (blue/pink) element if available
 * @returns {HTMLElement|null} The prediction button element or null
 */
function findPredictionButton() {
  const buttons = document.getElementsByClassName(
    SELECTORS.PREDICTION_BUTTON(CONFIG.betting.side)
  );
  return buttons.length > 0 ? buttons[0] : null;
}

/**
 * Calculates the bet amount based on current channel points
 * @returns {number} The calculated bet amount
 */
function calculateBetAmount() {
  const channelPoints = getCurrentChannelPoints();
  if (channelPoints === 0) {
    return 0;
  }

  return Math.floor(
    channelPoints * CONFIG.betting.percentAmount * PERCENTAGE_TO_DECIMAL
  );
}

/**
 * Gets the current channel points from the DOM
 * @returns {number} The current channel points or 0 if not found
 */
function getCurrentChannelPoints() {
  const elements = document.getElementsByClassName(SELECTORS.CHANNEL_POINTS);
  if (elements.length === 0) {
    return 0;
  }

  const pointsText = elements[0].innerHTML;
  return parseInt(pointsText, 10) || 0;
}

/**
 * Clicks the prediction button multiple times and schedules a page reload
 * @param {HTMLElement} button - The prediction button element to click
 * @param {number} clickCount - Number of times to click the button
 */
function clickPredictionButtonMultipleTimes(button, clickCount) {
  isBettingActive = false;
  let currentClickCount = 0;

  const interval = setInterval(() => {
    if (currentClickCount < clickCount) {
      button.click();
      currentClickCount++;
    } else {
      clearInterval(interval);
    }
  }, INTERVALS.BUTTON_CLICK_MS);

  buttonClickInterval = interval;

  schedulePageReload(interval);
}

/**
 * Schedules a page reload after the waiting time
 * @param {number} intervalId - The interval ID to clear before reload
 */
function schedulePageReload(intervalId) {
  const waitTimeMs = CONFIG.betting.waitingTimeMinutes * MILLISECONDS_PER_MINUTE;

  setTimeout(() => {
    clearInterval(intervalId);
    isBettingActive = true;
    location.reload();
  }, waitTimeMs);
}
