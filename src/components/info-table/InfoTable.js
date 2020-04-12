import React, { Component } from 'react';
import { connect } from 'react-redux';

import search from '../../helper-functions/search';
import sortField from '../../helper-functions/sortField';
import deleteRow from '../../helper-functions/deleteRow';

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
    // eslint-disable-next-line no-unused-expressions
    !this.props.data.addCart === true ? this.props.fetchDataStart() : null;
  }

  sort = (field) => {
    const { data, sortNumber } = this.props.data;
    const { sortTableField } = this.props;
    return sortField(data, field, sortNumber, sortTableField);
  };

  deleteRowFromTable = (rowId) => {
    const { data, deleteField } = this.props.data;
    const { deleteFieldFromTable } = this.props;

    return deleteRow(data, rowId, deleteField, deleteFieldFromTable);
  };

  render() {
    const {
      data,
      searchValue,
      choosedSearchField,
      tableHeader,
    } = this.props.data;

    return (
      <InfoTableContainer>
        <InfoTableItem>
          <InfoTableHead>
            <InfoTableRow>
              {tableHeader.map((rowHead) => (
                <InfoTableHeader onClick={() => this.sort(rowHead)}>
                  {rowHead}
                </InfoTableHeader>
              ))}
            </InfoTableRow>
          </InfoTableHead>
          <InfoTableBody>
            {search(data, choosedSearchField, searchValue).map(
              ({ name, id, info, death_reason, killer, murder_weapon }) => (
                <InfoTableRow
                  key={id}
                  onClick={() => this.deleteRowFromTable(id)}
                >
                  <InfoTableDataCell>{name}</InfoTableDataCell>
                  <InfoTableDataCell>{info}</InfoTableDataCell>
                  <InfoTableDataCell>{death_reason}</InfoTableDataCell>
                  <InfoTableDataCell>{killer}</InfoTableDataCell>
                  <InfoTableDataCell>{murder_weapon}</InfoTableDataCell>
                </InfoTableRow>
              )
            )}
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
