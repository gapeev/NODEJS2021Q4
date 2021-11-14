const Cipher = require('./Cipher');

module.exports = class extends Cipher {
  nextCode(code) {
    return this.codeStart + this.codeEnd - code;
  }
};
