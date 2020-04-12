import _ from 'lodash';

export default (data, field, sortNumber, sortTableField) => {
  const sort =
    sortNumber % 2 !== 1
      ? _.sortBy(data, field)
      : _.sortBy(data, field).reverse();

  return sortTableField(sort);
};
