import React from 'react';

import Spinner from '../../components/spinner';

export const WithSpinner = (WrappedComponent) => ({
  loading,
  ...otherProps
}) => {
  return !loading ? <WrappedComponent {...otherProps} /> : <Spinner />;
};

export default WithSpinner;
