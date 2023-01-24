import styled from 'styled-components';

import * as Color from '../../config/colors';

export const PageUserEdit = styled.div`
  display: flex;
  justify-content: center;
  width: 75vw;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 45vh;
  width: 30vw;
  border-radius: 3vh;
  background-color: ${Color.SectionDarkColor};

  label {
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-size: 2vh;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1vh;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1vw;
`;

export const SaveButton = styled.button`
  height: 3vh;
  width: 7vw;
  color: ${Color.TextDarkColor};
  background-color: ${Color.primaryColor};
  border: 0;
  border-radius: 0.5vh;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

export const DeleteButton = styled.button`
  height: 3vh;
  width: 7vw;
  color: ${Color.TextDarkColor};
  background-color: ${Color.errorColor};
  border: 0;
  border-radius: 0.5vh;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;
