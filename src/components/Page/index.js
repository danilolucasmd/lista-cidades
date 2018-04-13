import React from 'react';
import Search from './Search';
import List from './List';

import styles from './styles.css';

const Page = () => (
  <div className={styles.component}>
    <Search />
    <List />
  </div>
);

export default Page;