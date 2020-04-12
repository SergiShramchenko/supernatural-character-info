import React from 'react';
import { connect } from 'react-redux';

import { addCartToTable } from '../../redux/data/data.actions';

import { AddCartButtonContainer } from './addCartButton.style';

const AddCartButton = (props) => (
  <AddCartButtonContainer onClick={() => props.addCartToTable(props.cart)}>
    Add cart
  </AddCartButtonContainer>
);

const mapDispatchToProps = (dispatch) => ({
  addCartToTable: (cart) => dispatch(addCartToTable(cart)),
});

export default connect(null, mapDispatchToProps)(AddCartButton);
