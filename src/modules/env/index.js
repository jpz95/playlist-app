const { APP_PREFIX } = process.env;
const appRegex = new RegExp(`^${APP_PREFIX}`, 'i');

const parseValue = (strValue) => {
  switch (strValue) {
    case 'true':
      return true;

    case 'false':
      return false;

    // TODO handle floats/integers and other cases.
    default:
      return strValue;
  }
};

const parsedEnv = Object.keys(process.env)
  .reduce(
    (accumulatorObj, envVariable) => {
      const parsedValue = parseValue(process.env[envVariable]);
      let parsedEnvVariable = envVariable;

      if (appRegex.test(envVariable)) {
        // Given 'YOUR_PREFIX_myVariable', return only the 'myVariable' part.
        parsedEnvVariable = envVariable.substring(APP_PREFIX.length + 1);
      }

      // eslint-disable-next-line no-param-reassign
      accumulatorObj[parsedEnvVariable] = parsedValue;
      return accumulatorObj;
    },
    // Assigns accumulatorObj to empty object.
    {},
  );

export default Object.freeze(parsedEnv);
