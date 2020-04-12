import React from 'react';

import AddCharacterCart from '../../components/add-character-cart';

export default (WrappedComponent) => ({ data, ...otherProps }) =>
  !data.addField ? <WrappedComponent {...otherProps} /> : <AddCharacterCart />;
