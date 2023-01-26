import styled from 'styled-components';

import * as Color from '../../config/colors';

export const RegisterAppContainer = styled.div`
  position: relative;
  width: 100vw;
  overflow: hidden;

  @media (max-width: 380px) {
    display: flex;
    flex-direction: column;
    justify-content: center;

    .form-container {
      height: 350px;
      width: 250px;
    }

    .form-container h1 {
      font-size: 20px;
    }

    section form {
      height: 350px;
      width: 250px;
    }

    form label {
      font-size: 15px;
    }

    input {
      height: 30px;
      width: 175px;
    }

    .button-container {
      width: 200px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 30px;
    }

    .button-container button {
      font-size: 12px;
      height: 40px;
      width: 75px;
      border-radius: 10px;
    }
  }

  @media (max-width: 380px) and (min-height: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;

    .form-container {
      height: 350px;
      width: 250px;
    }

    .form-container h1 {
      font-size: 20px;
    }

    section form {
      height: 350px;
      width: 250px;
    }

    form label {
      font-size: 15px;
    }

    input {
      height: 30px;
      width: 175px;
    }

    .button-container {
      margin-top: 0;
      width: 200px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 30px;
    }

    .button-container button {
      font-size: 12px;
      height: 40px;
      width: 75px;
      border-radius: 10px;
    }
  }

  @media (min-width: 381px) and (max-width: 576px) {
    display: flex;
    flex-direction: column;
    justify-content: center;

    .form-container {
      height: 400px;
      width: 250px;
    }

    .form-container h1 {
      font-size: 20px;
    }

    section form {
      height: 400px;
      width: 250px;
    }

    form label {
      font-size: 15px;
    }

    input {
      height: 30px;
      width: 175px;
    }

    .button-container {
      margin-top: 0;
      width: 200px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 30px;
    }

    .button-container button {
      font-size: 12px;
      height: 40px;
      width: 90px;
      border-radius: 10px;
    }
  }
`;

export const ContainerRegister = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 40vh;
  width: 15vw;
  border-radius: 3vh;
  background-image: linear-gradient(
    to top,
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.3)
  );
`;

export const PageTitle = styled.h1`
  padding: 2vh;
  font-size: 2.5vh;
`;

export const FormRegister = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  label {
    font-size: 1.3vh;
    display: flex;
    flex-direction: column;
    margin-bottom: 0.5vh;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 1.5vh;
  display: flex;
  flex-direction: column;
  height: 9vh;
  gap: 1vh;
`;

export const RegisterButton = styled.button`
  height: 3.5vh;
  width: 10vw;
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
