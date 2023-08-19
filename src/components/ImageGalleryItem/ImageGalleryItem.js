import { ImgStyled, StyledListEl } from "./ImageGalleryItem.styled";

export const ImageGalleryItem = ({imageItem}) => {
  return (
    imageItem.map(item => {
      const { id, webformatURL, largeImageURL } = item;
      return (
        <StyledListEl key={id}>
          <a href={largeImageURL}>
            <ImgStyled src={webformatURL} alt=""></ImgStyled>
          </a>
        </StyledListEl>
      );
    })
  );
};
