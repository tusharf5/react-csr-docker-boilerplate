import React from 'react';
import ProptTypes from 'prop-types';

import styles from './styles.module.scss';

function Home() {
  return <div className={styles.home}>Hello World Page</div>;
}

Home.propTypes = {
  children: ProptTypes.any
};

export default Home;
