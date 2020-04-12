import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import InfoTable from '../../components/info-table';
import TableOptions from '../../components/table-options';

import WithExtraField from '../../hocs/with-extra-field';

import { InformationContainer } from './information.style';

const Information = () => (
  <InformationContainer>
    <TableOptions />
    <InfoTable />
  </InformationContainer>
);

const mapStateToProps = ({ data }) => ({ data });

export default compose(connect(mapStateToProps), WithExtraField)(Information);
