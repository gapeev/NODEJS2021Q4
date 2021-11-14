const { resolve } = require('path');

module.exports = (items) => {
  const result = [
    ['-c', '--config'],
    ['-i', '--input'],
    ['-o', '--output'],
  ].reduce((result, [alias, full]) => {
    const index = items.findIndex((item) => item === alias || item === full);
    const option = full.substring(2);
    result[option] = {
      count: items.filter((item) => item === alias || item === full).length,
      value: index !== -1 ? items[index + 1] || null : null,
    };
    return result;
  }, {});

  result.config.value = result.config.value?.split('-') || null;
  result.input.value =
    result.input.value !== null
      ? resolve(__dirname, result.input.value)
      : result.input.value;
  result.output.value =
    result.output.value !== null
      ? resolve(__dirname, result.output.value)
      : result.output.value;
  return result;
};
