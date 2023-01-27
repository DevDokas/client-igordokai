import styled from 'styled-components';
import * as Color from '../../config/colors';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background-image: url('https://raw.githubusercontent.com/gist/DevDokas/3dea7d6e3815ea8b5841e5044dbfc794/raw/5455fd06a4a889744ca09518f38978279ffef190/background.svg');
  display: flex;
  justify-content: center;

  @media (min-width: 300px) and (max-width: 450px) and (min-height: 460px) and (max-height: 550px) {
    height: 2300px;
    width: 100vw;
    overflow: hidden;
  }

  @media (min-height: 501px) and (max-height: 970px) and (min-width: 361px) and (max-width: 980px) {
    height: 2400px;
    width: 100vw;
    overflow: hidden;
  }

  @media (min-height: 700px) and (max-height: 800px) and (min-width: 350px) and (max-width: 450px) {
    height: 2400px;
    width: 100vw;
    overflow: hidden;
  }
`;

export const AboutBody = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 93vh;
  width: 60vw;
  padding: 5vh;

  @media (min-width: 300px) and (max-width: 450px) and (min-height: 460px) and (max-height: 550px) {
    height: 2000px;
    width: 320px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
  }

  @media (min-height: 501px) and (max-height: 970px) and (min-width: 361px) and (max-width: 980px) {
    height: 2400px;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 60px;
  }

  @media (min-height: 700px) and (max-height: 800px) and (min-width: 350px) and (max-width: 450px) {
    height: 2400px;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 60px;
  }
`;

// About Me

export const ContainerAboutMe = styled.div`
  display: flex;
  justify-content: space-between;
  height: 35vh;
  width: 60vw;
  border-radius: 3vh;

  @media (min-width: 300px) and (max-width: 450px) and (min-height: 460px) and (max-height: 550px) {
    margin-top: 500px;
    height: 50vh;
    display: flex;
    flex-direction: column-reverse;
    gap: 50px;
  }

  @media (min-height: 501px) and (max-height: 970px) and (min-width: 361px) and (max-width: 980px) {
    margin-top: 350px;
    height: 500px;
    display: flex;
    flex-direction: column-reverse;
    gap: 50px;
  }

  @media (min-height: 700px) and (max-height: 800px) and (min-width: 350px) and (max-width: 450px) {
    margin-top: 350px;
    height: 500px;
    display: flex;
    flex-direction: column-reverse;
    gap: 50px;
  }
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

  @media (min-width: 300px) and (max-width: 450px) and (min-height: 460px) and (max-height: 550px) {
    height: 600px;
    width: 250px;
    gap: 20px;
    padding-top: 15px;
    padding-bottom: 15px;
  }

  @media (min-height: 501px) and (max-height: 970px) and (min-width: 361px) and (max-width: 980px) {
    height: 500px;
    width: 300px;
    gap: 20px;
    padding-top: 15px;
    padding-bottom: 15px;
  }

  @media (min-height: 700px) and (max-height: 800px) and (min-width: 350px) and (max-width: 450px) {
    height: 500px;
    width: 300px;
    gap: 20px;
    padding-top: 15px;
    padding-bottom: 15px;
  }
`;

export const AboutMeText = styled.div``;

export const AboutMeLabel = styled.label`
  font-size: 2vh;

  @media (min-width: 300px) and (max-width: 450px) and (min-height: 460px) and (max-height: 550px) {
    font-size: 15px;
    font-weight: 600;
  }

  @media (min-height: 501px) and (max-height: 970px) and (min-width: 361px) and (max-width: 980px) {
    font-size: 20px;
    font-weight: 600;
  }

  @media (min-height: 700px) and (max-height: 800px) and (min-width: 350px) and (max-width: 450px) {
    font-size: 20px;
    font-weight: 600;
  }
`;

export const AboutMeParagraph = styled.p`
  text-indent: 2vw;
  text-align: justify;
  font-size: 1.5vh;
  width: 35vw;
  line-height: 1.3;

  @media (min-width: 300px) and (max-width: 450px) and (min-height: 460px) and (max-height: 550px) {
    width: 200px;
    font-size: 11px;
    font-weight: 600;
  }

  @media (min-height: 501px) and (max-height: 970px) and (min-width: 361px) and (max-width: 980px) {
    width: 240px;
    font-size: 12px;
    font-weight: 600;
  }

  @media (min-height: 700px) and (max-height: 800px) and (min-width: 350px) and (max-width: 450px) {
    width: 240px;
    font-size: 12px;
    font-weight: 600;
  }
`;

export const SocialMedias = styled.div`
  width: 5vw;

  @media (min-width: 300px) and (max-width: 450px) and (min-height: 460px) and (max-height: 550px) {
    height: 50px;
    width: 250px;
  }

  @media (min-height: 501px) and (max-height: 970px) and (min-width: 361px) and (max-width: 980px) {
    height: 50px;
    width: 300px;
  }

  @media (min-height: 700px) and (max-height: 800px) and (min-width: 350px) and (max-width: 450px) {
    height: 50px;
    width: 300px;
  }
`;

