import React from 'react';
import { connect } from 'react-redux';

import { deleteTableField, addTableField } from '../../redux/data/data.actions';

import CharacterOption from '../character-option';

import {
  CharacterOperationContainer,
  CharacterOperationIcon,
} from './characterOperation.style';

const CharacterOperation = (props) => (
  <CharacterOperationContainer>
    <CharacterOption
      option={
        <CharacterOperationIcon
          className='fas fa-user-plus'
          onClick={props.addTableField}
        ></CharacterOperationIcon>
      }
    />
    <CharacterOption
      option={
        <CharacterOperationIcon
          className='fas fa-user-times'
          onClick={props.deleteTableField}
        ></CharacterOperationIcon>
      }
    />
  </CharacterOperationContainer>
);

const mapDispatchToProps = (dispatch) => ({
  deleteTableField: () => dispatch(deleteTableField()),
  addTableField: () => dispatch(addTableField()),
});

export default connect(null, mapDispatchToProps)(CharacterOperation);
