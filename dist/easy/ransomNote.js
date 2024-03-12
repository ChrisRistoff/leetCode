/*
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by
using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.



Example 1:
Input: ransomNote = "a", magazine = "b"
Output: false

Example 2:
Input: ransomNote = "aa", magazine = "ab"
Output: false

Example 3:
Input: ransomNote = "aa", magazine = "aab"
Output: true
*/
function canConstruct(ransomNote, magazine) {
    let map = new Map();
    let len = ransomNote.length;
    for (let i = 0; i < len; i++) {
        let char = ransomNote[i];
        if (map.has(char)) {
            let val = map.get(char);
            map.set(char, val + 1);
            continue;
        }
        map.set(char, 1);
    }
    len = magazine.length;
    for (let i = 0; i < len; i++) {
        let char = magazine[i];
        if (map.has(char)) {
            let val = map.get(char) - 1;
            if (val === 0) {
                map.delete(char);
                continue;
            }
            map.set(char, val);
        }
    }
    return map.size === 0;
}
;
// time complexity: O(n)
console.log(canConstruct("aa", "aab")); // true
console.log(canConstruct("aa", "ab")); // false
console.log(canConstruct("a", "b")); // false
