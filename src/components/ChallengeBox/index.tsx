import React, { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';

import { Container, ChallengeNotActive, Rules, ChallengeActive, CompletedButton, FailedButton, Footer, Main, Header} from './styles';

const ChallengeBox: React.FC = () => {
  const {activeChallenge, resetChallenge} = useContext(ChallengesContext)

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
              onClick={resetChallenge}
              >Falhei
              </FailedButton>
              
            <CompletedButton 
              type="button"
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
