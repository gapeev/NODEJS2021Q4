const { Readable } = require('stream');
const { stdin } = require('process');
const { createReadStream } = require('fs');

module.exports = class extends Readable {
  constructor(options) {
    super(options);

    const { path } = options;
    this._src = path === null ? stdin : createReadStream(path);

    this._src.on('data', (chunk) => {
      if (!this.push(chunk)) {
        this._src.pause();
      }
    });

    this._src.on('end', () => {
      this.push(null);
    });
  }

  _read() {
    this._src.resume();
  }
};
