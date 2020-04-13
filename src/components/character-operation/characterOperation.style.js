import styled, { css } from 'styled-components';

export const CharacterOperationContainer = styled.div`
  // border: solid 2px yellow;
  display: flex;
  align-items: center;
  width: 11.3rem;
  justify-content: space-between;
  margin-left: 10.3rem;
`;

const deleteField = css`
  color: red;
  cursor: poiner;
`;

const del = (props) => {
  return props.delete ? deleteField : null;
};

export const CharacterOperationIcon = styled.i`
  font-size: 20px;
  color: #262f34;
  cursor: pointer;

  ${del}
  &:hover {
    color: #767b7e;
  }
`;
