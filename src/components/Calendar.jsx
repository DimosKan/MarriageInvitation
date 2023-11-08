import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
// import { GoogleCalendar } from "react-google-calendar-api";
 import { AddToCalendarButton } from 'add-to-calendar-button-react';

const CalendarComponent = () => {
  const [selectedDate, setSelectedDate] = useState(new Date("2023-12-27T18:00:00"));

  const handleDateChange = () => {
    setSelectedDate();
  };

  return (


    <div>
      <Calendar value={selectedDate} onChange={handleDateChange} />
      <add-to-calendar-button
        name="Ο Γάμος της Γιώτας και του Κωνσταντίνου"
        options="'Apple','Google'"
        location="Ιερός Ναός Αγίου Αθανασίου, Θησείο"
        startDate="2023-12-27"
        endDate="2023-12-27"
        startTime="18:00"
        endTime="23:30"
        timeZone="Europe/Athens"
        description = "Ο Γάμος της Γιώτας Γκουτζάνη και του Κωνσταντίνου Δουλγέρη στον ιερό ναό του Αγίου Αθανασίου στο Θησείο στις 6:00 μ.μ."
      ></add-to-calendar-button>
    </div>
  );
};

export default CalendarComponent;
