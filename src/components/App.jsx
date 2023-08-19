import React, { Component } from 'react';
import { SearchBar } from './Searchbar';
import { GlobalStyle } from './Global.style';
import { ImageGallery } from './ImageGallery';
import { Button } from './Button';
import { fetchImages } from './API';


export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
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
  render() {
    return (
      <section>
        <SearchBar onSubmit={this.onSubmit} />
        <ImageGallery images={this.state.images}/>
        <Button onClick={this.handleLoadMore}/>
        <GlobalStyle/>
      </section>
    );
  }
}
