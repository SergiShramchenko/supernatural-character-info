import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSearchValue } from '../../redux/data/data.actions';

import { SearchInputContainer } from './searchInput.style';

class SearchInput extends Component {
  state = {
    searchName: '',
  };

  handleChangeValue = (e) => {
    const { value } = e.target;
    this.setState({ searchName: value });
    this.props.getSearchValue(value);
  };

  render() {
    return (
      <SearchInputContainer
        placeholder='search by'
        onChange={this.handleChangeValue}
        value={this.state.searchName}
      />
    );
  }
}

const mapStateToProps = ({ data }) => ({ data });

const mapDispatchToProps = (dispatch) => ({
  getSearchValue: (searchValue) => dispatch(getSearchValue(searchValue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
