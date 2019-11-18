export const truncate = (str, limit = 25) => {
  if (!str) return "No Text";
  if (str.length < limit) return str;
  return `${str.substring(0, limit)}...`;
};
