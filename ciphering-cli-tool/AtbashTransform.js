const { Transform } = require('stream');
const AtbashCipher = require('./AtbashCipher');

module.exports = class extends Transform {
  constructor(options) {
    super(options);
    this.xcryptor = new AtbashCipher();
    this.xcryptorType = options.xcryptorType;
  }

  _transform(chunk, encoding, callback) {
    callback(null, this.xcryptor[this.xcryptorType](chunk.toString()));
  }
};
