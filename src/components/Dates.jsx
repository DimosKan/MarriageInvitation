
import React from "react";
import CalendarComponent from "./Calendar.jsx"

function Dates() {
  return (
    <div className="dates">
      <h2>Ημερομηνία Γάμου</h2>
      <CalendarComponent />
      <p>27/12/2023 Ώρα 18:00</p>
      <p>Στον ιερό ναό Αγίου Αθανασίου</p>
      <p>Θησείο, Αθήνα, Ελλάδα</p>
      <p>Θα χαρούμε πολύ να παρευρεθείτε!</p>
      <div id="names">
        <span id="gg"> Γιώτα Γκουτζάνη</span>
        <span id="and"> & </span>
        <span id="kd"> Κώστας Δουλγέρης</span>
      </div>
    </div>
  );
}

export default Dates;

