import styled, { createGlobalStyle } from 'styled-components';
import * as Color from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
:root {
  margin: 0;
  padding: 0;
  font-family:  'Poppins', Inter, Avenir, Helvetica, Arial, sans-serif;
  font-size: 10px;
  line-height: 24px;
  font-weight: 400;

  color-scheme: light dark;
  color: ${Color.TextColor};

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-align: center;
  align-items: center;
}

body {
  margin: 0;
  width: 100vw;
  overflow-x: hidden;
  background-image: linear-gradient(black, black, #141414);
}

label{
  font-size: 14px;
}

body .Toastify .Toastify__toast-container .Toastify__toast--success,
body .Toastify .Toastify__toast-container .Toastify__toast--error,
body .Toastify .Toastify__toast-container .Toastify__toast--info,
body .Toastify .Toastify__toast-container .Toastify__toast--warning {
  background: ${Color.primaryDarkColor};
}

input {
    height: 3vh;
    width: 10vw;
    border: none;
    border-radius: 0.3vh;
    outline: none;
    background-color: ${Color.InputBackgroundColor};
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    &:-webkit-autofill,
    &:-webkit-autofill:focus {
      transition: background-color 600000s 0s, color 600000s 0s;
    }
    &[data-autocompleted] {
      background-color: transparent !important;
    }

    &:focus {
      transform: scale(1.1);
    }
  }

  .about-container{
    @media (min-height: 480px) and (max-height: 500px) and (min-width: 320px) and (max-width: 360px) {
      height: 400vh;
      width: 100vw;
      overflow-x: hidden;
    }
  }

  .about-container{
    @media (min-width: 361px) and (max-width: 1430px) {
      height: 200vh;
      width: 100vw;
      overflow-x: hidden;
    }
  }
`;

export const GlobalContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
