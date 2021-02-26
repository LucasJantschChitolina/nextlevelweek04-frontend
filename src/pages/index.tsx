import React from 'react';

import Head from 'next/head'
import { GetServerSideProps } from 'next';

import Profile from '../components/Profile'
import CompletedChallenges from '../components/CompletedChallenges';
import Countdown from '../components/Countdown';
import ExperienceBar from '../components/ExperienceBar'
import ChallengeBox from '../components/ChallengeBox';

import {CountdownProvider} from '../contexts/CountdownContext';

import { Container } from './styles';
import { ChallengesProvider } from '../contexts/ChallengesContext';

interface HomeProps{
  children?: React.ReactNode;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

const Home: React.FC = (props: HomeProps) => {
  console.log(props)
  return (
    <ChallengesProvider 
    level={props.level}
    currentExperience={props.currentExperience}
    challengesCompleted={props.challengesCompleted}
    >
    <Container>
      <Head>
        <title>Início - move.it</title>
      </Head>
      <ExperienceBar />

      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountdownProvider>
    </Container>
    </ChallengesProvider>
  )
};



export default Home;

export const getServerSideProps:GetServerSideProps = async (ctx) => {

  const {level, currentExperience, challengesCompleted} = ctx.req.cookies;

  return {
    props: {
        level: Number(level),
        currentExperience: Number(currentExperience),
        challengesCompleted: Number(challengesCompleted)
    }
  }
}


