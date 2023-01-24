import styled from 'styled-components';
import * as Color from '../../../config/colors';

export const ContainerLoading = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3vh;
  z-index: 2;
`;

export const Span = styled.span`
  font-size: 5vh;
  z-index: 3;
`;

export const LoadingAnimation = styled.img`
  height: 10vh;
  z-index: 3;
  opacity: 0.8;
  animation: rotation 5s infinite linear;

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
