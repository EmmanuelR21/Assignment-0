function isPalindrome(word) {
  for (let i = 0; i < Math.ceil(word.length / 2); i++) {
    if (word[i] != word[word.length - (1 + i)]) return false;
  }
  return true;
}

// Do not edit this line;
module.exports = isPalindrome;
