/*
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
*/
function strStr(haystack, needle) {
    const haystackLength = haystack.length;
    const needleLength = needle.length;
    for (let i = 0; i < haystackLength; i++) {
        if (needle[0] === haystack[i]) {
            if (haystack.substring(i, i + needleLength) === needle) {
                return i;
            }
        }
    }
    return -1;
}
;
console.log(strStr("sadbutsad", "sad")); // 0
console.log(strStr("sadbutsad", "but")); // 3
console.log(strStr("sadbutsad", "sadbut")); // 0
