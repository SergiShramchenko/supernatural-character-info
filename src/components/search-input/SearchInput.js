import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSearchValue, getSearchResult } from '../../redux/data/data.actions';

import { SearchInputContainer } from './searchInput.style';

class SearchInput extends Component {
  state = {
    searchName: '',
  };

  handleChangeValue = (e) => {
    this.setState({ searchName: e.target.value });
    this.props.getSearchValue(e.target.value);

    let data = this.props.data.data.filter((el) =>
      el.name.toLowerCase().includes(this.props.data.searchValue.toLowerCase())
    );

    this.props.getSearchResult(data);
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
  getSearchResult: (data) => dispatch(getSearchResult(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
