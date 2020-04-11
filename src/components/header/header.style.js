import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-end;
  margin-right: 4.8rem;
  margin-top: 8.9rem;
`;

export const HeaderItem = styled.li`
  font-size: 1.6rem;
  color: #828282;
  opacity: 0.5;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

export const LinkContainer = styled(Link)`
  text-decoration: none;
  margin-left: 8.6rem;
`;
