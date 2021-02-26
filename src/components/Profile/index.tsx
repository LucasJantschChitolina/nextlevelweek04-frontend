import React, { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';

import { Container, Img,  Strong, Level } from './styles';

const Profile: React.FC = () => {
  const {level} = useContext(ChallengesContext)

  return (
    <Container>
      <Img src="https://github.com/LucasJantschChitolina.png" alt="Lucas Chitolina"/>
      <div>
        <Strong>Lucas Chitolina </Strong>
        <Level> 
          <img src="icons/level.svg" alt="Level"/>
          Level {level} 
          </Level>
      </div>
    </Container>
  );
};

export default Profile;
