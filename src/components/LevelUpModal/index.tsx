import React, { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';

import { Container, Overlay, Header, Strong, Button, Message } from './styles';

const LevelUpModal: React.FC = () => {
  const {level, closeLevelUpModal} = useContext(ChallengesContext)
  return (
    <Overlay>
      <Container>
        <Header>{level}</Header>
        <Strong>Parabéns</Strong>
        <Message>Você alcançou um novo level.</Message>

        <Button 
        type="button"
        onClick={closeLevelUpModal}        
        >
          <img src="/icons/close.svg" alt="Fechar modal"/>
        </Button>
      </Container>
    </Overlay>
  );
};

export default LevelUpModal;
