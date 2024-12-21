const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(type = true){
    this.type = type;
  }
  codeALetter(letter, keyLetter){
    const letterCode = letter.charCodeAt(0) - 97;
    const keyLetterCode = keyLetter.charCodeAt(0) - 97;
    return String.fromCharCode((letterCode + keyLetterCode + 26) % 26 + 65);
  }
  decodeALetter(letter, keyLetter){
    const letterCode = letter.charCodeAt(0) - 97;
    const keyLetterCode = keyLetter.charCodeAt(0) - 97;
    return String.fromCharCode((letterCode - keyLetterCode + 26) % 26 + 65);
  }
  encrypt(quote, key) {
    if (!quote || !key) throw new Error('Incorrect arguments!');
    let tempQuote = quote.toLowerCase();
    let tempKey = key.toLowerCase();
    let result = '';
    let k = 0;
    for (let i = 0; i < quote.length; i++) {
      if (tempQuote[i] >= 'a' && tempQuote[i] <= 'z') {
        result += this.codeALetter(tempQuote[i], tempKey[k]);
        k++;
        if (k === key.length) k = 0;
      }
      else result += tempQuote[i];
    }
    return this.type ? result : result.split('').reverse().join('');
  }
  decrypt(quote, key) {
    if (!quote || !key) throw new Error('Incorrect arguments!');
    let tempQuote = quote.toLowerCase();
    let tempKey = key.toLowerCase();
    let result = '';
    let k = 0;
    for (let i = 0; i < quote.length; i++) {
      if (tempQuote[i] >= 'a' && tempQuote[i] <= 'z') {
        result += this.decodeALetter(tempQuote[i], tempKey[k]);
        k++;
        if (k === key.length) k = 0;
      }
      else result += tempQuote[i];
    }
    return this.type ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
