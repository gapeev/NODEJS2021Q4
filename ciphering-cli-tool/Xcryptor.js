module.exports = class {
  constructor(cipher, type = 'encrypt') {
    this.cipher = cipher;
    this.type = type;
  }

  exec(data) {
    return this.cipher[this.type](data);
  }
};
