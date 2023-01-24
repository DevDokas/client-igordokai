// React & Etc
import React from 'react';

// Components
import AboutMe from './components/About';
import Techs from './components/Techs';
import Portfolio from './components/Portfolio';
import { Container, AboutBody } from './styles';
import Nav from '../components/Nav/Nav';

export default function AboutApp() {
  return (
    <>
      <Nav />
      <Container className="about-container">
        <AboutBody>
          <AboutMe />
          <Techs />
          <Portfolio />
        </AboutBody>
      </Container>
    </>
  );
}
