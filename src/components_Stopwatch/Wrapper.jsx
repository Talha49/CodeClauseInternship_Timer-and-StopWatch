import React,{useState} from 'react'
import Display from './Display'
import Button from './Button'
import './S_style.css'


const Wrapper = () => {

    const [time, setTime] = useState({ms:0, s:0, m:0, h:0});
    const [interv, setInterv] = useState();
    const [status, setStatus] = useState(0);
    const start = () => {
        run();
        setStatus(1);
        setInterv(setInterval(run, 10));
      };
    
      var updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;
    
      const run = () => {
        if(updatedM === 60){
          updatedH++;
          updatedM = 0;
        }
        if(updatedS === 60){
          updatedM++;
          updatedS = 0;
        }
        if(updatedMs === 100){
          updatedS++;
          updatedMs = 0;
        }
        updatedMs++;
        return setTime({ms:updatedMs, s:updatedS, m:updatedM, h:updatedH});
      };
    
      const stop = () => {
        clearInterval(interv);
        setStatus(2);
      };
    
      const reset = () => {
        clearInterval(interv);
        setStatus(0);
        setTime({ms:0, s:0, m:0, h:0})
      };
    
      const resume = () => start();
    
    
      return (
        <div className="container">
         <div className="box-sec">
              <div className="stopwatch">
                   <Display time={time} />
                   <Button status={status} resume={resume} reset={reset} stop={stop} start={start}/>
              </div>
         </div>
        </div>
      );
    
    
}

export default Wrapper
