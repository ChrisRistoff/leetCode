/*
Given a string s, return the longest
palindromic

substring
 in s.

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
*/
function longestPalindrome(s) {
    const length = s.length;
    for (let i = length; i > 0; i--) {
        for (let j = 0; j <= length - i; j++) {
            const sub = s.substring(j, j + i);
            if (isPali(sub)) {
                return sub;
            }
        }
    }
}
function isPali(s) {
    let i = 0;
    let j = s.length - 1;
    while (i <= j) {
        if (s[i] !== s[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
}
console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));
console.log(longestPalindrome("a"));
console.log(longestPalindrome("ac"));
console.log(longestPalindrome("bb"));
console.log(longestPalindrome("ccc"));
console.log(longestPalindrome("aaaa"));
console.log(longestPalindrome("abb"));
console.log(longestPalindrome("bba"));
