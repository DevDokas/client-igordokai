import styled from 'styled-components';
import * as Color from '../../config/colors';

export const LoginAppContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  @media (max-width: 350px) {
    .login-container {
      display: flex;
      flex-direction: column;
      gap: 5vh;
      height: 250px;
      width: 250px;

      h1 {
        font-size: 25px;
      }

      form {
        display: flex;
        flex-direction: column;
        height: 200px;
      }

      form section {
        height: 130px;
      }

      label {
        font-size: 15px;
      }

      input {
        height: 30px;
        width: 175px;
      }

      form div {
        display: flex;
        justify-content: center;
        gap: 30px;
        height: 50px;
        width: 250px;
      }

      form button {
        border-radius: 10px;
        height: 40px;
        width: 75px;
        font-size: 15px;
      }
    }
  }

  @media (min-width: 351px) and (max-width: 576px) {
    .login-container {
      display: flex;
      flex-direction: column;
      gap: 5vh;
      height: 350px;
      width: 250px;

      h1 {
        font-size: 30px;
      }

      form {
        display: flex;
        flex-direction: column;
        height: 200px;
      }

      form section {
        height: 130px;
      }

      label {
        font-size: 20px;
      }

      input {
        height: 30px;
        width: 175px;
      }

      form div {
        display: flex;
        justify-content: center;
        gap: 30px;
        height: 50px;
        width: 250px;
      }

      form button {
        border-radius: 10px;
        height: 40px;
        width: 75px;
        font-size: 15px;
      }
    }
  }
`;

export const ContainerLogin = styled.div`
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

  section {
    display: flex;
    flex-direction: column;
    gap: 1.5vh;
    height: 10vh;
  }

  label {
    font-size: 1.5vh;
    display: flex;
    flex-direction: column;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  height: 3vh;
  gap: 1vw;
  margin-top: 3.5vh;
`;

export const Button = styled.button`
  height: 3vh;
  width: 4.5vw;
  font-size: 1vh;
  font-weight: 500;
  border: 0;
  border-radius: 0.3vh;
  color: ${Color.TextColor};
  cursor: pointer;
  background-color: ${Color.SectionDarkerColor};
  transition: 0.1s;

  &:hover {
    font-weight: 700;
    transform: scale(1.1);
    border-bottom: 0.3vh solid ${Color.primaryColor};
    transition: 0.1s;
  }
`;
