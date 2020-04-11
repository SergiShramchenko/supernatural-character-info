import React from 'react';

import CharacterOption from '../character-option';

import {
  CharacterOperationContainer,
  CharacterOperationIcon,
} from './characterOperation.style';

export default () => (
  <CharacterOperationContainer>
    <CharacterOption
      option={
        <CharacterOperationIcon className='fas fa-user-plus'></CharacterOperationIcon>
      }
    />
    <CharacterOption
      option={
        <CharacterOperationIcon className='fas fa-user-times'></CharacterOperationIcon>
      }
    />
  </CharacterOperationContainer>
);
