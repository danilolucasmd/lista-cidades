import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { changeFilters } from 'actionCreators/filters';

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

    this.props.changeFilters(this.state);
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

Search.propTypes = {
  changeFilters: PropTypes.func,
};

export default connect(undefined, { changeFilters })(Search);