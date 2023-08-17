import React, { Component } from 'react';
import { SearchBar } from './Searchbar';
import { GlobalStyle } from './Global.style';
import { ImageGallery } from './ImageGallery';


export class App extends Component {
  state = {
    images: [],
    submit: '',
  };

  // #1 функція для передачі значення інпута при сабміті форми
  onSubmit = (inputValue) => {
    this.setState({
      submit: inputValue,
    });
    console.log(inputValue)
  };
  // ------------------------------------------------------


  render() {
    return (
      <section>
        <SearchBar onSubmit={this.onSubmit} /> {/* пошук по запиту */}
        <ImageGallery/>
        <GlobalStyle/>
      </section>
    );
  }
}
