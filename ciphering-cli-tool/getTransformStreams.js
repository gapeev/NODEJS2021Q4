const CaesarCipher = require('./CaesarCipher');
const ROT8Cipher = require('./ROT8Cipher');
const AtbashCipher = require('./AtbashCipher');
const Xcryptor = require('./Xcryptor');
const XcryptTransform = require('./XcryptTransform');

module.exports = (config) => {
  const ciphers = {
    C: new CaesarCipher(),
    R: new ROT8Cipher(),
    A: new AtbashCipher(),
  };

  return config.map(
    ([cipher, type = '0']) =>
      new XcryptTransform({
        xcryptor: new Xcryptor(
          ciphers[cipher],
          type === '0' ? 'decrypt' : 'encrypt'
        ),
      })
  );
};
