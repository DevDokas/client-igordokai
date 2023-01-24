import React from 'react';

import {
  ContainerAboutMe,
  AboutMeImage,
  AboutMeSection,
  AboutMeLabel,
  AboutMeText,
  AboutMeParagraph,
  SocialMedias,
  SocialMediasList,
  SocialMediaItem,
  SocialMediaLink,
  SocialMediaIcon,
} from '../styles';

import GithubIcon from '../../../assets/github.png';
import LinkedinIcon from '../../../assets/linkedin.png';
import ImageAboutMe from '../../../assets/aboutme.jpg';

export default function AboutMe() {
  return (
    <ContainerAboutMe className="c1">
      <AboutMeImage src={ImageAboutMe} />
      <AboutMeSection className="c2">
        <AboutMeLabel>Sobre mim</AboutMeLabel>
        <AboutMeText>
          <AboutMeParagraph>
            Nascido em 12/01/1999, na cidade de Divinópolis, Minas Gerais, me
            formei no Ensino Médio no ano de 2016 no Colégio Integral (Centro de
            Educação Integral) e na Faculdade de Direito, na Universidade de
            Itaúna, no ano de 2022.
          </AboutMeParagraph>
          <AboutMeParagraph>
            Com habilidades e conhecimentos práticos e autodidatas na area da
            computação e programação, atualmente focado na area de
            Desenvolvimento Web e com interesse na área de Desenvolvimento
            Mobile, trabalhando com tecnologias como JavaScript, React.Js, React
            Native, Nginx, Ubuntu Server e semelhantes.
          </AboutMeParagraph>
          <AboutMeParagraph>
            Entusiasta de tecnologias, hardwares, softwares e games desde novo,
            tendo certa intimidade com tais temas. Atualmente ingressando no
            mercado de trabalho da Área da tecnologia como Desenvolvedor Júnior.
          </AboutMeParagraph>
        </AboutMeText>
        <SocialMedias>
          <SocialMediasList>
            <SocialMediaItem>
              <SocialMediaLink
                href="https://github.com/DevDokas"
                target="_blank"
                rel="noreferrer"
              >
                <SocialMediaIcon src={GithubIcon} />
              </SocialMediaLink>
            </SocialMediaItem>
            <SocialMediaItem>
              <SocialMediaLink
                href="https://www.linkedin.com/in/igor-nogueira-gomes-de-sousa-56a37125b/"
                target="_blank"
                rel="noreferrer"
              >
                <SocialMediaIcon src={LinkedinIcon} />
              </SocialMediaLink>
            </SocialMediaItem>
          </SocialMediasList>
        </SocialMedias>
      </AboutMeSection>
    </ContainerAboutMe>
  );
}
