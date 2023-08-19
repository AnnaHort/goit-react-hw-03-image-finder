import { useEffect } from 'react';
import * as basicLightbox from 'basiclightbox';

export const ModalContainer = ({ isOpen, imageUrl, onClose }) => {
  useEffect(() => {
    const instance = basicLightbox.create(`
      <div class="overlay">
        <div class="modal">
          <img src="${imageUrl}" alt=""/>
        </div>
      </div>
    `);

    if (isOpen) {
      instance.show();
    } else {
      instance.close();
    }

    // прослуховувач на кнопку ESC-----------------------------
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        onClose();
        console.log('Esc');
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    // прослуховувач на клік по оверлей------------------------
    // const overlayEl = document.querySelector('.overlay');

    // const handleClickOverlay = e => {
    //   if (e.target === overlayEl) {
    //     onClose();
    //     console.log('click overlay')
    //   }
    // };
    // overlayEl.addEventListener('click', handleClickOverlay)


    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      instance.close();
    };
  }, [isOpen, imageUrl, onClose]);

  return null;
};
