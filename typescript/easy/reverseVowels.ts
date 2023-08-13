/*
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases,
more than once.

Example 1:
Input: s = "hello"
Output: "holle"

Example 2:
Input: s = "leetcode"
Output: "leotcede"
*/

function reverseVowels(s: string): string {

  const set = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

  const arr = s.split('');
  let len = arr.length;
  let temp = '';

  let left = 0;
  let right = len - 1;

  while (left < right) {
    if (!set.has(arr[left])) {
      left++;
      continue;
    }

    if (!set.has(arr[right])) {
      right--;
      continue;
    }

    temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    left++;
    right--;
  }

  return arr.join('');
};

// time complexity: O(n)

console.log(reverseVowels('hello')); // "holle"
console.log(reverseVowels('leetcode')); // "leotcede"
console.log(reverseVowels('aA')); // "Aa"
