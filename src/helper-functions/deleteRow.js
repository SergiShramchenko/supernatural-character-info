export default (data, rowId, deleteField, deleteFieldFromTable) => {
  const idx = data.findIndex((el) => el.id === rowId);
  const dataWithoutOneRow = [...data.slice(0, idx), ...data.slice(idx + 1)];

  return deleteField ? deleteFieldFromTable(dataWithoutOneRow) : null;
};
