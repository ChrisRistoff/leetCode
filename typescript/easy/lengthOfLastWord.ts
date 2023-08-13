/*
Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal
substring
 consisting of non-space characters only.

Example 1:
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.

Example 2:
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
 */

function lengthOfLastWord(s: string): number {

  let wLen = 0;
  const len = s.length - 1;

  for (let i = len; i >= 0; i--) {
    let letr = s[i];
    if (letr !== ' ') {
      wLen++;
    } else if (wLen > 0 && letr === ' ') {
      break;
    }
  }

  return wLen;
};

// time complexity: O(n)


console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));
console.log(lengthOfLastWord("a"));

// let arr = s.trim().split(/\s+/);
