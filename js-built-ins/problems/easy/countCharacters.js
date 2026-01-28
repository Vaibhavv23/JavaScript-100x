/*
  Write a function `countCharacters` which takes a string as input and returns an object representing the frequency of each character in the string.

  Example:
  - Input: "hello"
  - Output: { h: 1, e: 1, l: 2, o: 1 }

  - Input: "aabbcc"
  - Output: { a: 2, b: 2, c: 2 }

  - Input: ""
  - Output: {}

  Note:
  - The function should count all characters, including spaces and special characters.
  - The function should handle empty strings gracefully.

  Once you've implemented the logic, test your code by running
  - `npm run test-countChar`
*/

// Way 1
const countCharacters = (word) => {
  let result = {};
  for (let i = 0; i < word.length; i++) {
    let char = word.charAt(i);
    if (result[char]) {
      result[char]++;
    } else {
      result[char] = 1;
    }
  }
  return result;
};

module.exports = countCharacters;

// Way 2: Using reduce() with split()
// Alternative functional approach
/*
const countCharacters = (word) => {
  return word.split('').reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});
};
*/

// Way 3: Using a Map (modern approach)
// Better performance for large strings
/*
const countCharacters = (word) => {
  const charMap = new Map();
  for (const char of word) {
    charMap.set(char, (charMap.get(char) || 0) + 1);
  }
  return Object.fromEntries(charMap);
};
*/

// Way 4: Using forEach loop (readable approach)
// Good balance between readability and simplicity
/*
const countCharacters = (word) => {
  const result = {};
  [...word].forEach(char => {
    result[char] = (result[char] || 0) + 1;
  });
  return result;
};
*/
