import React from 'react';
import { connect } from 'react-redux';

import { changeField } from '../../redux/data/data.actions';

import { SearchByFieldContainer } from './searchByField.style';

const SearchByField = ({ data: { searchField, fieldNumber }, changeField }) => (
  <SearchByFieldContainer onClick={() => changeField(searchField[fieldNumber])}>
    {searchField[fieldNumber]}
  </SearchByFieldContainer>
);

const mapStateToProps = ({ data }) => ({ data });

export default connect(mapStateToProps, { changeField })(SearchByField);
