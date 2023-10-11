import './App.css';
import React, { useState } from "react";
import DatePicker from "react-date-picker";
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

function App() {
  const currDate = new Date();
  const [dateValue, onDateChange] = useState(new Date());
  const [diffValue, onDiffChange] = useState(0);
  const [bool, onBoolChange] = useState(false);

  const handleChange = (e) => {
    // console.log(currDate);
    onDateChange(e);
    const diff = Math.floor((currDate.getMonth() -e.getMonth() + 12 * (currDate.getFullYear() - e.getFullYear()))/12);
    onDiffChange(diff);
    // console.log(diffValue);
  };


  return (
    <div className="App">
      <h1>Age Calculator</h1>
      <div>
      <DatePicker
                  onChange={(e)=>handleChange(e)}
                  value={dateValue}
                  autoFocus={true}
                  className="date-picker"
                  closeCalendar={false}
               />
      </div>
      <br></br>
      <button onClick={() => {onBoolChange(true)}}>Submit</button>
      {
        bool?
        <h2>You are {diffValue} year(s) old.</h2>: null
      }
    </div>
  );
}

export default App;
