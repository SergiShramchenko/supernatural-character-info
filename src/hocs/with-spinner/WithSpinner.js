import React from 'react';

import Spinner from '../../components/spinner';

export default (WrappedComponent) => ({ ui, ...otherProps }) => {
  return !ui.loading ? <WrappedComponent {...otherProps} /> : <Spinner />;
};
