export const setSearchObject = (obj) => {
  Object.keys(obj).forEach((key) => {
    if (
      !obj[key] ||
      obj[key] === "Any" ||
      obj[key] === "Not in list" ||
      obj[key] === "100" ||
      obj[key] === "0"
    ) {
      delete obj[key];
    }
  });

  return obj;
};
