import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCities } from 'actionCreators/cities';
import { getVisibleCities } from 'reducers';
import ListItem from './ListItem';
import ListControls from './ListControls';

import styles from './styles.css';

class List extends Component {
  PAGE_SIZE = 10;

  constructor(props) {
    super(props);

    this.state = {
      curPage: 1,
      firstItem: 0,
      lastItem: this.PAGE_SIZE,
    };
  }

  componentDidMount() {
    this.props.fetchCities();
  }

  componentWillReceiveProps() {
    this.setState({
      curPage: 1,
      firstItem: 0,
      lastItem: this.PAGE_SIZE,
    });
  }

  handleNextPage = () => {
    this.setState({
      firstItem: this.state.firstItem + this.PAGE_SIZE,
      lastItem: this.state.lastItem + this.PAGE_SIZE,
      curPage: this.state.curPage + 1,
    })
  }

  handlePreviousPage = () => {
    this.setState({
      firstItem: this.state.firstItem - this.PAGE_SIZE,
      lastItem: this.state.lastItem - this.PAGE_SIZE,
      curPage: this.state.curPage - 1,
    })
  }

  render() {
    return (
      <div className={styles.component}>
        <table>
          <thead>
            <tr>
              <th>Estado</th>
              <th>Cidade</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.data.slice(this.state.firstItem, this.state.lastItem).map((item, index) => {
              return (
                <ListItem
                  key={index}
                  data={item}
                />
              );
            })}
          </tbody>
        </table>

        <ListControls
          nextPage={this.handleNextPage}
          prevPage={this.handlePreviousPage}
          curPage={this.state.curPage}
          lastPage={this.props.data.length / this.PAGE_SIZE}
        />
      </div>
    );
  }
}

List.propTypes = {
  data: PropTypes.array.isRequired,
  fetchCities: PropTypes.func,
};

const mapStateToProps = state => ({
  data: state.filters.city || state.filters.state ? getVisibleCities(state.cities, state.filters) : state.cities,
});

export default connect(mapStateToProps, { fetchCities })(List);