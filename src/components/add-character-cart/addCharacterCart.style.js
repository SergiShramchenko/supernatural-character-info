import styled from 'styled-components';

export const AddCharacterCartContainer = styled.div`
  //   border: solid 2px blue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CharacterCartInputContainer = styled.input`
  width: 41.9rem;
  //   border: solid 2px tomato;
  margin-top: 8.9rem;
  border: none;
  outline: none;
  background: none;
  border-bottom: solid 1px #767b7e;
  color: white;
  font-size: 1.4rem;

  &:first-child {
    margin-top: 6rem;
  }
`;

export const CharacterCartInfoFieldContainer = styled.textarea`
  width: 41.9rem;
  height: 15.9rem;
  background-color: #767b7e;
  border-radius: 1.6rem;
  margin-top: 8.9rem;
  border: none;
  outline: none;
  color: white;
  text-indent: 1rem;
  font-size: 1.4rem;
`;
