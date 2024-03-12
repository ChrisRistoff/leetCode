/*
Given a string s, check if it can be constructed by taking a substring of it and appending
multiple copies of the substring together.



Example 1:
Input: s = "abab"
Output: true
Explanation: It is the substring "ab" twice.

Example 2:
Input: s = "aba"
Output: false

Example 3:
Input: s = "abcabcabcabc"
Output: true
Explanation: It is the substring "abc" four times or the substring "abcabc" twice.
*/
function repeatedSubstringPattern(s) {
    if (s.length === 1) {
        return false;
    }
    let subStr = '';
    for (let i = 0; i < s.length / 2; i++) {
        subStr += s[i];
        let j = i + 1;
        while (j < s.length && s.slice(j, j + subStr.length) === subStr) {
            j += subStr.length;
        }
        if (j === s.length) {
            return true;
        }
    }
    return false;
}
// time complexity: O(n^2)
console.log(repeatedSubstringPattern('abab')); // true
console.log(repeatedSubstringPattern('aba')); // false
console.log(repeatedSubstringPattern('abcabcabcabc')); //true
console.log(repeatedSubstringPattern('ababba')); // false
// the faster solution
function repeatedSubstringPattern2(s) {
    return (s + s).slice(1, -1).includes(s);
}
// time complexity: O(n)
console.log(repeatedSubstringPattern2('abab')); // true
console.log(repeatedSubstringPattern2('aba')); // false
console.log(repeatedSubstringPattern2('abcabcabcabc')); //true
console.log(repeatedSubstringPattern2('ababba')); // false
