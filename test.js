const fs = require('fs');
const path = require('path');

// Erhalte den absoluten Pfad zur settings.json-Datei
const dateiname = 'settings.json';
const dateipfad = path.resolve(__dirname, dateiname);

// Restlicher Code bleibt unverändert...


fs.readFile(dateipfad, 'utf8', (err, daten) => {
  if (err) {
    console.error('Fehler beim Lesen der Datei:', err);
    return;
  }

  try {
    const einstellungen = JSON.parse(daten);

    const boniAktiviert = einstellungen.boni;
    const gamblingAktiviert = einstellungen.gambling;

    console.log('Boni:', boniAktiviert);
    console.log('Gambling:', gamblingAktiviert);
  } catch (err) {
    console.error('Fehler beim Parsen der JSON-Daten:', err);
  }
});

function setBoniToFalse(dateipfad) {
    const einstellungen = require(dateipfad);
    einstellungen.boni = false;
    fs.writeFileSync(dateipfad, JSON.stringify(einstellungen, null, 2));
    console.log('Der Wert von "boni" wurde erfolgreich auf "false" gesetzt.');
  }
  const switchElement = document.getElementById('boniEinsammeln');

switchElement.addEventListener('change', function() {
  if (!this.checked) {
    console.log("hi")
    // Die Funktion wird nur ausgeführt, wenn der Switch auf "false" gesetzt ist
    setBoniToFalse(dateipfad);
  }
});


