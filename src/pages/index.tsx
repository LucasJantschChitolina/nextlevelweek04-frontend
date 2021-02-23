import React from 'react';

import { ExperienceBar } from "../components/ExperienceBar";

import Profile from '../components/Profile'
import CompletedChallenges from '../components/CompletedChallenges';
import Countdown from '../components/Countdown';

import Head from 'next/head'

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Início - move.it</title>
      </Head>
      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div>

        </div>
      </section>
    </Container>
  )
};

export default Home;


