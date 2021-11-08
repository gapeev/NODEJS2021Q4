const { Transform } = require('stream');
const ROT8Cipher = require('./ROT8Cipher');

module.exports = class extends Transform {
  constructor(options) {
    super(options);
    this.xcryptor = new ROT8Cipher();
    this.xcryptorType = options.xcryptorType;
  }

  _transform(chunk, encoding, callback) {
    callback(null, this.xcryptor[this.xcryptorType](chunk.toString()));
  }
};
