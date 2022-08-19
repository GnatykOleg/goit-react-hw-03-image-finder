// import PropTypes from 'prop-types';
import s from './ImageGallery.module.css';
import React, { Component } from 'react';
import { Loader, ImageGalleryItem } from 'components';

const API_KEY = '28678536-93e63d5ebc13c605896a6694e';
const BASE_URL = 'https://pixabay.com/api/';
const SETTINGS = 'image_type=photo&orientation=horizontal';

export default class ImageGallery extends Component {
  state = {
    images: '',
    error: null,
    status: 'idle',
    page: 1,
    perPage: 12,
    webformatURL: '',
    largeImageURL: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevValue = prevProps.valueProp;
    const nextValue = this.props.valueProp;
    const { page, perPage } = this.state;

    if (prevValue !== nextValue) {
      this.setState({ status: 'pending' });
      setTimeout(() => {
        fetch(
          `${BASE_URL}?q=${nextValue}&page=${page}&key=${API_KEY}&${SETTINGS}&per_page=${perPage}`
        )
          .then(response => {
            if (response.ok) {
              return response.json();
            }
            return Promise.reject(new Error(`Not found : ${nextValue}`));
          })

          .then(images => this.setState({ images, status: 'resolved' }))
          .catch(error => this.setState({ error, status: 'rejected' }));
      }, 500);
    }
  }

  onLoadMoreButton = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, status } = this.state;

    // if (images !== '' && images.hits.length === 0) {
    //   return <ErrorView message={error.message} />;
    // }

    if (status === 'idle') {
      return <p>ENTER NAME</p>;
    }

    if (status === 'pending') {
      return <Loader />;
    }

    if (status === 'resolved') {
      return (
        <ul className={s.imageGallery}>
          {images.hits.map(image => (
            <ImageGalleryItem
              key={image.id}
              webformatURL={image.webformatURL}
              tags={image.tags}
            />
          ))}
          <button type="button" onClick={this.onLoadMore}>
            ГРУЗИМ ЕЩЕ
          </button>
        </ul>
      );
    }
  }
}
