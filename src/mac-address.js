const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let groups = n.split('-');
  if (groups.length !== 6) return false;
  for (let i = 0; i < groups.length; i++){
    if (groups[i].length !== 2) return false;
    if (!((groups[i][0] >= 0 && groups[i][0] <= 9
      || groups[i][0] >= 'A' && groups[i][0] <= 'F')
    && (groups[i][1] >= 0 && groups[i][1] <= 9
      || groups[i][1] >= 'A' && groups[i][1] <= 'F'))){
        return false;
      }
  }
  return true;
}
module.exports = {
  isMAC48Address
};
