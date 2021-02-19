module.exports = function override(config, env) {
  const rules = config.module.rules
    .find((rule) => typeof rule.oneOf === 'object')
    .oneOf.filter((rule) => Array.isArray(rule.use));

  rules.forEach((rule) => {
    rule.use.forEach((moduleLoader) => {
      if (
        moduleLoader.loader &&
        moduleLoader.loader.includes('css-loader/dist') &&
        typeof moduleLoader.options.modules === 'object'
      ) {
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
  });

  return config;
};
