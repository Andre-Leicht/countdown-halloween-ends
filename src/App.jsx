import React, { useState, useEffect } from 'react';
import './App.css';
import Clock from './Components/Clock';

function App() {

  const [timerDay, setTimerDay] = useState();
  const [timerHour, setTimerHour] = useState();
  const [timerMin, setTimerMin] = useState();

  let interval;

  const startTimer = () => {
    const countDownDate = new Date("Oct 13, 2022").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now

      const day = Math.floor(distance/ (24 * 60 * 60 * 1000));

      const hour = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60 )
        );

      const min = Math.floor(
        (distance % (60 * 60 * 1000)) / (1000 * 60 )
      );

      if(distance<0) {
        //Parar timer

        clearInterval(interval.current);
      } else {
        // Atualizar timer

        setTimerDay(day);
        setTimerHour(hour);
        setTimerMin(min);
      }
    });
  };
  useEffect(() => {
    startTimer();
  });
  return (
    
    <div className="App">
      <Clock 
      timerDay={timerDay}
      timerHour={timerHour}
      timerMin={timerMin} />
    </div>
  );
}

export default App;
