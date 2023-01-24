// React & Etc
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
// Styles
import { HomeContainer, TypeAnimationContainer } from './styles';
import AnimatedBackground from '../components/AnimatedBackground/AnimatedBackground';

// Components
import Nav from '../components/Nav/Nav';

export default function Home() {
  return (
    <>
      <Nav />
      <HomeContainer>
        <AnimatedBackground />
        <TypeAnimationContainer>
          <TypeAnimation
            sequence={[
              'Bem-vindos!',
              1750,
              'Eu sou o Igor Dokai',
              1750,
              'Eu sou Desenvolvedor Frontend',
              1750,
              'Eu sou Desenvolvedor Backend',
              1750,
              'Eu sou Desenvolvedor Fullstack',
              1750,
              'Como posso te ajudar hoje? 😉',
              1500,
            ]}
            wrapper="div"
            cursor
            repeat={Infinity}
            style={{ fontSize: '5vh', lineHeight: '7vh' }}
          />
        </TypeAnimationContainer>
      </HomeContainer>
    </>
  );
}
