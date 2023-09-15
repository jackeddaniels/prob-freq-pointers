'use strict';

/** takes two strings, a word and letters
 *  returns true if letter can be used to make word
 *  else return false
 */
function canConstructWord(word, letters) {
  if (letters.length === 0|| letters.length < word.length) return false;
  if (word.length === 0) return true;

  let wordFreqCounter = {};
  let letterFreqCounter = {};

  // making frequency counters for both letter and word
  for (let idx = 0;idx < letters.length;idx++) {
      if (idx < word.length) {
        wordFreqCounter[word[idx]] = (wordFreqCounter[word[idx]] || 0) + 1
      }
      letterFreqCounter[letters[idx]] = (letterFreqCounter[letters[idx]] || 0) + 1;
  }

  // checking that every letter in word is present in letters
  for (let letter in wordFreqCounter) {
    if (letterFreqCounter[letter] < wordFreqCounter[letter] || !(letter in letterFreqCounter)) return false;
  }

  return true;
}
