const { access, stat } = require('fs/promises');
const { constants } = require('fs');
const {
  MissingOptionError,
  MissingOptionValueError,
  RedundantOptionError,
  InvalidOptionError,
  IncorrectPathError,
  PathIsDirectoryError,
} = require('./customErrors');

module.exports = async (options) => {
  if (options.config.count === 0) {
    throw new MissingOptionError('-c, --config');
  }
  if (options.config.count > 1) {
    throw new RedundantOptionError('-c, --config');
  }
  if (
    !options.config.value.every((item) => /^([CR]{1}[01]{1}|A)$/.test(item))
  ) {
    throw new InvalidOptionError('-c, --config');
  }

  if (options.input.count > 1) {
    throw new RedundantOptionError('-i, --input');
  }
  if (options.input.count === 1 && options.input.value === null) {
    throw new MissingOptionValueError('-i, --input');
  }
  if (options.input.count === 1) {
    try {
      await access(options.input.value, constants.R_OK);
    } catch {
      throw new IncorrectPathError('-i, --input');
    }
    const stats = await stat(options.input.value);
    if (stats.isDirectory()) {
      throw new PathIsDirectoryError('-i, --input');
    }
  }

  if (options.output.count > 1) {
    throw new RedundantOptionError('-o, --output');
  }
  if (options.output.count === 1 && options.output.value === null) {
    throw new MissingOptionValueError('-o, --output');
  }
  if (options.output.count === 1) {
    try {
      await access(options.output.value, constants.W_OK);
    } catch {
      throw new IncorrectPathError('-o, --output');
    }
    const stats = await stat(options.output.value);
    if (stats.isDirectory()) {
      throw new PathIsDirectoryError('-o, --output');
    }
  }
};
