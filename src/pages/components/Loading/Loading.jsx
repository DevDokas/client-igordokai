import React from 'react';
import PropTypes from 'prop-types';

import LoadingIcon from '../../../assets/loading.png';
import {
  ContainerLoading,
  MainContainer,
  Background,
  Span,
  LoadingAnimation,
} from './styles';

export default function Loading({ isLoading }) {
  // eslint-disable-next-line
  if (!isLoading) return <></>;
  return (
    <ContainerLoading>
      <Background />
      <MainContainer>
        <Span>Carregando...</Span>
        <LoadingAnimation src={LoadingIcon} />
      </MainContainer>
    </ContainerLoading>
  );
}

Loading.defaultProps = {
  isLoading: false,
};

Loading.propTypes = {
  isLoading: PropTypes.bool,
};
