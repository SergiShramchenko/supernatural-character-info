import React from 'react';
import { connect } from 'react-redux';

import InfoTable from '../../components/info-table';
import TableOptions from '../../components/table-options';
import AddCharacterCart from '../../components/add-character-cart';

import { InformationContainer } from './information.style';

const Information = (props) =>
  !props.data.addField ? (
    <InformationContainer>
      <TableOptions />
      <InfoTable />
    </InformationContainer>
  ) : (
    <InformationContainer>
      <AddCharacterCart />
    </InformationContainer>
  );

const mapStateToProps = ({ data }) => ({ data });

export default connect(mapStateToProps)(Information);
