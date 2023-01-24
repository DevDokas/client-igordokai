import styled from 'styled-components';
import { Link, Outlet } from 'react-router-dom';

import * as Color from '../../config/colors';

export const Null = styled.section`
  height: 5vh;
`;

export const ProfileLink = styled(Link)`
  display: flex;
  justify-content: center;
  color: ${Color.TextColor};
  text-decoration: none;
  width: 100%;

  &:hover {
    color: grey;
  }
`;

export const UserContainer = styled.section`
  display: flex;
  height: 90vh;
  width: 70vw;
  border-radius: 3vh;
  background-color: ${Color.SectionColor};
`;

export const HeaderSpace = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 90vh;
  width: 5vw;
  background-color: transparent;
`;

export const ProfileHeader = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 90vh;
  width: 5vw;
  border-radius: 3vh;
  background-image: linear-gradient(
    to right,
    ${Color.SectionDarkColor},
    ${Color.SectionDarkerColor}
  );
  background-color: ${Color.SectionDarkColor};
  transition: 300ms;

  &:hover {
    width: 15vw;
  }
`;

export const ProfileContainer = styled.div`
  height: 10vh;
  display: flex;
  gap: 1vw;
`;

export const TitlePage = styled.h1`
  font-size: 1.5vh;
  width: 100%;
`;

export const ImgContainer = styled.div`
  width: 3vw;
  padding: 0.5vh;
`;

export const UserImg = styled.img`
  height: 5vh;
`;

export const ButtonsContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  width: 7vw;
  height: 10vh;
  font-size: 2vh;
  font-weight: 700;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  transition: 300ms;

  &:hover {
    color: grey;
  }

  &:focus {
    color: black;
  }
`;

export const OutletContainer = styled.div``;

export const MyOutlet = styled(Outlet)``;

export const SignOutContainer = styled.button`
  height: 10vh;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1vw;
  color: ${Color.TextDarkColor};
  background-color: transparent;
  border: 0;
  cursor: pointer;
  &:hover {
    color: grey;
  }
`;

export const SignOutIconContainer = styled.div`
  width: 4vh;
`;

export const SignOutIcon = styled.img`
  height: 3.5vh;
`;

export const SignOutText = styled.p`
  display: flex;
  justify-content: center;
  font-size: 1.5vh;
`;
