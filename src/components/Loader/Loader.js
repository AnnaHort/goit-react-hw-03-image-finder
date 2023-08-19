import React from 'react';
import { LoaderContainer, PuffStyled } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderContainer className="loader-container">
      <PuffStyled
        type="TailSpin"
        ariaLabel="puff-loading"
        visible={true}
        color='#d3d3d3'
      />
    </LoaderContainer>
  );
};

