const defaultSliderValues = {
  averageScore_greater: 0,
  averageScore_lesser: 100,
};

export const filterOptions = (defaultOptions, options, filters) => {
  const a = [...Object.keys(defaultOptions), ...Object.keys(options)].reduce(
    (acc, key) => {
      if (
        defaultOptions[key] !== options[key] &&
        key !== "averageScore_lesser" &&
        key !== "averageScore_greater"
      ) {
        acc[key] = options[key] || defaultOptions[key];
      }
      return acc;
    },
    {}
  );
  const b = [
    ...Object.keys(defaultSliderValues),
    ...Object.keys(filters),
  ].reduce((acc, key) => {
    if (defaultSliderValues[key] !== filters[key]) {
      acc[key] = filters[key] || defaultSliderValues[key];
    }
    return acc;
  }, {});

  return { ...a, ...b };
};
