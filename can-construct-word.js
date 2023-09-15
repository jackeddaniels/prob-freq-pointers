'use strict';

/** takes two strings, a word and letters
 *  returns true if letter can be used to make word
 *  else return false
 */
function canConstructWord(word, letters) {
  if (letters.length === 0) return false;
  if (word.length === 0) return true;

  let wordFreq = freqCounter(word);
  let lettersFreq = freqCounter(letters);

  for (let char in wordFreq) {

    if (wordFreq[char] < lettersFreq[char] || !letters[char]) {
      return false;
    }

  }

  return true;
}


/** takes a string as input
 *  creates an object with keys as letters, values as frequency of those letters
 *  returns that object
 */
function freqCounter(str) {
  let freqCounter = {};
  for (let char of str) {
    freqCounter[char] = (freqCounter[char] || 0) + 1;
  }
  return freqCounter;
}
