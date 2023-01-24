import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SectionColor } from '../../config/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 93vh;
`;

export const Container404 = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 60vh;
  width: 30vw;
  border-radius: 3vh;
  background-color: ${SectionColor};
`;

export const Image404 = styled.img`
  height: 50vh;
`;

export const Warning404 = styled.h2`
  opacity: 90%;
  font-size: 2vh;

  p {
    font-size: 1.5vh;
  }
`;

export const LogoImg = styled.img`
  height: 5vh;
`;

export const LinkTo = styled(Link)`
  height: 5vh;
`;
