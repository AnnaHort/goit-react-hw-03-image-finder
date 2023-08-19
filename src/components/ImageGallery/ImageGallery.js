import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { StyledList } from './ImageGallery.styled';

export const ImageGallery = ({images}) => {
  
  return (
    <StyledList className="gallery">
      <ImageGalleryItem imageItem={images}/>
    </StyledList>
  );
};
