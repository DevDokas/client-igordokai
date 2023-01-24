import React from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { get } from 'lodash';
import { useNavigate } from 'react-router-dom';
import axios from '../../services/axios';

import {
  ContainerRegister,
  FormContainer,
  FormRegister,
  PageTitle,
  RegisterButton,
} from './styles';
import Nav from '../components/Nav/Nav';
import Loading from '../components/Loading/Loading';

export default function Register() {
  const navigate = useNavigate();

  const [nome, setNome] = React.useState('');
  const [sobrenome, setSobrenome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    let formErrors = false;

    if (nome.length < 3 || nome.length > 50) {
      formErrors = true;
      toast.error('Campo nome deve ter entre 3 e 50 caracteres');
    }

    if (sobrenome.length < 8 || sobrenome.length > 50) {
      formErrors = true;
      toast.error('Campo sobrenome deve ter entre 3 e 80 caracteres');
    }

    if (!isEmail(email)) {
      formErrors = true;
      toast.error('E-mail inválido');
    }

    if (password.length < 8 || password.length > 50) {
      formErrors = true;
      toast.error('Campo senha deve ter entre 8 e 50 caracteres');
    }

    if (formErrors) return;

    setIsLoading(true);

    // TODO: PASSAR PARA O SAGA

    try {
      await axios.post('/user/register', {
        nome,
        sobrenome,
        email,
        password,
      });

      toast.success('Seu cadastro foi realizado com sucesso!');
      setIsLoading(false);
      navigate('/login');
    } catch (e) {
      get(e, 'response.status', 0);
      const errors = get(e, 'response.data.errors', []);

      errors.map((error) => toast.error(error));
      setIsLoading(false);
    }
  }

  return (
    <>
      <Loading isLoading={isLoading} />
      <Nav />
      <ContainerRegister>
        <FormContainer>
          <PageTitle>Registrar-se</PageTitle>
          <FormRegister onSubmit={handleSubmit}>
            <label htmlFor="nome">
              Nome:
              <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </label>
            <label htmlFor="sobrenome">
              Sobrenome:
              <input
                type="text"
                value={sobrenome}
                onChange={(e) => setSobrenome(e.target.value)}
              />
            </label>
            <label htmlFor="email">
              E-mail:
              <input
                type="email"
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

            <RegisterButton type="submit">
              Concluir cadastro de usuário!
            </RegisterButton>
          </FormRegister>
        </FormContainer>
      </ContainerRegister>
    </>
  );
}
