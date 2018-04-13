import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCityPoints } from 'actionCreators/cities';

import styles from './styles.css';

const ListItem = ({ data, fetchCityPoints }) => (
  <tr className={styles.component}>
    <td>{data.Estado}</td>
    <td>{data.Nome}</td>
    <td>
      <a href='' onClick={e => {
        e.preventDefault();

        fetchCityPoints(data);
      }}>
        Ver Pontuação
      </a>
    </td>
  </tr>
);

ListItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default connect(undefined, { fetchCityPoints })(ListItem);