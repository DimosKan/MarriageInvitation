import React from "react";

function Information() {
  return (
    <div className="information">
      <h3><p><span id = "cap">Σ</span>ας προσκαλούμε στον γάμο μάς που θα πραγματοποιηθεί στις 27 Δεκεμβρίου 2023 και ώρα 6 στον Ιερό Ναό Αγίου Αθανασίου στην περιοχή Θησείο, Αθήνα.</p></h3>
      <div className="centered"><h2>Κώστας και Γιώτα</h2></div>
      <h4>Οι κουμπάροι</h4>
      <div className="centered">
        <h4><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=100002469777935">Φίλιππος Βουρδουμπάκης </a>
           <span className = "and"> &  </span>  
         <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/christos.panaritis.7"> Χρήστος Παναρίτης</a></h4>
      </div>
      <p>Θα ακολουθήσει γαμήλια δεξίωση στο κέντρο δεξιώσεων <b>"Η Γοργόνα"</b> στην περοχή Νεα Χαλκηδόνα.</p>
      <h5><p>*Παρακαλούμε να μας ενημερώσετε για την παρουσία σας έως τις 18 Δεκεμβρίου 2023:</p><p> Κώστας - <span class = "phonenum">6986623914</span>,</p> <p>Γιώτα - <span class = "phonenum">6972456867</span></p>
      </h5>
      {/*<h5>**Σε περίπτωση που επιθυμείτε να δώσετε ως δώρο χρήματα παραθέτουμε τον κάτωθι τραπεζικό λογαριασμό:</h5>*/}
      <h5>Προαιρετική λίστα γάμου: GR4102600460000390201250571 (Eurobank)</h5>
    </div>
  );
}

export default Information;
