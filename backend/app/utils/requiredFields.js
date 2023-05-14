export default (raw, requiredFields) => {
  requiredFields.forEach((element) => {
    if (raw[element] === undefined) {
      throw new Error(`The ${element} is required`);
    }
  });
  return true;
};
