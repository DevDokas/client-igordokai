import styled from 'styled-components';

import * as Color from '../../config/colors';

export const ContainerRegister = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 93vh;
`;

export const FormContainer = styled.div`
  height: 40vh;
  width: 15vw;
  border-radius: 3vh;
  background-image: linear-gradient(
    ${Color.SectionDarkColor},
    ${Color.SectionColor}
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
    display: flex;
    flex-direction: column;
    margin-bottom: 0.5vh;
  }
`;

export const RegisterButton = styled.button`
  height: 5vh;
  margin-top: 2vh;
  background-color: ${Color.SectionDarkColor};
  border: none;
  cursor: pointer;
  display: flex;
  align-self: center;
  font-size: 1rem;
  line-height: 1;
  margin: 20px;
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
