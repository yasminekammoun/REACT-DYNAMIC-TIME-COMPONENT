import React from 'react';

const Timer=(props)=>{
    
   let Hours=Math.floor((props.data/360000)%24) 
   let Minutes=Math.floor((props.data/60000)%60)
    let Seconds=Math.floor((props.data/1000)%60) 
    return (<div className="time"><div className="time-items"><p>{Hours<=9 ? '0'+ Hours :Hours}</p><span >Hours</span></div> <div className="time-items"><p>  :{Minutes<=9 ? '0'+ Minutes :Minutes}</p><span>Minutes</span></div><div className="time-items"><p>   :{Seconds<=9 ? '0'+ Seconds :Seconds}</p><span>  Seconds</span></div></div>)
          
}
export default Timer