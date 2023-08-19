import styled from 'styled-components';
import { Puff } from 'react-loader-spinner';

export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const PuffStyled = styled(Puff)`
  height: 80px;
  width: 80px;
`;
