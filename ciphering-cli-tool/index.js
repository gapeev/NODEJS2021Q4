const { pipeline } = require('stream/promises');
const parseOptions = require('./parseOptions');
const validateOptions = require('./validateOptions');
const InputStream = require('./InputStream');
const getTransformStreams = require('./getTransformStreams');
const OutputStream = require('./OutputStream');
const { OptionError } = require('./customErrors');

(async () => {
  try {
    const options = parseOptions(process.argv.slice(2));
    await validateOptions(options);
    pipeline(
      new InputStream({ path: options.input.value }),
      ...getTransformStreams(options.config.value),
      new OutputStream({ path: options.output.value })
    );
  } catch (err) {
    if (err instanceof OptionError) {
      console.error(err.message);
      process.exit(1);
    }
    throw err;
  }
})();
