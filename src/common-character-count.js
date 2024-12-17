const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  let repeated = [];
  let arrS1 = s1.split('');
  let arrS2 = s2.split('');
  for (let i = 0; i < arrS1.length; i++){
    let foundInS1 = arrS1.filter((value) => value === s1[i]).length;
    let foundInS2 = arrS2.filter((value) => value === s1[i]).length;
    if (foundInS1 > 0 && foundInS2 > 0 && repeated.filter((value) => value === s1[i]).length === 0){
      repeated.push(s1[i]);
      (foundInS1 > foundInS2) ? count += foundInS2 : count += foundInS1;
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
