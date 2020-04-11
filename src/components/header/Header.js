import React from 'react';

import { HeaderContainer, HeaderItem, LinkContainer } from './header.style';

const Header = () => (
  <HeaderContainer>
    <LinkContainer to='/'>
      <HeaderItem>home</HeaderItem>
    </LinkContainer>
    <LinkContainer to='/information'>
      <HeaderItem>information</HeaderItem>
    </LinkContainer>
    <LinkContainer to='/about-project'>
      <HeaderItem>about project</HeaderItem>
    </LinkContainer>
  </HeaderContainer>
);

export default Header;
