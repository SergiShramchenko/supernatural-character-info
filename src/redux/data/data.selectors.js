import { createSelector } from 'reselect';

const selectData = (state) => state.data;

export const selectName = createSelector([selectData], (data) => data.name);
