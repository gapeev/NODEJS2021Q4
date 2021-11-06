module.exports = class {
  constructor(shift = 0) {
    this.codeStart = 97;
    this.codeEnd = 122;
    this.shift = shift;
  }

  isXcrypted(char) {
    const code = char.toLowerCase().charCodeAt(0);
    return code >= this.codeStart && code <= this.codeEnd;
  }

  nextCode(code, shift) {
    return code + shift;
  }

  normalizeCode(code) {
    if (code < this.codeStart) {
      return this.codeEnd - (this.codeStart - code - 1);
    }
    if (code > this.codeEnd) {
      return this.codeStart + (code - this.codeEnd - 1);
    }
    return code;
  }

  xcrypt(data, shift) {
    return data
      .split('')
      .map((char) => {
        const newChar = this.isXcrypted(char)
          ? String.fromCharCode(
              this.normalizeCode(
                this.nextCode(char.toLowerCase().charCodeAt(0), shift)
              )
            )
          : char;
        return char === char.toUpperCase() ? newChar.toUpperCase() : newChar;
      })
      .join('');
  }

  encrypt(data) {
    return this.xcrypt(data, this.shift);
  }

  decrypt(data) {
    return this.xcrypt(data, -this.shift);
  }
};
