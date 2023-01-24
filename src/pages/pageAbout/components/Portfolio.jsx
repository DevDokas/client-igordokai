import React from 'react';

import {
  ContainerPortfolio,
  PortfolioCard,
  PortfolioImage,
  PortfolioLabel,
  PortfolioAbout,
  CardText,
} from '../styles';

import IgorDCard from '../../../assets/facebookcard.jpg';
import BZMCard from '../../../assets/bzmcard.jpg';

export default function Portfolio() {
  return (
    <ContainerPortfolio className="portfolio-container">
      <PortfolioCard
        className="portfolio-card"
        href="https://site-bzm-react-js-nonpwa.vercel.app/"
      >
        <PortfolioImage src={BZMCard} />
        <CardText>
          <PortfolioLabel>BZM Textil</PortfolioLabel>
          <PortfolioAbout>
            E-commerce de tecidos, rendas e aviamentos
          </PortfolioAbout>
        </CardText>
      </PortfolioCard>
      <PortfolioCard className="portfolio-card" href="">
        <PortfolioImage src={IgorDCard} />
        <CardText>
          <PortfolioLabel>Novo projeto</PortfolioLabel>
          <PortfolioAbout>Aguarde por novidades. 😝</PortfolioAbout>
        </CardText>
      </PortfolioCard>
      <PortfolioCard className="portfolio-card" href="">
        <PortfolioImage src={IgorDCard} />
        <CardText>
          <PortfolioLabel>Novo projeto</PortfolioLabel>
          <PortfolioAbout>Aguarde por novidades. 😝</PortfolioAbout>
        </CardText>
      </PortfolioCard>
      <PortfolioCard className="portfolio-card" href="">
        <PortfolioImage src={IgorDCard} />
        <CardText>
          <PortfolioLabel>Novo projeto</PortfolioLabel>
          <PortfolioAbout>Aguarde por novidades. 😝</PortfolioAbout>
        </CardText>
      </PortfolioCard>
    </ContainerPortfolio>
  );
}
