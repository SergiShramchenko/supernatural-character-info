import React, { Component } from 'react';
import { connect } from 'react-redux';

import _ from 'lodash';

import search from '../../helper-functions/search';

import {
  fetchDataStart,
  sortTableField,
  deleteFieldFromTable,
} from '../../redux/data/data.actions';

import {
  InfoTableContainer,
  InfoTableItem,
  InfoTableHead,
  InfoTableDataCell,
  InfoTableRow,
  InfoTableHeader,
  InfoTableBody,
} from './infoTable.style';

class InfoTable extends Component {
  componentDidMount() {
    this.props.fetchDataStart();
  }

  sort = (field) => {
    const data =
      this.props.data.sortNumber % 2 !== 1
        ? _.sortBy(this.props.data.data, field)
        : _.sortBy(this.props.data.data, field).reverse();
    this.props.sortTableField(data);
  };

  deleteRowFromTable = (rowId) => {
    const idx = this.props.data.data.findIndex((el) => el.id === rowId);
    // console.log(idx);
    const newData = [
      ...this.props.data.data.slice(0, idx),
      ...this.props.data.data.slice(idx + 1),
    ];
    console.log(newData);

    return this.props.data.deleteField
      ? this.props.deleteFieldFromTable(newData)
      : null;
  };

  render() {
    const { data, searchValue, choosedSearchField } = this.props.data;

    return (
      <InfoTableContainer>
        <InfoTableItem>
          <InfoTableHead>
            <InfoTableRow>
              <InfoTableHeader onClick={() => this.sort('name')}>
                name
              </InfoTableHeader>
              <InfoTableHeader onClick={() => this.sort('info')}>
                info
              </InfoTableHeader>
              <InfoTableHeader onClick={() => this.sort('death_reason')}>
                death-reason
              </InfoTableHeader>
              <InfoTableHeader onClick={() => this.sort('killer')}>
                killer
              </InfoTableHeader>
              <InfoTableHeader onClick={() => this.sort('murder_weapon')}>
                murder weapon
              </InfoTableHeader>
            </InfoTableRow>
          </InfoTableHead>
          <InfoTableBody>
            {search(data, choosedSearchField, searchValue).map((el) => (
              <InfoTableRow
                key={el.id}
                onClick={() => this.deleteRowFromTable(el.id)}
              >
                <InfoTableDataCell>{el.name}</InfoTableDataCell>
                <InfoTableDataCell>{el.info}</InfoTableDataCell>
                <InfoTableDataCell>{el.death_reason}</InfoTableDataCell>
                <InfoTableDataCell>{el.killer}</InfoTableDataCell>
                <InfoTableDataCell>{el.murder_weapon}</InfoTableDataCell>
              </InfoTableRow>
            ))}
          </InfoTableBody>
        </InfoTableItem>
      </InfoTableContainer>
    );
  }
}
const mapStateToProps = ({ data }) => ({ data });

const mapDispatchToProps = (dispatch) => ({
  fetchDataStart: () => dispatch(fetchDataStart()),
  sortTableField: (table) => dispatch(sortTableField(table)),
  deleteFieldFromTable: (table) => dispatch(deleteFieldFromTable(table)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InfoTable);
