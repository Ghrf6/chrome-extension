> A Chrome extension so that you can watch a stream and don't have to collect the boni every 15 minutes, and additionally, it also automatically bets, so you can leave the tab open and don't have to do anything.

# README Contents
---
1. [How to install](#how-to-install)
2. [How to customice the Extension](#how-to-customice-the-extension)
3. [How the code works](#how-the-code-works)
- [app.js](#appjs)
- [settings.html](#settingshtml)

## How to install
1. Open the terminal und navigate to your wantet destination for example Desktop
2. clone the repo init.
3. Go to your Chrome browser and open the extensions menue

![image](https://github.com/Ghrf6/chrome-extension/assets/111276076/2dde3ff4-766a-4f97-8bcd-af8c817bb007)

4. Activate the developers mode

![image](https://github.com/Ghrf6/chrome-extension/assets/111276076/81d63e74-978b-4cc9-ae95-5a2cb2f72a94)

5. Click on Load Unpaket and select the folder that you coppied from Github
   
![image](https://github.com/Ghrf6/chrome-extension/assets/111276076/d747009c-95c4-494c-8f8e-ac90510ff5a4)

6. Oppen the Stream that you want and let your PC / Laptop mine.

## How to customice the Extension

There are five things you can customise:
1. You can enable or disable that you collect the boni every 15 Minutes.
2. You can enable or disable the betting.
3. You can decide how many percent of your channelpoints are beeing bettet.
4. You can decide how long it should wait until it auto bets agai (usefull for Stream that bet very often)
5. You can decide on which side to bet on (blue or pink) 

## How the code works

The top variabels are the variabels you can customise as you like. The others i wouldntn mess with but if you now waht you are doing feel free...
start() starts the function that is collecting the boni and the function that is betting in an interwall of 1 and 2 seconds. 
clicking() checks every second if there is a boni tho collect if yes it collects it.
bet() looks if there is a bet active if(true) it presses it and starts getChannelpointNumber()
getChannelpointNumber() gets your current channelpoints amount and then starts pressBtn()
pressBtn() click on the bet button on Twitch that you decided (blue or pink) as many times as you want (the percent amount of you channelpoints)


### app.js


### settings.html
