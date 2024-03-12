/*
Given a string s, return the maximum number of occurrences of any substring under the
following rules:

The number of unique characters in the substring must be less than or equal to maxLetters.
The substring size must be between minSize and maxSize inclusive.


Example 1:
Input: s = "aababcaab", maxLetters = 2, minSize = 3, maxSize = 4
Output: 2
Explanation: Substring "aab" has 2 occurrences in the original string.
It satisfies the conditions, 2 unique letters and size 3 (between minSize and maxSize).

Example 2:
Input: s = "aaaa", maxLetters = 1, minSize = 3, maxSize = 3
Output: 2
Explanation: Substring "aaa" occur 2 times in the string. It can overlap.
*/
function maxFreq(s, maxLetters, minSize, maxSize) {
    const map = new Map();
    let maxCount = 0;
    for (let i = 0; i <= s.length - minSize; i++) {
        const substring = s.substring(i, i + minSize);
        const uniqueChars = new Set(substring).size;
        if (uniqueChars <= maxLetters) {
            map.set(substring, (map.get(substring) || 0) + 1);
            maxCount = Math.max(maxCount, map.get(substring));
        }
    }
    return maxCount;
}
;
// time: O(n * m)
console.log(maxFreq("aababcaab", 2, 3, 4));
console.log(maxFreq("aaaa", 1, 3, 3));
console.log(maxFreq("aabcabcab", 2, 2, 3));
console.log(maxFreq("abcde", 2, 3, 3));
