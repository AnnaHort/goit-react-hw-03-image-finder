import React, { Component } from 'react';
import { SearchBar } from './SearchBar/Searchbar';
import { GlobalStyle } from './Global.style';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { fetchImages } from './API';



export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    imagesPerPage: 12,
  };



  // #1 функція для передачі значення інпута при сабміті форми
  onSubmit = (inputValue) => {
    this.setState({
      query: inputValue,
      images: [],
      page: 1,
    });
  };
  // ------------------------------------------------------
// #2 HTTP запит
componentDidUpdate = async (prevProps, prevState) => {
  if (prevState.query !== this.state.query || prevState.page !== this.state.page) {
    console.log(`HTTP запит за ${this.state.query}, сторінка №${this.state.page}`);
    // Виконуємо HTTP запит та отримуємо зображення
    const images = await fetchImages({ query: this.state.query, page: this.state.page });

    if (images.length === 0) {
      alert('No images found.');
    }

    // Оновлюємо стан, додаючи нові зображення до попередніх
    this.setState((prevState) => ({
      images: [...prevState.images, ...images],
    }));
  }
}
  // ------------------------------------------------------
  // #3 кнопка LoadMore
  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1}));
  };
  // ------------------------------------------------------
  render() 
  {
    const { images, query, imagesPerPage } = this.state;

    return (
      <section>
        <SearchBar onSubmit={this.onSubmit} />
        <ImageGallery images={images}/>
        {images.length > 0 && query !== '' && images.length % imagesPerPage === 0 && (
          <Button onClick={this.handleLoadMore} />
        )}
        <GlobalStyle/>
      </section>
    );
  }
}
