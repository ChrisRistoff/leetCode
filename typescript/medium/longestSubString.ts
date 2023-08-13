// given a string s, find the length of the longest substring without repeating character

function lengthOfLongestSubstring(s: string): number {

  const charSet = new Set();
  let left = 0;
  let right = 0;
  let maxLength = 0;

  while (right < s.length) {
    if (!charSet.has(s[right])) {
      charSet.add(s[right]);

      if (maxLength < right - left + 1) {
        maxLength = right - left + 1;
      }

      right++;

    } else {
      charSet.delete(s[left]);
      left++;
    }
  }
    return maxLength;
}

// time complexity: O(n)

console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring("pwwkew")); // 3
