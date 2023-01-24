// React & Etc
import React from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { get } from 'lodash';

// Components
import Nav from '../components/Nav/Nav';
import Loading from '../components/Loading/Loading';
import * as actions from '../../store/modules/auth/actions';
import {
  Container,
  ContainerLogin,
  LoginButton,
  ButtonContainer,
  Form,
  PageTitle,
} from './styles';

export default function Login(props) {
  const Navigate = useNavigate();
  const Dispatch = useDispatch();

  const prevPath = get(props, 'location.state.prevPath', '/');
  const history = get(props, 'history');

  const isLoading = useSelector((state) => state.auth.isLoading);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    let formErrors = false;

    if (!isEmail(email)) {
      formErrors = true;
      toast.error('E-mail inválido');
    }

    if (password.length < 8 || password.length > 50) {
      formErrors = true;
      toast.error('Senha inválida');
    }

    Dispatch(actions.RequestLogin({ email, password, prevPath, history }));
  };

  if (isLoggedIn === true) {
    Navigate('/user/');
  }

  return (
    <>
      <Loading isLoading={isLoading} />
      <Nav />
      <Container>
        <ContainerLogin>
          <PageTitle>Login</PageTitle>
          <Form onSubmit={handleSubmit}>
            <section>
              <label htmlFor="email">
                Email:
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label htmlFor="password">
                Senha:
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
            </section>
            <ButtonContainer>
              <LoginButton type="submit">Login</LoginButton>
              <LoginButton onClick={() => Navigate('/register')} type="button">
                Register
              </LoginButton>
            </ButtonContainer>
          </Form>
        </ContainerLogin>
      </Container>
    </>
  );
}
