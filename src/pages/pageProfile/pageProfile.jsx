// React & Etc
import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from '../../services/axios';
import history from '../../services/history';
import * as Action from '../../store/modules/auth/actions';

// Components
import {
  UserContainer,
  OutletContainer,
  ProfileContainer,
  ButtonsContainer,
  SignOutContainer,
  SignOutIconContainer,
  HeaderSpace,
  ImgContainer,
  TitlePage,
  ProfileHeader,
  UserImg,
  Button,
  Null,
  ProfileLink,
  SignOutIcon,
  SignOutText,
} from './styles';
import Loading from '../components/Loading/Loading';

// Assets
import ProfileImage from '../../assets/userimg.png';
import SignOutImage from '../../assets/logout.png';

//
export default function Profile() {
  const [user, setUser] = React.useState(() => {}, []);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isShown, setIsShown] = React.useState(false);

  const nome = useSelector((state) => state.auth.user.nome);
  const sobrenome = useSelector((state) => state.auth.user.sobrenome);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const response = await axios.get(`/user/`);
      setUser(response.data);
      setIsLoading(false);
    }
    getData();
  }, []);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(Action.FailureLogin());
  };

  return (
    <>
      <Loading isLoading={isLoading} />
      <Null />
      <UserContainer>
        <HeaderSpace />
        <ProfileHeader
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
          <ProfileLink to="/user/">
            <ProfileContainer>
              <ImgContainer>
                <UserImg src={ProfileImage} alt="" />
              </ImgContainer>
              <TitlePage>
                {isShown && nome} {isShown && sobrenome}
              </TitlePage>
            </ProfileContainer>
          </ProfileLink>
          <ButtonsContainer>
            <Button
              type="button"
              onClick={() => {
                navigate('/user/services');
              }}
            >
              {isShown && 'Serviços'}
            </Button>
            {/*             <Button
              type="button"
              onClick={() => {
                navigate('/user/services');
              }}
            >
              {isShown && 'Meus serviços'}
            </Button> */}
          </ButtonsContainer>
          <SignOutContainer type="button" onClick={handleLogout}>
            <SignOutIconContainer>
              <SignOutIcon src={SignOutImage} />
            </SignOutIconContainer>
            <SignOutText>{isShown && 'Log-out'}</SignOutText>
          </SignOutContainer>
        </ProfileHeader>
        <OutletContainer>
          <Outlet />
        </OutletContainer>
      </UserContainer>
    </>
  );
}

/* {user?.map((users) => (
  <div key={String(users.id)}>
    {get(users, 'Pics[0].url', false) ? (
      <UserImage src={users.Pics[0].url} alt="" />
    ) : (
      <UserImage src={ImageProfile} alt="" />
    )}
  </div>
))} */
