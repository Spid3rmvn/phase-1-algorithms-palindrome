/**
 * Returns true if the input string is a palindrome, false otherwise.
 * @param {string} word - The input string.
 * @returns {boolean} - Whether the string is a palindrome.
 */
function isPalindrome(word) {
  // Reverse the input string
  const reversedWord = word.split('').reverse().join('');
  // Compare the reversed string with the original string
  return word === reversedWord;
}

/* 
  Add your pseudocode here
  1. Take the input string and reverse it.
  2. Compare the reversed string with the original string.
  3. If they are the same, return true. Otherwise, return false.
*/

/*
  Add written explanation of your solution here
  This function takes a string as input and returns true if the string is the same when reversed, and false otherwise.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;