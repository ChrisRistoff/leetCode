/*
Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order
of characters. No two characters may map to the same character, but a character may map to itself.

Example 1:
Input: s = "egg", t = "add"
Output: true

Example 2:
Input: s = "foo", t = "bar"
Output: false

Example 3:
Input: s = "paper", t = "title"
Output: true
*/
function isIsomorphic(s, t) {
    const sMap = new Map();
    const tMap = new Map();
    for (let i = 0; i < s.length; i++) {
        let sChar = s[i];
        let tChar = t[i];
        if (sMap.has(sChar) && sMap.get(sChar) !== tChar) {
            return false;
        }
        if (tMap.has(tChar) && tMap.get(tChar) !== sChar) {
            return false;
        }
        sMap.set(sChar, tChar);
        tMap.set(tChar, sChar);
    }
    return true;
}
;
// time complexity: O(n)
console.log(isIsomorphic('egg', 'add'));
console.log(isIsomorphic('foo', 'bar'));
console.log(isIsomorphic('paper', 'title'));
console.log(isIsomorphic('bbbaaaba', 'aaabbbba'));
