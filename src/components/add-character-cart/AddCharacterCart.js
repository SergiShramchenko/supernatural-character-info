import React from 'react';

import CharacterCartInput from '../character-cart-input';
import CharacterCartInfoField from '../character-cart-info-field';
import AddCartButton from '../add-cart-button';

import { AddCharacterCartContainer } from './addCharacterCart.style';

export default () => (
  <AddCharacterCartContainer>
    <CharacterCartInput />
    <CharacterCartInfoField />
    <CharacterCartInput />
    <CharacterCartInput />
    <CharacterCartInput />
    <AddCartButton />
  </AddCharacterCartContainer>
);
