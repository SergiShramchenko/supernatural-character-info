import React from 'react';
import { connect } from 'react-redux';

import { addCartToTable } from '../../redux/data/data.actions';

import { AddCartButtonContainer } from './addCartButton.style';

const AddCartButton = ({ cart, addCartToTable }) => (
  <AddCartButtonContainer onClick={() => addCartToTable(cart)}>
    Add cart
  </AddCartButtonContainer>
);

export default connect(null, { addCartToTable })(AddCartButton);
