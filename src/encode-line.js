const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let answer = '';
  let counter = 1;
  for (let i = 0; i < str.length; i++){
    if (i === str.length - 1) {
      if (str[i] === str[i - 1]){
        answer += `${counter}${str[i]}`;
      }
      else answer += `${str[i]}`;
    }
    else {
      if (str[i] === str[i + 1]){
        counter++;
      }
      else {
        if (counter === 1) answer += `${str[i]}`;
        else answer += `${counter}${str[i]}`;
        counter = 1;
      }
    }
  }
  return answer;
}

module.exports = {
  encodeLine
};
