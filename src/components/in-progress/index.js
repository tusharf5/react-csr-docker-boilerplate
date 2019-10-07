import React from 'react';
import ProptTypes from 'prop-types';

import './styles.scss';

const InProgress = function InProgress() {
  return <div className="inProgress">In Progress</div>;
};

InProgress.propTypes = {
  children: ProptTypes.any,
};

export default InProgress;
