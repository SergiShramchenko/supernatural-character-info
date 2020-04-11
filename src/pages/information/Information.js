import React from 'react';

import InfoTable from '../../components/info-table';
import TableOptions from '../../components/table-options';

import { InformationContainer } from './information.style';

export default () => (
  <InformationContainer>
    <TableOptions />
    <InfoTable />
  </InformationContainer>
);
