import styled from 'styled-components';
import * as Color from '../../config/colors';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url('https://raw.githubusercontent.com/gist/DevDokas/3dea7d6e3815ea8b5841e5044dbfc794/raw/5455fd06a4a889744ca09518f38978279ffef190/background.svg');
  display: flex;
  justify-content: center;

  @media (min-height: 480px) and (max-height: 500px) and (min-width: 320px) and (max-width: 420px) {
    .c1 {
      margin-top: 300px;
      height: 50vh;
      display: flex;
      flex-direction: column-reverse;
      gap: 5vh;
    }

    .c2 {
      min-height: 350px;
      min-width: 250px;

      label {
        font-size: 15px;
      }

      p {
        width: 200px;
        font-size: 10px;
      }
    }

    .portfolio-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 50px;
      min-height: 1200px;
      min-width: 250px;

      img {
        min-height: 200px;
        min-width: 200px;
      }

      div {
        height: 50px;
        min-width: 200px;
      }
    }

    .portfolio-card {
      height: 250px;
    }
  }

  @media (min-width: 320px) and (max-width: 420px) and (min-height: 600px) and (max-height: 850px) {
    .c1 {
      height: 50vh;
      display: flex;
      flex-direction: column-reverse;
      gap: 5vh;
    }

    .c2 {
      min-height: 350px;
      min-width: 280px;

      label {
        font-size: 15px;
      }

      p {
        width: 200px;
        font-size: 10px;
      }
    }
  }

  @media (min-width: 320px) and (max-width: 420px) and (min-height: 800px) and (max-height: 920px) {
    .c1 {
      margin-top: -225px;
      height: 50vh;
      display: flex;
      flex-direction: column-reverse;
      gap: 5vh;
    }

    .c2 {
      min-height: 350px;
      min-width: 280px;

      label {
        font-size: 15px;
      }

      p {
        width: 200px;
        font-size: 10px;
      }
    }
  }

  @media (min-width: 421px) and (max-width: 720px) {
    .c1 {
      height: 50vh;
      display: flex;
      flex-direction: column-reverse;
      gap: 5vh;
    }

    .c2 {
      min-height: 320px;
      min-width: 280px;

      label {
        font-size: 15px;
      }

      p {
        width: 230px;
        font-size: 10px;
      }
    }
  }
`;

export const AboutBody = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 93vh;
  width: 60vw;
  padding: 5vh;
`;

// About Me

export const ContainerAboutMe = styled.div`
  display: flex;
  justify-content: space-between;
  height: 35vh;
  width: 60vw;
  border-radius: 3vh;
`;

export const AboutMeSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 35vh;
  width: 38vw;
  border-radius: 3vh;
  background-image: linear-gradient(
    to top,
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.3)
  );
`;

export const AboutMeText = styled.div``;

export const AboutMeLabel = styled.label`
  font-size: 2vh;
`;

export const AboutMeParagraph = styled.p`
  text-indent: 2vw;
  text-align: justify;
  font-size: 1.5vh;
  width: 35vw;
  line-height: 1.3;
`;

export const SocialMedias = styled.div`
  width: 5vw;
`;

export const SocialMediasList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style-type: none;
`;

export const SocialMediaItem = styled.li``;

export const SocialMediaLink = styled.a`
  height: 3vh;
  &:hover {
    transform: scale(1.1);
  }
`;

export const SocialMediaIcon = styled.img`
  height: 3vh;
  transition: 0.3s;
  &:hover {
    transform: scale(1.1);
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 35vh;
  width: 20vw;
  min-height: 210px;
  min-width: 210px;
  border-radius: 50%;
  background-image: linear-gradient(
    to top,
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.3)
  );
`;

export const AboutMeImage = styled.img`
  height: 33vh;
  width: 19vw;
  min-height: 200px;
  min-width: 200px;
  border-radius: 50%;
`;

// Technologies

export const ContainerTechnologies = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: space-evenly;
  gap: 4vw;
  height: 7vh;
  width: 60vw;
  border-radius: 3vh;
  background-image: linear-gradient(
    to top,
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0.5)
  );

  .sliderAnimation {
    position: relative;
    animation: slider 300s linear infinite;
    &:hover {
      transform: scale(1.1);
    }

    @keyframes slider {
      0% {
        transform: translateX(-11200%);
      }
      100% {
        transform: translateX(11000%);
      }
    }
  }
`;

export const TechLinks = styled.img`
  height: 5vh;
  padding: 5px 0 0 0;
  animation: slider 180s linear infinite;
  &:hover {
    transform: scale(1.1);
  }

  @keyframes slider {
    0% {
      transform: translateX(-11200%);
    }
    100% {
      transform: translateX(11000%);
    }
  }
`;

// Portfolio

export const ContainerPortfolio = styled.div`
  display: flex;
  justify-content: space-around;
  height: 30vh;
  width: 60vw;
  border-radius: 3vh;
  background-image: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.3)
  );
`;

export const PortfolioCard = styled.a`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  height: 28vh;
  width: 13.5vw;
  color: rgb(14, 14, 14);
  background-color: transparent;

  transition: 0.3s;
  &:hover {
    transform: scale(1.05);
  }
`;

export const PortfolioImage = styled.img`
  height: 20vh;
  width: 13.5vw;
  border-radius: 25px 25px 0 0;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
`;

export const PortfolioLabel = styled.b`
  font-size: 1.5vh;
`;

export const CardText = styled.div`
  height: 7vh;
  width: 13.5vw;
  border-radius: 0 0 3vh 3vh;
  background-color: #ffffff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

export const PortfolioAbout = styled.p`
  padding: 1vh;
  font-size: 1.3vh;
  height: 30px;
  line-height: 1;
`;
