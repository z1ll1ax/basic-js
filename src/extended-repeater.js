const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let answer = '';
  let temp = str;
  let repeatTimes = 1,
    separator = '+', 
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|';
  if (options.repeatTimes) repeatTimes = options.repeatTimes;
  if (options.separator) separator = options.separator;
  if (options.addition) addition = options.addition;
  if (options.additionRepeatTimes) additionRepeatTimes = options.additionRepeatTimes;
  if (options.additionSeparator) additionSeparator = options.additionSeparator;
  if (options.addition === false) addition = 'false';
  else if (options.addition === null) addition = 'null';
  for (let i = 0; i < additionRepeatTimes; i++){
    if (i !== 0) temp += additionSeparator;
    temp += addition;
  }

  for (let i = 0; i < repeatTimes; i++){
    if (i !== 0) answer += separator;
    answer += temp;
  }
  return answer;
}

module.exports = {
  repeater
};
