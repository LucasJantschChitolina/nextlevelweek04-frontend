import React, { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';

import { Container, NumberSection, Number, CountDownButton, CountDownButtonActive } from './styles';

let countdownTimeout: NodeJS.Timeout;

const Countdown: React.FC = () => {
  const {startNewChallenge} = useContext(ChallengesContext)

  const [time, setTime] = useState(0.1 * 60)
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  function startCountDown(){
    setIsActive(true);
  }

  function resetCountDown(){
    clearTimeout(countdownTimeout);
    setIsActive(false);
  }

  useEffect(() => {
    if (isActive && time > 0) {
        countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000)
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      setTime(0.1 * 60);
      startNewChallenge();
    }
  },[isActive, time])

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
