import React from 'react';
import { connect } from 'react-redux';

import { getSearchValue } from '../../redux/data/data.actions';

import { SearchInputContainer } from './searchInput.style';

const SearchInput = ({ getSearchValue }) => (
  <SearchInputContainer
    placeholder='search by'
    onChange={(e) => getSearchValue(e.target.value)}
  />
);

export default connect(null, { getSearchValue })(SearchInput);
