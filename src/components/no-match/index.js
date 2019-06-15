import React from 'react';
import ProptTypes from 'prop-types';

const NoMatch = function NoMatch() {
  return <div>Not Found</div>;
};

NoMatch.propTypes = {
  children: ProptTypes.any,
};

export default NoMatch;
