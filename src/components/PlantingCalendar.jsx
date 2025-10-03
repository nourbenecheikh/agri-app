import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function PlantingCalendar() {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <h3>Choisis une date de plantation</h3>
      <Calendar onChange={setDate} value={date} />
      <p>Date sélectionnée : {date.toDateString()}</p>
    </div>
  );
}

export default PlantingCalendar;
