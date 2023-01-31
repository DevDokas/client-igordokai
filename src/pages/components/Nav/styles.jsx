import { Link } from 'react-router-dom';
import styled from 'styled-components';
import * as Color from '../../../config/colors';

export const NavContainer = styled.header`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  width: 100vw;
  z-index: 9999;

  .UserIcon {
    font-size: 4vh;
    transition: 0.3s;

    &:hover {
      transform: scale(1.1);
    }
  }

  @media (min-width: 320px) and (max-width: 1430px) {
    nav {
      height: 10vh;
      width: 100%;
    }
  }

  @media (min-height: 2900px) and (max-height: 3200px) and (min-width: 1300px) and (max-width: 1500px) {
    width: 100vw;
  }
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-around;
  width: 35vw;
  min-width: 320px;
  height: 7vh;
  border-radius: 0.2vh 0.2vh 2vh 2vh;
  background-image: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.3)
  );

  @media (min-height: 2900px) and (max-height: 3200px) and (min-width: 1300px) and (max-width: 1500px) {
    width: 100vw;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  margin-left: 12vw;
`;

export const NavMenuItem = styled.li`
  color: ${Color.TextDarkColor};
  text-decoration: none;
  padding: 0 2vw 0 2vw;
  font-size: 2.3vh;
  transition: 0.3s;
  &:hover {
    transform: scale(1.1);
    color: ${Color.TextColor};
  }
`;

export const NavLink = styled(Link)`
  color: ${Color.TextDarkColor};
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    color: ${Color.TextColor};
  }
`;

export const NavLogo = styled.img`
  height: 4vh;
  will-change: filter;
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const UserLink = styled(Link)`
  height: 4vh;
`;
