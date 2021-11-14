const CaesarTransform = require('./CaesarTransform');
const ROT8Transform = require('./ROT8Transform');
const AtbashTransform = require('./AtbashTransform');

module.exports = (config) => {
  const transforms = {
    C: CaesarTransform,
    R: ROT8Transform,
    A: AtbashTransform,
  };

  return config.map(
    ([cipher, type = '0']) =>
      new transforms[cipher]({
        xcryptorType: type === '0' ? 'decrypt' : 'encrypt',
      })
  );
};
