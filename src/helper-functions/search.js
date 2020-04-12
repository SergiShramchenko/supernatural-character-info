export default (data, targetField, searchValue) =>
  targetField === 'all'
    ? data.filter((item) => {
        return Object.keys(item).some(
          (key) =>
            item[key]
              .toString()
              .toLowerCase()
              .search(searchValue.toLowerCase()) !== -1
        );
      })
    : data.filter((el) =>
        el[targetField].toLowerCase().includes(searchValue.toLowerCase())
      );
