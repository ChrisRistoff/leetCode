/*
You are given two strings word1 and word2. Merge the strings by adding letters in alternating
order, starting with word1. If a string is longer than the other, append the additional letters
onto the end of the merged string.

Return the merged string.

Example 1:
Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r
*/
function mergeAlternately(word1, word2) {
    let result = "";
    let len;
    if (word1.length > word2.length) {
        len = word1.length;
    }
    else {
        len = word2.length;
    }
    for (let i = 0; i < len; i++) {
        if (word1[i]) {
            result += word1[i];
        }
        if (word2[i]) {
            result += word2[i];
        }
    }
    return result;
}
;
// time complexity: O(n)
console.log(mergeAlternately("abc", "pqr")); // "apbqcr"
console.log(mergeAlternately("ab", "pqrs")); // "apbqrs"
console.log(mergeAlternately("abcd", "pq")); // "apbqcd"
console.log(mergeAlternately("ab", "pq")); // "apbq"
console.log(mergeAlternately("abcd", "pqrs")); // "apbqcrds"
