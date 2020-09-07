import React, { useState, useEffect, Component } from 'react';
import CountDown from 'react-native-countdown-component';

export function CountdownComponent({time} ) {    

  //const {time} = route;
  console.log(time);
  const [seconds, setSeconds] = useState(time);
  const [isActive, setIsActive] = useState(true);
  const [hue, setHue] = useState('#00ff00');

  useEffect(() => {
    let interval = null;
    if (seconds === 0) {
      setIsActive(false);
      clearInterval(interval);
    } 
    else if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
      if (seconds < 12 && seconds>7){
        setHue('#ff7f50');
      }
      else if (seconds < 7){
        setHue('red');
      }
    }  
    return () => clearInterval(interval);
  }, [isActive, seconds]);
  
  return (
        
        <CountDown
        size={30}
        until={time}
        onFinish={() => alert('Finished')}
        digitStyle={{backgroundColor: '#FFF', borderWidth: 2, borderColor: hue}}
        digitTxtStyle={{color: hue}}
        timeLabelStyle={{color: hue, fontWeight: 'bold'}}
        separatorStyle={{color:hue}}
        timeToShow={['H', 'M', 'S']}
        timeLabels={{h: 'HH', m: 'MM', s: 'SS'}}
        showSeparator
      />     
      
  );
}


