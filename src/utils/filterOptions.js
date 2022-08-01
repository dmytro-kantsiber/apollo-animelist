export const filterOptions = (defaultOptions, options) => {
  const a = [...Object.keys(defaultOptions), ...Object.keys(options)].reduce(
    (acc, key) => {
      if (defaultOptions[key] !== options[key]) {
        acc[key] = options[key] || defaultOptions[key];
      }
      return acc;
    },
    {}
  );

  return { ...a };
};
