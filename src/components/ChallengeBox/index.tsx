import React, { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { CountdownContext } from '../../contexts/CountdownContext';

import { Container, ChallengeNotActive, Rules, ChallengeActive, CompletedButton, FailedButton, Footer, Main, Header} from './styles';

const ChallengeBox: React.FC = () => {
  const {
    activeChallenge, 
    resetChallenge, 
    completeChallenge
  } = useContext(ChallengesContext)

  const { resetCountDown } = useContext(CountdownContext)

  function handleChallengeComplete(){
    completeChallenge();
    resetCountDown();
  }

  function handleChallengeFailed(){
    resetChallenge();
    resetCountDown();
  }

  return (
    <Container>
      { activeChallenge ? (
        <ChallengeActive>
          <Header> Ganhe {activeChallenge.amount} xp</Header>

          <Main>
             <img src={`icons/${activeChallenge.type}.svg`} alt=""/>
             <strong>Novo Desafio</strong>
             <p>{activeChallenge.description}</p>
          </Main>

          <Footer>
            <FailedButton 
              type="button"
              onClick={handleChallengeFailed}
              >Falhei
              </FailedButton>
              
            <CompletedButton 
              type="button"
              onClick={handleChallengeComplete}
              >Completei
              </CompletedButton>
          </Footer>
        </ChallengeActive>
      ) : (

        <ChallengeNotActive>
        <strong> Finalize um ciclo para receber um novo desafio</strong>
        <Rules>
          <img src="icons/level-up.svg" alt="Level Up"/>
          Avance de level completando desafios
        </Rules>
      </ChallengeNotActive>

      ) }
    </Container>
  );
};

export default ChallengeBox;
