import React, { Component } from 'react';

import AddCartButton from '../add-cart-button';

import {
  AddCharacterCartContainer,
  CharacterCartInputContainer,
  CharacterCartInfoFieldContainer,
} from './addCharacterCart.style';

class AddCharacterCart extends Component {
  state = {
    name: '',
    info: '',
    death_reason: '',
    killer: '',
    murder_weapon: '',
  };

  render() {
    return (
      <AddCharacterCartContainer>
        <CharacterCartInputContainer
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <CharacterCartInfoFieldContainer
          onChange={(e) => this.setState({ info: e.target.value })}
        />
        <CharacterCartInputContainer
          onChange={(e) => this.setState({ death_reason: e.target.value })}
        />
        <CharacterCartInputContainer
          onChange={(e) => this.setState({ killer: e.target.value })}
        />
        <CharacterCartInputContainer
          onChange={(e) => this.setState({ murder_weapon: e.target.value })}
        />
        <AddCartButton cart={this.state} />
      </AddCharacterCartContainer>
    );
  }
}

export default AddCharacterCart;
