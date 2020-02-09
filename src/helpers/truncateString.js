/*
 * Function to truncate and trim a string
 */

const truncateString = (string, length) => {
  if (!string) return null;
  const stringLength = length || 30;
  // we only want to truncate strings that are longer than the length provided
  if (string.length > stringLength) {
    const truncatedString = string.substring(0, stringLength);
    const stringWithElipses = `${truncatedString.trim()}...`;
    return stringWithElipses;
  }
  return string;
};

export default truncateString;
