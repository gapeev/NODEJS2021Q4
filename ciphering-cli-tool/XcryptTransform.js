const { Transform } = require('stream');

module.exports = class extends Transform {
  constructor(options) {
    super(options);
    this.xcryptor = options.xcryptor;
  }

  _transform(chunk, encoding, callback) {
    callback(null, this.xcryptor.exec(chunk.toString()));
  }
};
