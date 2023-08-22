import React, { Component } from 'react';
import {
  ImgStyled,
  StyledListEl,
  StyledListElContainer,
  StyledModalImg,
} from './ImageGalleryItem.styled';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '90vw',
    maxHeight: '80vh',
    background: 'none',
    border: '1px solid #ab8f8f',
  },
};

Modal.setAppElement('#root');

export class ImageGalleryItem extends Component {
  state = {
    modalOpenItem: null,
    isLoading: false,
  };

  openModal = (itemId) => {
    this.setState({ 
      modalOpenItem: itemId,
       isLoading: true });
  };

  closeModal = () => {
    this.setState({ 
      modalOpenItem: null,
       isLoading: false });
  };

  render() {
    const { imageItem } = this.props;
    const { modalOpenItem } = this.state;

    return (
      <StyledListElContainer>
        {imageItem.map(item => {
          const { id, webformatURL, tags, largeImageURL } = item;

          return (
            <StyledListEl key={id}>
              <ImgStyled
                src={webformatURL}
                alt={tags}
                onClick={() => this.openModal(id)}
              />

              <Modal
                isOpen={modalOpenItem === id}
                onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel="Example Modal"
              >
                  <StyledModalImg src={largeImageURL} alt={tags} />
              </Modal>

            </StyledListEl>
          );
        })}
      </StyledListElContainer>
    );
  }
}



