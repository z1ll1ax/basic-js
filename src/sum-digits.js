const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  if (n < 10) return n;
  let numbers = [];
  while (n > 0){
    numbers.push(n % 10);
    n =  Math.floor(n / 10);
  }
  let sum = numbers.reduce((acc, curr) => {
    acc += curr;
    return acc;
  }, 0);
  return getSumOfDigits(sum);
}

module.exports = {
  getSumOfDigits
};
