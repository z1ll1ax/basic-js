const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let numbers = [];
  while (n > 0){
    numbers.push(n % 10);
    n = Math.floor(n / 10);
  }
  let max = -1;
  for (let i = 0; i < numbers.length; i++){
    let tempNumbers = numbers.slice(0, i).concat(numbers.slice(i + 1, numbers.length));
    let temp = 0;
    while (tempNumbers.length){
      let number = tempNumbers.pop();
      temp *= 10;
      temp += number;
    }
    if (temp > max) max = temp;
  }
  return max;
}

module.exports = {
  deleteDigit
};
