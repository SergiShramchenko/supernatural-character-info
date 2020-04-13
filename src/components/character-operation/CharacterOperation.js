import React from 'react';
import { connect } from 'react-redux';

import { deleteTableField, addTableField } from '../../redux/data/data.actions';

import CharacterOption from '../character-option';

import {
  CharacterOperationContainer,
  CharacterOperationIcon,
} from './characterOperation.style';

const CharacterOperation = ({
  data: { deleteField },
  addTableField,
  deleteTableField,
}) => (
  <CharacterOperationContainer>
    <CharacterOption
      option={
        <CharacterOperationIcon
          className='fas fa-user-plus'
          onClick={addTableField}
        />
      }
    />
    <CharacterOption
      option={
        <CharacterOperationIcon
          className='fas fa-user-times'
          onClick={deleteTableField}
          delete={deleteField}
        />
      }
    />
  </CharacterOperationContainer>
);

const mapStateToProps = ({ data }) => ({ data });

const mapDispatchToProps = (dispatch) => ({
  deleteTableField: () => dispatch(deleteTableField()),
  addTableField: () => dispatch(addTableField()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CharacterOperation);
