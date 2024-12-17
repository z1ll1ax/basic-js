const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let dns = {};
  for (const domain of domains){
    let part = domain.split('.');
    let dmn = ''
    for (let k = part.length - 1; k >= 0; k--){
      dmn += `.${part[k]}`;
      if (!dns[dmn]) dns[dmn] = 1;
      else dns[dmn] += 1;
    }
  }
  return dns;
}

module.exports = {
  getDNSStats
};
