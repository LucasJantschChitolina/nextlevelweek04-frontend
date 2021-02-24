import React, { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';

import { Container, CurrentExperience } from './styles';

const ExperienceBar: React.FC = () => {
    const {currentExperience, experienceToNextLevel} = useContext(ChallengesContext);

    const percentToNextLevel = Math.round((currentExperience * 100) / experienceToNextLevel);

    return (
      <Container> 
          <span>0 xp</span>
          <div>
              <div style={{width:`${percentToNextLevel}%`}}/>

              <CurrentExperience style={{left:`${percentToNextLevel}%`}}>
                  {currentExperience} xp
              </CurrentExperience>
          </div>
          <span>{experienceToNextLevel}</span>
      </Container>
  );
};

export default ExperienceBar;

