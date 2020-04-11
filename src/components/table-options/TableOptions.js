import React from 'react';

import SearchInput from '../../components/search-input';
import CharacterOperation from '../../components/character-operation';

import { TableOptionsContainer } from './tableOptions.style';

export default () => (
  <TableOptionsContainer>
    <CharacterOperation />
    <SearchInput />
  </TableOptionsContainer>
);