export const SocialMediasList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style-type: none;

  @media (min-width: 300px) and (max-width: 450px) and (min-height: 460px) and (max-height: 550px) {
    margin-top: 15px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 50px;
    list-style-type: none;
  }

  @media (min-height: 501px) and (max-height: 970px) and (min-width: 361px) and (max-width: 980px) {
    margin-top: 15px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 50px;
    list-style-type: none;
  }

  @media (min-height: 700px) and (max-height: 800px) and (min-width: 350px) and (max-width: 450px) {
    margin-top: 15px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 50px;
    list-style-type: none;
  }
`;

export const SocialMediaItem = styled.li``;

export const SocialMediaLink = styled.a`
  height: 3vh;
  &:hover {
    transform: scale(1.1);
  }

  @media (min-width: 300px) and (max-width: 450px) and (min-height: 460px) and (max-height: 550px) {
    height: 30px;
  }

  @media (min-height: 501px) and (max-height: 970px) and (min-width: 361px) and (max-width: 980px) {
    height: 30px;
  }

  @media (min-height: 700px) and (max-height: 800px) and (min-width: 350px) and (max-width: 450px) {
    height: 30px;
  }
`;

export const SocialMediaIcon = styled.img`
  height: 3vh;
  transition: 0.3s;
  &:hover {
    transform: scale(1.1);
  }

  @media (min-width: 300px) and (max-width: 450px) and (min-height: 460px) and (max-height: 550px) {
    height: 30px;
  }

  @media (min-height: 501px) and (max-height: 970px) and (min-width: 361px) and (max-width: 980px) {
    height: 30px;
  }

  @media (min-height: 700px) and (max-height: 800px) and (min-width: 350px) and (max-width: 450px) {
    height: 30px;
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

    @keyframes slider {
      0% {
        transform: translateX(-11200%);
      }
      100% {
        transform: translateX(11000%);
      }
    }
  }

  @media (min-width: 300px) and (max-width: 450px) and (min-height: 460px) and (max-height: 550px) {
    height: 40px;
    width: 250px;
    display: flex;
    justify-content: space-evenly;
    gap: 20px;

    a {
      height: 35px;
    }

    img {
      height: 30px;
    }
  }

  @media (min-height: 501px) and (max-height: 970px) and (min-width: 361px) and (max-width: 980px) {
    height: 60px;
    width: 300px;
    display: flex;
    justify-content: space-evenly;
    gap: 30px;

    a {
      height: 45px;
    }

    img {
      height: 45px;
    }
  }

  @media (min-height: 700px) and (max-height: 800px) and (min-width: 350px) and (max-width: 450px) {
    height: 60px;
    width: 300px;
    display: flex;
    justify-content: space-evenly;
    gap: 30px;

    a {
      height: 45px;
    }

    img {
      height: 45px;
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

  @media (min-width: 300px) and (max-width: 450px) and (min-height: 460px) and (max-height: 550px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 50px;
    min-height: 1200px;
    min-width: 250px;
  }

  @media (min-height: 501px) and (max-height: 970px) and (min-width: 361px) and (max-width: 980px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 40px;
    height: 1250px;
    width: 300px;
  }

  @media (min-height: 700px) and (max-height: 800px) and (min-width: 350px) and (max-width: 450px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 40px;
    height: 1250px;
    width: 300px;
  }
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

  @media (min-width: 300px) and (max-width: 450px) and (min-height: 460px) and (max-height: 550px) {
    height: 250px;
    width: 200px;
  }

  @media (min-height: 501px) and (max-height: 970px) and (min-width: 361px) and (max-width: 980px) {
    height: 270px;
    width: 250px;
  }

  @media (min-height: 700px) and (max-height: 800px) and (min-width: 350px) and (max-width: 450px) {
    height: 270px;
    width: 250px;
  }
`;

export const PortfolioImage = styled.img`
  height: 20vh;
  width: 13.5vw;
  border-radius: 25px 25px 0 0;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);

  @media (min-width: 300px) and (max-width: 450px) and (min-height: 460px) and (max-height: 550px) {
    height: 200px;
    width: 200px;
  }

  @media (min-height: 501px) and (max-height: 970px) and (min-width: 361px) and (max-width: 980px) {
    height: 200px;
    width: 250px;
  }

  @media (min-height: 700px) and (max-height: 800px) and (min-width: 350px) and (max-width: 450px) {
    height: 200px;
    width: 250px;
  }
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

  @media (min-width: 300px) and (max-width: 450px) and (min-height: 460px) and (max-height: 550px) {
    height: 50px;
    width: 200px;
  }

  @media (min-height: 501px) and (max-height: 970px) and (min-width: 361px) and (max-width: 980px) {
    height: 70px;
    width: 250px;
  }

  @media (min-height: 700px) and (max-height: 800px) and (min-width: 350px) and (max-width: 450px) {
    height: 70px;
    width: 250px;
  }
`;

export const PortfolioAbout = styled.p`
  padding: 1vh;
  font-size: 1.3vh;
  height: 30px;
  line-height: 1;

  @media (min-width: 300px) and (max-width: 450px) and (min-height: 460px) and (max-height: 550px) {
    height: 250px;
  }

  @media (min-height: 501px) and (max-height: 970px) and (min-width: 361px) and (max-width: 980px) {
    height: 250px;
  }

  @media (min-height: 700px) and (max-height: 800px) and (min-width: 350px) and (max-width: 450px) {
    height: 250px;
  }
`;
