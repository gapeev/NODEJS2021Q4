const { Transform } = require('stream');
const CaesarCipher = require('./CaesarCipher');

module.exports = class extends Transform {
  constructor(options) {
    super(options);
    this.xcryptor = new CaesarCipher();
    this.xcryptorType = options.xcryptorType;
  }

  _transform(chunk, encoding, callback) {
    callback(null, this.xcryptor[this.xcryptorType](chunk.toString()));
  }
};
