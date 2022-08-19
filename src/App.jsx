import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import s from './App.module.css';
// import PropTypes from 'prop-types';

import {
  Searchbar,
  ImageGallery,
  ImageGalleryItem,
  Button,
  Modal,
} from 'components';

export class App extends Component {
  state = {
    id: '',
    webformatURL: '',
    largeImageURL: '',
    images: '',

    error: null,
    status: 'idle',
    page: 1,
    perPage: 12,
  };

  inputValue = images => {
    this.setState({ images });
  };

  render() {
    return (
      <>
        <Searchbar inputValue={this.inputValue} />
        <ImageGallery valueProp={this.state.images} />
        <ImageGalleryItem />

        <Button />
        <Modal />
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </>
    );
  }
}
