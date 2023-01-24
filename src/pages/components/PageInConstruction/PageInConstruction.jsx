// React & Etc
import * as React from 'react';

// Styles
import { TextPIC, ImagePIC, ContainerPIC } from './styles';

import ConstructionImage from '../../../assets/construction.png';

export default function PageInConstruction() {
  return (
    <ContainerPIC>
      <TextPIC>Oops, volte mais tarde</TextPIC>
      <ImagePIC src={ConstructionImage} />
      <TextPIC> Ainda estou em construção...</TextPIC>
    </ContainerPIC>
  );
}
