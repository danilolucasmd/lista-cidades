import React from 'react';

import styles from './styles.css';

const ListControls = ({ nextPage, prevPage, curPage, lastPage }) => (
  <div className={styles.component}>
    <button onClick={() => curPage > 1 && prevPage()}>
      Anterior
    </button>
    <label>{curPage}</label>
    <button onClick={() => curPage < lastPage && nextPage()}>
      Próximo
    </button>
  </div>
);

export default ListControls;