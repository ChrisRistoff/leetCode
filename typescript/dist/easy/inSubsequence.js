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
    let sIndex = 0;
    let tIndex = 0;
    while (tIndex < t.length) {
        if (s[sIndex] === t[tIndex]) {
            sIndex++;
            if (sIndex === s.length) {
                return true;
            }
        }
        tIndex++;
    }
    return false;
}
;
console.log(isSubsequence("abc", "ahbgdc")); // true
console.log(isSubsequence("axc", "ahbgdc")); // false
console.log(isSubsequence("acb", "ahbgdc")); // false
