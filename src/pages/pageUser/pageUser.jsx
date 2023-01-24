import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import { get } from 'lodash';
import { toast } from 'react-toastify';
import axios from '../../services/axios';
import * as Action from '../../store/modules/auth/actions';

import Loading from '../components/Loading/Loading';
import './ModalStyles.css';
import {
  PageUserContainer,
  UserContainer,
  InfoContainer,
  PasswordContainer,
  PasswordViewerContainer,
  PasswordTitleContainer,
  MainContainer,
  PasswordViewer,
  UserInfoContainer,
  ButtonContainer,
  Label,
  EditButton,
  DeleteButton,
  ShowPassword,
  PageTitle,
} from './styles';
import ViewPassword from '../../assets/view.png';

export default function PageUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isShown, setIsShown] = React.useState(false);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const nome = useSelector((state) => state.auth.user.nome);
  const sobrenome = useSelector((state) => state.auth.user.sobrenome);
  const email = useSelector((state) => state.auth.user.email);
  const password = useSelector((state) => state.auth.user.password);
  const isLoading = useSelector((state) => state.auth.isLoading);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const hiddenPassword = password.replace(/./g, '*');

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  async function handleDelete(e, id) {
    try {
      e.preventDefault();
      await axios.delete('/user/');
      closeModal();
      dispatch(Action.FailureLogin());
    } catch (err) {
      const errors = get(err, 'response.data.errors', []);
      errors.map((error) => toast.error(error));
    }
  }

  return (
    <PageUserContainer>
      <Loading isLoading={isLoading} />
      <UserContainer>
        <PageTitle>Informações pessoais: </PageTitle>
        <MainContainer>
          {' '}
          <InfoContainer>
            <Label htmlFor="name">Nome: </Label>
            <UserInfoContainer className="name">
              {nome} {sobrenome}
            </UserInfoContainer>
          </InfoContainer>
          <InfoContainer>
            <Label htmlFor="email">E-mail: </Label>
            <UserInfoContainer className="email">{email}</UserInfoContainer>
          </InfoContainer>
          <InfoContainer>
            <PasswordContainer htmlFor="password">
              <PasswordTitleContainer>
                <Label htmlFor="password">Senha: </Label>
              </PasswordTitleContainer>
              <ShowPassword>
                <UserInfoContainer className="password">
                  {(isShown && password) || hiddenPassword}
                </UserInfoContainer>
                <PasswordViewerContainer
                  onMouseEnter={() => setIsShown(true)}
                  onMouseLeave={() => setIsShown(false)}
                >
                  <PasswordViewer src={ViewPassword} alt="" />
                </PasswordViewerContainer>
              </ShowPassword>
            </PasswordContainer>
          </InfoContainer>
        </MainContainer>
        <ButtonContainer>
          <EditButton
            type="button"
            onClick={() => {
              navigate('/user/edit');
            }}
          >
            Editar perfil
          </EditButton>
          <DeleteButton onClick={openModal} type="button">
            Excluir conta
          </DeleteButton>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            overlayClassName="modal-overlay"
            className="modal-context"
            contentLabel="Teste Aqui"
          >
            <div className="modalUserBackground">
              <div className="modalContainer">
                <h1 className="ModalTitle">Deletar conta de usuário</h1>
                <div className="textContainer">
                  <p className="p1">
                    Tem certeza que deseja excluir sua conta de usuário?
                  </p>
                  <p className="p2">
                    Ao realizar esta ação sua conta, assim como suas ordens de
                    serviço serão excluídos, não sendo possível recuperá-lo
                    novamente.
                  </p>
                </div>
                <div className="buttonContainer">
                  <button
                    onClick={closeModal}
                    className="btn buttonCancel"
                    type="button"
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={handleDelete}
                    className="btn buttonDelete"
                    type="button"
                  >
                    Deletar
                  </button>
                </div>
              </div>
            </div>
          </Modal>
        </ButtonContainer>
      </UserContainer>
    </PageUserContainer>
  );
}
