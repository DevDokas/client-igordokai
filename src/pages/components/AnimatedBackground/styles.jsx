import styled from 'styled-components';

export const BubblesBox = styled.div`
  overflow: visible;
  position: relative;
  display: flex;
  z-index: -2;
`;

export const Bubbles = styled.span`
  -webkit-touch-callout: none; /* iPhone OS, Safari */
  -webkit-user-select: none; /* Chrome, Safari 3 */
  -khtml-user-select: none; /* Safari 2 */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+ */
  user-select: none;
  z-index: -1;
  position: relative;
  height: 1vh;
  width: 0.5vw;
  background: white;
  color: transparent;
  border-radius: 50%;
  margin: 0 4vw 0 2vw;
  box-shadow: 0 0 0 0.2vh rgba(250, 250, 250, 0.5),
    0 0 0 0.4vh rgba(250, 250, 250, 0.3), 0 0 0 0.6vh rgba(250, 250, 250, 0.1);
  animation: animate 1.1s linear infinite;

  @keyframes animate {
    0% {
      transform: translateY(100vh);
    }
    100% {
      transform: translateY(-50vh);
    }
  }
`;

export const Bubbles2 = styled.span`
  -webkit-touch-callout: none; /* iPhone OS, Safari */
  -webkit-user-select: none; /* Chrome, Safari 3 */
  -khtml-user-select: none; /* Safari 2 */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+ */
  user-select: none;
  z-index: -1;
  position: relative;
  height: 1vh;
  width: 0.5vw;
  background: white;
  color: transparent;
  border-radius: 50%;
  margin: 0 4vw 0 2vw;
  box-shadow: 0 0 0 0.2vh rgba(250, 250, 250, 0.5),
    0 0 0 0.4vh rgba(250, 250, 250, 0.3), 0 0 0 0.6vh rgba(250, 250, 250, 0.1);
  animation: animate 1.35s linear infinite;

  @keyframes animate {
    0% {
      transform: translateY(100vh);
    }
    100% {
      transform: translateY(-50vh);
    }
  }
`;

export const Bubbles3 = styled.span`
  -webkit-touch-callout: none; /* iPhone OS, Safari */
  -webkit-user-select: none; /* Chrome, Safari 3 */
  -khtml-user-select: none; /* Safari 2 */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+ */
  user-select: none;
  z-index: -1;
  position: relative;
  height: 1vh;
  width: 0.5vw;
  background: white;
  color: transparent;
  border-radius: 50%;
  margin: 0 4vw 0 2vw;
  box-shadow: 0 0 0 0.2vh rgba(250, 250, 250, 0.5),
    0 0 0 0.4vh rgba(250, 250, 250, 0.3), 0 0 0 0.6vh rgba(250, 250, 250, 0.1);
  animation: animate 0.9s linear infinite;

  @keyframes animate {
    0% {
      transform: translateY(100vh);
    }
    100% {
      transform: translateY(-50vh);
    }
  }
`;

export const BigBubbles = styled.span`
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  z-index: -1;
  position: relative;
  height: 1.5vh;
  width: 0.75vw;
  background: white;
  color: transparent;
  border-radius: 50%;
  margin: 0 4vw 0 3vw;
  box-shadow: 0 0 0 0.5vh rgba(250, 250, 250, 0.5),
    0 0 0 0.9vh rgba(250, 250, 250, 0.3), 0 0 0 1.3vh rgba(250, 250, 250, 0.1);
  animation: animate 1s linear infinite;

  @keyframes animate {
    0% {
      transform: translateY(100vh);
    }
    100% {
      transform: translateY(-50vh);
    }
  }
`;

export const BigBubbles2 = styled.span`
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  z-index: -1;
  position: relative;
  height: 1.5vh;
  width: 0.75vw;
  background: white;
  color: transparent;
  border-radius: 50%;
  margin: 0 4vw 0 3vw;
  box-shadow: 0 0 0 0.5vh rgba(250, 250, 250, 0.5),
    0 0 0 0.9vh rgba(250, 250, 250, 0.3), 0 0 0 1.3vh rgba(250, 250, 250, 0.1);
  animation: animate 1.5s linear infinite;

  @keyframes animate {
    0% {
      transform: translateY(100vh);
    }
    100% {
      transform: translateY(-50vh);
    }
  }
`;

export const BigBubbles3 = styled.span`
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  z-index: -1;
  position: relative;
  height: 1.5vh;
  width: 0.75vw;
  background: white;
  color: transparent;
  border-radius: 50%;
  margin: 0 4vw 0 3vw;
  box-shadow: 0 0 0 0.5vh rgba(250, 250, 250, 0.5),
    0 0 0 0.9vh rgba(250, 250, 250, 0.3), 0 0 0 1.3vh rgba(250, 250, 250, 0.1);
  animation: animate 1.3s linear infinite;

  @keyframes animate {
    0% {
      transform: translateY(100vh);
    }
    100% {
      transform: translateY(-20vh);
    }
  }
`;

export const SmallBubbles = styled.span`
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  z-index: -1;
  position: relative;
  height: 0.3vh;
  width: 0.1vw;
  background: white;
  color: transparent;
  border-radius: 50%;
  margin: 0 2vh 0 3vh;
  box-shadow: 0 0 0 0.1vh rgba(250, 250, 250, 0.5),
    0 0 0 0.2vh rgba(250, 250, 250, 0.3), 0 0 0 0.3vh rgba(250, 250, 250, 0.1);
  animation: animate 1.05s linear infinite;

  @keyframes animate {
    0% {
      transform: translateY(100vh);
    }
    100% {
      transform: translateY(-20vh);
    }
  }
`;

export const SmallBubbles2 = styled.span`
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  z-index: -1;
  position: relative;
  height: 0.3vh;
  width: 0.1vw;
  background: white;
  color: transparent;
  border-radius: 50%;
  margin: 0 2vh 0 3vh;
  box-shadow: 0 0 0 0.1vh rgba(250, 250, 250, 0.5),
    0 0 0 0.2vh rgba(250, 250, 250, 0.3), 0 0 0 0.3vh rgba(250, 250, 250, 0.1);
  animation: animate 0.85s linear infinite;

  @keyframes animate {
    0% {
      transform: translateY(100vh);
    }
    100% {
      transform: translateY(-20vh);
    }
  }
`;

export const SmallBubbles3 = styled.span`
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  z-index: -1;
  position: relative;
  height: 0.3vh;
  width: 0.1vw;
  background: white;
  color: transparent;
  border-radius: 50%;
  margin: 0 2vh 0 3vh;
  box-shadow: 0 0 0 0.1vh rgba(250, 250, 250, 0.5),
    0 0 0 0.2vh rgba(250, 250, 250, 0.3), 0 0 0 0.3vh rgba(250, 250, 250, 0.1);
  animation: animate 1.25s linear infinite;

  @keyframes animate {
    0% {
      transform: translateY(100vh);
    }
    100% {
      transform: translateY(-20vh);
    }
  }
`;
