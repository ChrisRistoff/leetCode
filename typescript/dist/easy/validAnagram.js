/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
typically using all the original letters exactly once.

Input: s = "anagram", t = "nagaram"
Output: true
 */
function isAnagram(s, t) {
    const map = new Map();
    const len = s.length;
    if (len !== t.length) {
        return false;
    }
    for (let i = 0; i < len; i++) {
        const char = s[i];
        const count = map.get(char) || 0;
        map.set(char, count + 1);
    }
    for (let i = 0; i < len; i++) {
        const char = t[i];
        const count = map.get(char) || 0;
        if (count === 0) {
            return false;
        }
        map.set(char, count - 1);
    }
    return true;
}
;
// time complexity: O(n + m) where n is the length of s and m is the length of t
console.log(isAnagram('anagram', 'nagaram'));
console.log(isAnagram('rat', 'car'));
console.log(isAnagram('a', 'ab'));
console.log(isAnagram('ab', 'a'));
console.log(isAnagram('aacc', 'ccac'));
console.log(isAnagram('aaccaaaaaa', 'caaaaaaaac'));
