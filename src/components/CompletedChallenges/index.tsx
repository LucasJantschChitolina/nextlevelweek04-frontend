import React, { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';

import { Container, Text } from './styles';

const CompletedChallenges: React.FC = () => {
  const {challengesCompleted} = useContext(ChallengesContext)

  return (
    <Container>
      <Text>Desafios Completos</Text>
      <span> {challengesCompleted} </span>
    </Container>
  );
};

export default CompletedChallenges;
