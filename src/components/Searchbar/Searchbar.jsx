import React, { Component } from 'react';
import { toast } from 'react-toastify';
// import PropTypes from 'prop-types';
import s from './Searchbar.module.css';

export default class Searchbar extends Component {
  state = {
    value: '',
  };

  handleInputChange = event => {
    this.setState({ value: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.value.trim() === '') {
      return toast.warn('Please input text...', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }

    this.props.inputValue(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <header className={s.searchbar}>
        <form className={s.form} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.button}>
            <span className={s.buttonLabel}>Search</span>
          </button>

          <input
            onChange={this.handleInputChange}
            value={this.state.value}
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
