import React from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as Action from '../../store/modules/auth/actions';

import {
  PageUserEdit,
  Container,
  FormContainer,
  Form,
  ButtonContainer,
  SaveButton,
  DeleteButton,
} from './styles';
import Loading from '../components/Loading/Loading';

export default function UserEdit() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const id = useSelector((state) => state.auth.user.id);
  const nomeStored = useSelector((state) => state.auth.user.nome);
  const sobrenomeStored = useSelector((state) => state.auth.user.sobrenome);
  const emailStored = useSelector((state) => state.auth.user.email);
  const isLoading = useSelector((state) => state.auth.isLoading);

  const [nome, setNome] = React.useState('');
  const [sobrenome, setSobrenome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  React.useEffect(() => {
    if (!id) return;

    setNome(nomeStored);
    setSobrenome(sobrenomeStored);
    setEmail(emailStored);
  }, [id, nomeStored, sobrenomeStored, emailStored]);

  async function handleSubmit(e) {
    e.preventDefault();

    let formErrors = false;

    if (!id) {
      if (nome.length < 3 || nome.length > 50) {
        formErrors = true;
        toast.error('Campo nome deve ter entre 3 e 50 caracteres');
      }
    }

    if (!id) {
      if (sobrenome.length < 8 || sobrenome.length > 50) {
        formErrors = true;
        toast.error('Campo sobrenome deve ter entre 3 e 80 caracteres');
      }
    }

    if (!id) {
      if (!isEmail(email)) {
        formErrors = true;
        toast.error('E-mail inválido');
      }
    }

    if (!id) {
      if (password.length < 8 || password.length > 50) {
        formErrors = true;
        toast.error('Campo senha deve ter entre 8 e 50 caracteres');
      }
    }

    if (formErrors) return;

    dispatch(Action.RequestEditUser({ nome, sobrenome, email, password, id }));
  }

  return (
    <PageUserEdit>
      <Loading isLoading={isLoading} />
      <Container>
        <Form onSubmit={handleSubmit}>
          <h1>Editar informações:</h1>
          <FormContainer>
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
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label htmlFor="password">
              {/* TODO: CORRIGIR BUG DA SENHA QUE SOME DA ABA INFORMAÇÕES APÓS UPDATE DE INFOS */}
              Nova senha:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </FormContainer>
          <ButtonContainer>
            <SaveButton type="submit">Salvar</SaveButton>
            <DeleteButton
              type="button"
              onClick={() => {
                navigate('/user/');
              }}
            >
              Cancelar
            </DeleteButton>
          </ButtonContainer>
        </Form>
      </Container>
    </PageUserEdit>
  );
}
