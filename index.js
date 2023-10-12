function isPalindrome(word) {
  // Convert the string to lowercase and remove non-letter characters
  const cleanWord = word.toLowerCase().replace(/[^a-z]/g, '');

  // Compare the cleaned string with its reverse
  return cleanWord === cleanWord.split('').reverse().join('');
}
/*
  Add written explanation of your solution here
  - The function takes an input string `word`.
  - It first converts the string to lowercase to ensure case-insensitive comparison.
  - It then removes any non-letter characters by using a regular expression.
  - The cleaned string is compared with its reverse to check if it's a palindrome.
  - If the original and reversed strings match, it returns true, indicating a palindrome. Otherwise, it returns false.
*/
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("A man a plan a canal Panama"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("Was it a car or a cat I saw?"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hello"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("deified"));
}

module.exports = isPalindrome;
