import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchDataStart } from '../../redux/data/data.actions';

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
  async componentDidMount() {
    await this.props.fetchDataStart();
  }
  render() {
    return (
      <InfoTableContainer>
        <InfoTableItem>
          <InfoTableHead>
            <InfoTableRow>
              <InfoTableHeader>name</InfoTableHeader>
              <InfoTableHeader>info</InfoTableHeader>
              <InfoTableHeader>death-reason</InfoTableHeader>
              <InfoTableHeader>killer</InfoTableHeader>
              <InfoTableHeader>murder weapon</InfoTableHeader>
            </InfoTableRow>
          </InfoTableHead>
          <InfoTableBody>
            {this.props.data.data.map((el) => (
              <InfoTableRow key={el.id}>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(InfoTable);
