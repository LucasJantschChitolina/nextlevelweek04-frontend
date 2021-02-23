import React from 'react';

import { Container, Img,  Strong, Level } from './styles';

const Profile: React.FC = () => {
  return (
    <Container>
      <Img src="https://github.com/LucasJantschChitolina.png" alt="Lucas Chitolina"/>
      <div>
        <Strong>Lucas Chitolina </Strong>
        <Level> 
          <img src="icons/level.svg" alt="Level"/>
          Level 1 
          </Level>
      </div>
    </Container>
  );
};

export default Profile;
