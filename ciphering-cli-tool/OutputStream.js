const { Writable } = require('stream');
const { stdout } = require('process');
const { createWriteStream } = require('fs');

module.exports = class extends Writable {
  constructor(options) {
    super(options);

    const { path } = options;
    this._dest =
      path === null ? stdout : createWriteStream(path, { flags: 'a' });
  }

  _write(chunk, encoding, callback) {
    this._dest.write(chunk);
    callback();
  }
};
