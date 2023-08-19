export const ImageGalleryItem = ({imageItem}) => {
  return (
    imageItem.map(item => {
      const { id, webformatURL, largeImageURL } = item;
      return (
        <li key={id}>
          <a href={largeImageURL}>
            <img src={webformatURL} alt=""></img>
          </a>
        </li>
      );
    })
  );
};
