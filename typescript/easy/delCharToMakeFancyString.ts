/*
A fancy string is a string where no three consecutive characters are equal.

Given a string s, delete the minimum possible number of characters from s to make it fancy.

Return the final string after the deletion. It can be shown that the answer will always be unique.



Example 1:
Input: s = "leeetcode"
Output: "leetcode"
Explanation:
Remove an 'e' from the first group of 'e's to create "leetcode".
No three consecutive characters are equal, so return "leetcode".

Example 2:
Input: s = "aaabaaaa"
Output: "aabaa"
Explanation:
Remove an 'a' from the first group of 'a's to create "aabaaaa".
Remove two 'a's from the second group of 'a's to create "aabaa".
No three consecutive characters are equal, so return "aabaa".

Example 3:
Input: s = "aab"
Output: "aab"
Explanation: No three consecutive characters are equal, so return "aab".
*/

function makeFancyString(s: string): string {
  let first = s[0]
  let res = s[0]
  let counter = 1
  for (let i=1; i<s.length; i++) {
    if (first === s[i]) {
      if (counter === 2) continue
      counter++
      res += s[i]
    } else {
      first = s[i]
      counter = 1
      res += s[i]
    }
  }

  return res
};

// time: O(n)

console.log(makeFancyString('leeetcode'))
console.log(makeFancyString('aaabaaaa'))
console.log(makeFancyString('aab'))
console.log(makeFancyString('aaaabbbb'))
