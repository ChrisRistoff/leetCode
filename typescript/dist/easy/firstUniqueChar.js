/*
Given a string s, find the first non-repeating character in it and return its index.
If it does not exist, return -1.


Example 1:
Input: s = "leetcode"
Output: 0

Example 2:
Input: s = "loveleetcode"
Output: 2

Example 3:
Input: s = "aabb"
Output: -1
*/
function firstUniqChar(s) {
    let map = new Map();
    for (let char of s) {
        map.set(char, map.get(char) + 1 || 1);
    }
    for (let i = 0; i < s.length; i++) {
        if (map.get(s[i]) === 1)
            return i;
    }
    return -1;
}
;
// time complexity: O(n)
console.log(firstUniqChar("leetcode")); // 0
console.log(firstUniqChar("loveleetcode")); // 2
console.log(firstUniqChar("aabb")); // -1
// faster solution
function firstUniqChar2(s) {
    let set = new Set();
    for (let i = 0; i < s.length; i++) {
        if (!set.has(s[i]) && s.indexOf(s[i], i + 1) === -1) {
            return i;
        }
        set.add(s[i]);
    }
    return -1;
}
;
// time complexity: O(n)
console.log(firstUniqChar2("leetcode")); // 0
console.log(firstUniqChar2("loveleetcode")); // 2
console.log(firstUniqChar2("aabb")); // -1
