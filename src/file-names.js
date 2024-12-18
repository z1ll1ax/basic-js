const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let answer = [];
  for (let i = 0; i < names.length; i++){
    if (answer.filter((value) => value === names[i]).length === 0) {
      answer.push(names[i]);
    }
    else {
      let counter = 1;
      let temp = `${names[i]}(${counter})`;
      while (true){
        if (answer.filter((value) => value === temp).length === 0) {
          answer.push(temp);
          break;
        }
        else {
          temp = `${names[i]}(${counter})`;
          counter++;
        }
      }
    }
  }
  return answer;
}

module.exports = {
  renameFiles
};
