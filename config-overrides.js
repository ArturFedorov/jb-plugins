module.exports = function override(config, env) {
  const rules = config.module.rules
    .find((rule) => typeof rule.oneOf === 'object')
    .oneOf.filter((rule) => Array.isArray(rule.use));

  rules.forEach((rule) => {
    const moduleLoader = rule.use.find((loader) => {
      return (
        loader.loader &&
        loader.loader.includes('css-loader/dist') &&
        typeof loader.options.modules === 'object'
      );
    });

    if (moduleLoader) {
      // eslint-disable-next-line no-param-reassign
      moduleLoader.options = {
        ...moduleLoader.options,
        modules: {
          ...moduleLoader.options.modules,
          exportLocalsConvention: 'camelCaseOnly'
        }
      };
    }
  });

  return config;
};
