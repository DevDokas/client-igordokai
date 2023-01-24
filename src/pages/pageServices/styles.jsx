import styled from 'styled-components';

import { Link } from 'react-router-dom';

import * as Color from '../../config/colors';

export const ServicesAppContainer = styled.section`
  width: 70vw;
  height: 100vh;
  margin-top: 20vh;

  .button {
    font-size: 1.5vh;
  }

  .DeleteConfirm {
    margin-top: -0.5vh;
    font-size: 1.5vh;
    cursor: pointer;
  }
`;

export const ServicesContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 75vh;
  border-radius: 3vh;
  background-color: ${Color.SectionColor};
`;

export const OrderButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 7vh;
  width: 100%;
`;

export const OrderButton = styled(Link)`
  display: flex;
  justify-content: center;
  text-decoration: none;
  color: ${Color.TextDarkColor};
  height: 3.5vh;
  width: 10vw;
  padding: 0.1vh;
  border: 0.2vh solid ${Color.TextDarkColor};
  border-radius: 1vh;

  &:hover {
    color: ${Color.TextColor};
    border: 0;
    background-color: ${Color.TextDarkColor};
  }
`;

export const ServicesSection = styled.section`
  margin-top: 3vh;
  height: 50vh;
`;

export const ServicesBackground = styled.div`
  height: 300vh;
  padding: 1.5vh;
  border-radius: 3vh;
  background-color: ${Color.SectionDarkColor};
`;

export const ListServices = styled.div`
  height: auto;
  width: 30vw;
  display: flex;
  justify-content: space-evenly;
  background-color: ${Color.SectionDarkColor};
  border-bottom: 1px solid ${Color.SectionDarkerColor};
`;

export const ServiceId = styled.span`
  width: 3vw;
`;

export const ServiceLabel = styled.span`
  width: 20vw;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 0.7vw;
  width: 2vw;
  height: 2vh;
`;

export const Button = styled.div`
  margin-top: 0.5vh;
`;
