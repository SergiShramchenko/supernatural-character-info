import React from 'react';
import { connect } from 'react-redux';

import { addCartToTable } from '../../redux/data/data.actions';

import { AddCartButtonContainer } from './addCartButton.style';

const AddCartButton = (props) => (
  <AddCartButtonContainer onClick={props.addCartToTable}>
    Add cart
  </AddCartButtonContainer>
);

const mapDispatchToProps = (dispatch) => ({
  addCartToTable: () => dispatch(addCartToTable()),
});

export default connect(null, mapDispatchToProps)(AddCartButton);
