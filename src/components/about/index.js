import React from 'react';
import ProptTypes from 'prop-types';

import styles from './styles.module.scss';

function About() {
  return <div className={styles.about}>Hello World About Page</div>;
}

About.propTypes = {
  children: ProptTypes.any,
};

export default About;
