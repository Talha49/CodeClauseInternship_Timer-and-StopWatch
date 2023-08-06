import React, { useEffect, useState } from 'react';
import './Timer.css';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [timer, setTimer] = useState(null); 

  useEffect(() => {
   
    const newTimer = setInterval(() => {
      if (seconds === 59) {
        setMinutes((prevMinutes) => prevMinutes + 1);
        setSeconds(0);
      } else {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }
    }, 1000);

    setTimer(newTimer);


    return () => clearInterval(newTimer);
  }, [seconds]);

  const pause = () => {
   
    clearInterval(timer);
  };

  const restart = () => {
 
    setMinutes(0);
    setSeconds(0);
  };

;

  return (
    <div className="timer">
      <div className="box">
        <div className="timer-box">
          <h1>Digital Timer</h1>
          <h2>
            {minutes < 10 ? '0' + minutes : minutes}:{seconds < 10 ? '0' + seconds : seconds}
          </h2>

          <div>
            <button className='btn' onClick={restart}>Restart</button>
            <button className='btn' onClick={pause}>Pause</button>
            
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Timer;
