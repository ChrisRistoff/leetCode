/*
Given two strings s and p, return an array of all the start indices of p's anagrams in s.
You may return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
typically using all the original letters exactly once.


Example 1:
Input: s = "cbaebabacd", p = "abc"
Output: [0,6]
Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".

Example 2:
Input: s = "abab", p = "ab"
Output: [0,1,2]
Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".
*/
function findAnagrams(s, p) {
    let res = [];
    let left = 0;
    let right = p.length - 1;
    while (right < s.length) {
        let map = popMap(p);
        while (right >= left) {
            let amount = map.get(s[right]);
            if (!amount || amount === 0) {
                break;
            }
            else {
                map.set(s[right], amount - 1);
            }
            right--;
        }
        if (left === right + 1) {
            res.push(left);
        }
        left++;
        right = p.length + left - 1;
    }
    return res;
}
;
function popMap(str) {
    let map = new Map();
    for (let char of str) {
        map.set(char, (map.get(char) + 1) || 1);
    }
    return map;
}
// time complexity: O(n)
console.log(findAnagrams("cbaebabacd", "abc"));
console.log(findAnagrams("abab", "ab"));
console.log(findAnagrams("baa", "aa"));
console.log(findAnagrams("abacbabc", "abc"));
function findAnagrams2(s, p) {
    let left = 0;
    let len = p.length;
    let right = len;
    let res = [];
    if (s === p)
        return [0];
    p = p.split('').sort().join('');
    while (right <= s.length) {
        let str = s.substring(left, right).split('').sort().join('');
        if (str === p)
            res.push(left);
        left++;
        right++;
    }
    return res;
}
;
// time complexity: O(nlogn)
console.log(findAnagrams2("cbaebabacd", "abc"));
console.log(findAnagrams2("abab", "ab"));
console.log(findAnagrams2("baa", "aa"));
console.log(findAnagrams2("abacbabc", "abc"));
