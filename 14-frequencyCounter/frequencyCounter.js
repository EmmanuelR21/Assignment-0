function frequencyCounter(word) {
  const hash = {};

  for (let i = 0; i < word.length; i++) {
    if (!hash[word[i]]) {
      hash[word[i]] = 1;
    } else {
      hash[word[i]]++;
    }
  }

  return hash;
}

// Do not edit this line;
module.exports = frequencyCounter;
