import styled from 'styled-components';
import * as Color from '../../config/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 93vh;

  section {
    @media (min-height: 480px) and (max-height: 500px) and (min-width: 320px) and (max-width: 360px) {
      gap: 30px;
      height: 250px;
      width: 250px;
    }
  }

  input {
    @media (min-height: 480px) and (max-height: 500px) and (min-width: 320px) and (max-width: 360px) {
      height: 25px;
      width: 150px;
    }
  }

  form section {
    @media (min-height: 480px) and (max-height: 500px) and (min-width: 320px) and (max-width: 360px) {
      height: 120px;
    }
  }

  form div {
    width: 150px;
    display: flex;
    justify-content: space-around;
  }
`;

export const ContainerLogin = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2vh;
  height: 25vh;
  width: 15vw;
  border-radius: 3vh;
  background-image: linear-gradient(
    to top,
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.3)
  );
`;

export const PageTitle = styled.h1`
  font-size: 2.5vh;
  height: 3vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 15vw;

  label {
    display: flex;
    flex-direction: column;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2vw;
  height: 3vh;
  width: 15vw;
  margin-top: 2vh;
`;

export const LoginButton = styled.button`
  width: 4vw;
  height: 3vh;
  background-color: ${Color.SectionDarkColor};
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-self: center;
  font-size: 1rem;
  line-height: 1;
  padding: 1.2em 2.8em;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  border-radius: 0.5vh;
  color: ${Color.TextColor};
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: color 150ms ease-in-out;

  &:after {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 100%;
    background: ${Color.ButtonColor};
    z-index: -1;
    transition: width 150ms ease-in-out;
  }

  &:hover {
    color: #fff;
  }

  &:hover:after {
    width: 110%;
  }
`;
