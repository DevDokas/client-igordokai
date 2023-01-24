import styled from 'styled-components';
import * as Color from '../../config/colors';

export const PageUserContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 75vw;
`;

export const UserContainer = styled.div`
  top: 0;
  left: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: ${Color.SectionDarkColor};
  height: 45vh;
  width: 30vw;
  border-radius: 3vh;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5vh;
  background-color: ${Color.SectionDarkerColor};
  border-radius: 1vh;
  padding: 1.5vh;
`;

export const PageTitle = styled.h1`
  font-size: 2vh;
`;

export const Label = styled.label`
  font-size: 1.5vh;
  width: 5vw;
`;

export const InfoContainer = styled.div`
  gap: 0.5vw;
  display: flex;
  width: 15vw;
`;

export const UserInfoContainer = styled.span`
  font-size: 1.5vh;
  width: 10vw;
  overflow: hidden;
`;

export const PasswordContainer = styled.div`
  font-size: 1.5vh;
  gap: 0.5vw;
  width: 100%;
  display: flex;
`;

export const PasswordViewerContainer = styled.div`
  display: flex;
`;

export const PasswordTitleContainer = styled.div`
  gap: 0.5vw;
  display: flex;
`;

export const PasswordViewer = styled.img`
  height: 2vh;
`;

export const ShowPassword = styled.div`
  display: flex;
  width: 9vw;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1vw;
`;

export const EditButton = styled.button`
  height: 3vh;
  width: 10vw;
  color: ${Color.TextDarkColor};
  background-color: ${Color.primaryColor};
  border: 0;
  border-radius: 0.5vh;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    -webkit-box-shadow: 0px 0px 1vh 0.1vh ${Color.primaryColor};
    -moz-box-shadow: 0px 0px 1vh 0.1vh ${Color.primaryColor};
    box-shadow: 0px 0px 1vh 0.1vh ${Color.primaryColor};
  }
`;

export const DeleteButton = styled.button`
  height: 3vh;
  width: 10vw;
  color: ${Color.TextDarkColor};
  background-color: ${Color.errorColor};
  border: 0;
  border-radius: 0.5vh;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    -webkit-box-shadow: 0px 0px 1vh 0.1vh ${Color.errorColor};
    -moz-box-shadow: 0px 0px 1vh 0.1vh ${Color.errorColor};
    box-shadow: 0px 0px 1vh 0.1vh ${Color.errorColor};
  }
`;
