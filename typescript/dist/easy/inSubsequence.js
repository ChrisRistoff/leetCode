/*
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some
(can be none) of the characters without disturbing the relative positions of the remaining
characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).



Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true
*/
function isSubsequence(s, t) {
    let map = new Map();
    for (let i = 0; i < t.length; i++) {
        if (map.has(t[i])) {
            map.get(t[i])[1] += 1;
        }
        else {
            map.set(t[i], [i, 1]);
        }
    }
    for (let i = 0; i < s.length; i++) {
        if (!map.has(s[i])) {
            return false;
        }
        let prev = map.get(s[i - 1]);
        if (prev && prev[0] > map.get(s[i])[0]) {
            return false;
        }
        let [index, count] = map.get(s[i]);
        if (count === 1) {
            map.delete(s[i]);
        }
        else {
            map.set(s[i], [index, count - 1]);
        }
    }
    return true;
}
;
console.log(isSubsequence("abc", "ahbgdc")); // true
console.log(isSubsequence("axc", "ahbgdc")); // false
console.log(isSubsequence("acb", "ahbgdc")); // false
