// React & Etc
import React from 'react';
import { useSelector } from 'react-redux';
import { FaUserCircle } from 'react-icons/fa';

// Styles
import { Link } from 'react-router-dom';
import {
  NavBar,
  NavMenu,
  NavMenuItem,
  NavLink,
  NavLogo,
  NavContainer,
  UserContainer,
  UserLink,
} from './styles';

import LogoIcon from '../../../assets/logo.png';
import ProfileIcon from '../../../assets/userimg.png';

export default function Nav() {
  // TESTE!!! REMOVER DEPOIS!!!!
  /*   const botaoClicado = useSelector((state) => state.example.botaoClicado); */
  // TESTE!!! REMOVER DEPOIS!!!!

  return (
    <NavContainer>
      <NavBar>
        <Link to="/">
          <NavLogo src={LogoIcon} />
        </Link>
        {/* TESTE!!! REMOVER DEPOIS!!!! */}
        {/*         {botaoClicado ? 'True' : 'False'} */}
        {/* TESTE!!! REMOVER DEPOIS!!!! */}
        <NavMenu>
          <NavMenuItem>
            <NavLink to="/">Início</NavLink>
          </NavMenuItem>
          <NavMenuItem>
            <NavLink to="/about">Sobre</NavLink>
          </NavMenuItem>
        </NavMenu>
        <UserContainer>
          <UserLink to="/user">
            <FaUserCircle className="UserIcon" color="black" opacity="85%" />
          </UserLink>
        </UserContainer>
      </NavBar>
    </NavContainer>
  );
}
