class BaseError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

class OptionError extends BaseError {
  constructor(message, option) {
    super(
      `${message} (${option}). See documentation for more information about tool's options.`
    );
    this.option = option;
  }
}

class MissingOptionError extends OptionError {
  constructor(option) {
    super('Required option is missing', option);
  }
}

class MissingOptionValueError extends OptionError {
  constructor(option) {
    super('Option value is missing', option);
  }
}

class RedundantOptionError extends OptionError {
  constructor(option) {
    super('Redundant option', option);
  }
}

class InvalidOptionError extends OptionError {
  constructor(option) {
    super('Invalid option value', option);
  }
}

class IncorrectPathError extends OptionError {
  constructor(option) {
    super('Path does not exist or is unavailable', option);
  }
}

class PathIsDirectoryError extends OptionError {
  constructor(option) {
    super('Path is a directory', option);
  }
}

module.exports = {
  OptionError,
  MissingOptionError,
  MissingOptionValueError,
  RedundantOptionError,
  InvalidOptionError,
  IncorrectPathError,
  PathIsDirectoryError,
};
