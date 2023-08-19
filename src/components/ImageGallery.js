import { ImageGalleryItem } from './ImageGalleryItem';

export const ImageGallery = ({images}) => {
  return (
    <ul className="gallery">
      <ImageGalleryItem imageItem={images}/>
    </ul>
  );
};
