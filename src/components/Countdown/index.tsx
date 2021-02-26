import React, { useState, useEffect, useContext } from 'react';
import { CountdownContext } from '../../contexts/CountdownContext';

import { Container, NumberSection, Number, CountDownButton, CountDownButtonActive } from './styles';

const Countdown: React.FC = () => {
  const {minutes, seconds, hasFinished, isActive, startCountDown, resetCountDown} = useContext(CountdownContext)

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

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

    { hasFinished ? (
      <CountDownButton 
      disabled
    >
      Ciclo Encerrado
    </CountDownButton>
    ) : (
      <>
      {isActive ? (

        <CountDownButtonActive 
          type="button"
          onClick={resetCountDown}    
        >
          Abandonar ciclo
        </CountDownButtonActive>
      ) : (
        <CountDownButton 
          type="button"
          onClick={startCountDown}    
        >
          Iniciar um ciclo
        </CountDownButton>
      )}
      </>
    )}

    
    </>
  );
};

export default Countdown;
