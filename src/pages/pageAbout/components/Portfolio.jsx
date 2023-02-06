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
import CalculadoraCard from '../../../assets/calculadoracard.jpg';
import ToDoCard from '../../../assets/todocard.jpg';

export default function Portfolio() {
  return (
    <ContainerPortfolio>
      <PortfolioCard
        className="portfolio-card"
        href="https://bzmtextil.vercel.app"
        target="_blank"
      >
        <PortfolioImage src={BZMCard} />
        <CardText>
          <PortfolioLabel>BZM Textil</PortfolioLabel>
          <PortfolioAbout>
            E-commerce de tecidos, rendas e aviamentos
          </PortfolioAbout>
        </CardText>
      </PortfolioCard>
      <PortfolioCard
        className="portfolio-card"
        href="https://calculadora-dokai.vercel.app"
        target="_blank"
      >
        <PortfolioImage src={CalculadoraCard} />
        <CardText>
          <PortfolioLabel>Calculadora</PortfolioLabel>
          <PortfolioAbout>Web App feito usando React Hooks</PortfolioAbout>
        </CardText>
      </PortfolioCard>
      <PortfolioCard
        className="portfolio-card"
        href="https://lista-de-tarefas-dokai.vercel.app"
        target="_blank"
      >
        <PortfolioImage src={ToDoCard} />
        <CardText>
          <PortfolioLabel>Lista de Tarefas</PortfolioLabel>
          <PortfolioAbout>
            Lista de Tarefas usando React Hooks e Local Storage
          </PortfolioAbout>
        </CardText>
      </PortfolioCard>
      <PortfolioCard className="portfolio-card">
        <PortfolioImage src={IgorDCard} />
        <CardText>
          <PortfolioLabel>Novo projeto</PortfolioLabel>
          <PortfolioAbout>Aguarde por novidades. 😝</PortfolioAbout>
        </CardText>
      </PortfolioCard>
    </ContainerPortfolio>
  );
}
