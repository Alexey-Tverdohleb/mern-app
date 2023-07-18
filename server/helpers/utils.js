export const pick = (source = {}, keys = []) => {
  const keysArray = Array.isArray(keys) ? keys : [keys];

  return keysArray.reduce((acc, key) => ({ ...acc, [key]: source[key] }), {});
};
