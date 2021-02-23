import React from 'react';

import { Container, CurrentExperience } from './styles';

const ExperienceBar: React.FC = () => {
    return (
      <Container> 
          <span>0 xp</span>
          <div>
              <div style={{width:'50%'}}/>

              <CurrentExperience style={{left:'50%'}}>
                  300xp
              </CurrentExperience>
          </div>
          <span>600 xp</span>
      </Container>
  );
};

export default ExperienceBar;

