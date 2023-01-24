import styled from 'styled-components';

export const ContainerPIC = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: 50%;
  left: 50%;
  height: 500px;
  width: 500px;
  border-radius: 25px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: #6a768d;
`;

export const TextPIC = styled.p`
  height: 100px;
  width: 500px;
  font-size: 18px;
  opacity: 80%;
  padding: 40px;
  border-radius: 25px;
`;

export const ImagePIC = styled.img`
  height: 300px;
  border-radius: 25px;
`;
