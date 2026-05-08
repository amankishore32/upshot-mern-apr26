// reverseWords(sentence)
// 1. Take a String sentence as the input
// 2. Return a new string where the order of the words is reversed.

// Eg. "Hello world" -> "world Hello"
// Hint: Think it as array of strings

function reverseWords(sentence) {
  // Write code here
  let words = sentence.split(" ");
  let reversedArr = [];
  while (words.length > 0) {
    reversedArr.push(words.pop());
  }
  return reversedArr.join(" ");
}

console.log(reverseWords("Hello world")); // "world Hello"
console.log(reverseWords("Javascript is fun")); // "fun is Javascript"
