import React from 'react';

import InfoTable from '../../components/info-table';
import TableOptions from '../../components/table-options';

import AddCharacterCart from '../../components/add-character-cart';

import { InformationContainer } from './information.style';

export default () => (
  <InformationContainer>
    <TableOptions />
    <InfoTable />
    {/* <AddCharacterCart /> */}
  </InformationContainer>
);
