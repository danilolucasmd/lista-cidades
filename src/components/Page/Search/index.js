import React, { Component } from 'react';

import styles from './styles.css';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: '',
      state: '',
    };
  }

  handleSubmit = e => {
    e.preventDefault();

  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <form className={styles.component} onSubmit={this.handleSubmit}>
        <label>Cidade:</label>
        <input
          id='city'
          name='city'
          value={this.state.city}
          onChange={this.handleChange}
        />

        <label>Estado:</label>
        <input
          id='state'
          name='state'
          value={this.state.state}
          onChange={this.handleChange}
        />

        <button type='submit'>Buscar</button>
      </form >
    );
  }
}

export default Search;