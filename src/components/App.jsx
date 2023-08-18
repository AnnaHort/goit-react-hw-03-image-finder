import React, { Component } from 'react';
import { SearchBar } from './Searchbar';
import { GlobalStyle } from './Global.style';
import { ImageGallery } from './ImageGallery';
import { Button } from './Button';


export class App extends Component {
  state = {
    images: [],
    submit: '',
    page: 1,
  };

  // #1 функція для передачі значення інпута при сабміті форми
  onSubmit = (inputValue) => {
    this.setState({
      submit: inputValue,
      images: [],
      page: 1,
    });
  };
  // ------------------------------------------------------
// #2 HTTP запит
componentDidUpdate = (prevProps, prevState) => {
  if(prevState.submit !== this.state.submit || prevState.page !== this.state.page){
    console.log(`HTTP запит за ${this.state.submit}, сторінка №${this.state.page}`)
    // виконуємо HTTP запит
    // this.setState({images: результат запиту})
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
        <ImageGallery/>
        <Button onClick={this.handleLoadMore}/>
        <GlobalStyle/>
      </section>
    );
  }
}
