// React & Etc
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Modal from 'react-modal';

// Components

import GlobalStyles, { GlobalContainer } from './styles/GlobalStyles';

import AppRoutes from './routes';

Modal.setAppElement('#root');

export default function App() {
  return (
    <Router>
      <GlobalContainer>
        <AppRoutes />
      </GlobalContainer>
      <GlobalStyles />
      <ToastContainer autoClose={5000} />
    </Router>
  );
}
