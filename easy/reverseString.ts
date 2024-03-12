/*
Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.



Example 1:
Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

Example 2:
Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
*/

/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  const mid = Math.floor(s.length/2)
  let left = 0
  let right = s.length - 1
  let temp = ""

  while (right >= mid) {
    temp = s[left]
    s[left] = s[right]
    s[right] = temp
    left++
    right--
  }
};

// time: O(n)


console.log(reverseString(["h","e","l","l","o"])) // ["o","l","l","e","h"]
