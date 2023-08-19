import { ImgStyled, StyledListEl } from './ImageGalleryItem.styled';
import * as basicLightbox from 'basiclightbox';

// метод виклику модалки
export const ImageGalleryItem = ({ imageItem }) => {
  // Метод для відкриття модального вікна
  const handleOpenModal = largeImageURL => {
    const instance = basicLightbox.create(`
      <div class="overlay">
        <div class="modal">
          <img src="${largeImageURL}" alt="" />
        </div>
      </div>
    `);
    instance.show(); 
  };

  return imageItem.map(item => {
    const { id, webformatURL, largeImageURL } = item;
    return (
      <StyledListEl key={id}>
        <a
          href={largeImageURL}
          onClick={e => {
            e.preventDefault();
            handleOpenModal(largeImageURL);
          }}
        >
          <ImgStyled src={webformatURL} alt=""></ImgStyled>
        </a>
      </StyledListEl>
    );
  });
};
