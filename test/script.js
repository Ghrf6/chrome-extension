let boni = true;
let gambling = true;

document.addEventListener("DOMContentLoaded", function() {
    var schalter1 = document.getElementById("schalter1");
    var schalter2 = document.getElementById("schalter2");
    
    schalter1.addEventListener("change", function() {
      if (this.checked) {
        // Funktion ausführen, wenn Schalter 1 auf "true" gesetzt ist
        funktionAusfuehren(1);
        boni = true;
        update()
      }else{
        boni = false;
        update()
      }
    });
    
    schalter2.addEventListener("change", function() {
      if (this.checked) {
        // Funktion ausführen, wenn Schalter 2 auf "true" gesetzt ist
        funktionAusfuehren(2);
        gambling = true;
        update()
      }else{
        gambling = false;
        update()
      }
    });

    function update(){
        console.log(boni + " " + gambling)
    }
   if(boni){
        setInterval(clicking, 1000);
    }
    
    function funktionAusfuehren(schalterNummer) {
      // Hier kannst du deine eigene Funktion implementieren, die ausgeführt wird,
      // wenn ein Schalter auf "true" gesetzt ist.
      console.log("Funktion wird ausgeführt für Schalter " + schalterNummer);
    }
  });
  


  function clicking() {
console.log("its working")

      
  }


 