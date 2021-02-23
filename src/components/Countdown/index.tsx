import React, { useState, useEffect } from 'react';

import { Container, NumberSection, Number, CountDownButton } from './styles';

const Countdown: React.FC = () => {
  const [time, setTime] = useState(25 * 60)
  const [active, setActive] = useState(false)

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  function startCountDown(){
    setActive(true);
  }

  useEffect(() => {
    if (active && time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000)
    }
  },[active, time])

  return (
    <>
    <Container>
        <NumberSection>
            <Number>{minuteLeft}</Number>
            <Number>{minuteRight}</Number>
        </NumberSection>
      <span>:</span>
        <NumberSection>
            <Number>{secondLeft}</Number>
            <Number>{secondRight}</Number>
        </NumberSection>
    </Container>
    <CountDownButton 
    type="button"
    onClick={startCountDown}    
    >
      Iniciar um ciclo
    </CountDownButton>
    </>
  );
};

export default Countdown;
