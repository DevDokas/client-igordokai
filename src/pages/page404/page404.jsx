import React from 'react';

import Logo from '../../assets/logo.png';
import {
  Container,
  Container404,
  LogoImg,
  Image404,
  Warning404,
  LinkTo,
} from './styles';
import history from '../../services/history';

import page404 from '../../assets/404.png';
import Nav from '../components/Nav/Nav';

export default function Page404() {
  const [Timer, setTimer] = React.useState(5);

  React.useEffect(() => {
    setTimeout(() => {
      setTimer(Timer - 1);
    }, 1000);
  }, [Timer]);

  history.push('/');
  setTimeout(() => {
    document.location.reload(true);
  }, 5000);

  return (
    <Container>
      <Container404>
        <Warning404>Oops, parece que ouve um engano...</Warning404>
        <Image404 src={page404} />
        <Warning404>
          A página que tentou acessar não existe. <br />
          <p>
            Você voltará para a página inicial em <span>{Timer}</span> segundos
          </p>
        </Warning404>
      </Container404>
    </Container>
  );
}
