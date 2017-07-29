/**
 * Converts a value to a Date
 * @param {*} val
 * @return {Date|null}
 */
module.exports = function parseDate(val) {
  if (val == null) {
    return null;
  }

  // Format number
  if (/^\d+$/.test(val)) {
    val = parseFloat(val);
  }

  var date = new Date(val);

  return isNaN(date.valueOf()) ? null : date;
};
