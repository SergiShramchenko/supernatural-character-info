import React, { Component } from 'react';
import { connect } from 'react-redux';

import { changeField } from '../../redux/data/data.actions';

import { SearchByFieldContainer } from './searchByField.style';

class SearchByField extends Component {
  state = {
    fieldNumber: 0,
  };

  changeField = () => {
    this.setState(
      {
        fieldNumber:
          this.state.fieldNumber === 5 ? 0 : this.state.fieldNumber + 1,
      },
      () => {
        this.props.changeField(
          this.props.data.searchField[this.state.fieldNumber]
        );
      }
    );
  };

  render() {
    return (
      <SearchByFieldContainer onClick={this.changeField}>
        {this.props.data.searchField[this.state.fieldNumber]}
      </SearchByFieldContainer>
    );
  }
}

const mapStateToProps = ({ data }) => ({ data });

const mapDisparchToProps = (dispatch) => ({
  changeField: (field) => dispatch(changeField(field)),
});

export default connect(mapStateToProps, mapDisparchToProps)(SearchByField);
