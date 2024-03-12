/*
For a string sequence, a string word is k-repeating if word concatenated k times is a substring of
sequence. The word's maximum k-repeating value is the highest value k where word is k-repeating in
sequence. If word is not a substring of sequence, word's maximum k-repeating value is 0.

Given strings sequence and word, return the maximum k-repeating value of word in sequence.


Example 1:
Input: sequence = "ababc", word = "ab"
Output: 2
Explanation: "abab" is a substring in "ababc".

Example 2:
Input: sequence = "ababc", word = "ba"
Output: 1
Explanation: "ba" is a substring in "ababc". "baba" is not a substring in "ababc".

Example 3:
Input: sequence = "ababc", word = "ac"
Output: 0
Explanation: "ac" is not a substring in "ababc".
*/
function maxRepeating(sequence, word) {
    const len = sequence.length;
    const wordLen = word.length;
    let count = 0;
    for (let i = 0; i < len; i++) {
        let k = 0;
        while (true) {
            let sub = sequence.slice(i + k * wordLen, i + (k + 1) * wordLen);
            if (sub === word) {
                k++;
            }
            else {
                break;
            }
        }
        count = Math.max(count, k);
    }
    return count;
}
;
// time: O(n^2)
console.log(maxRepeating("ababc", "ab")); // 2
console.log(maxRepeating("ababc", "ba")); // 1
console.log(maxRepeating("ababc", "ac")); // 0
console.log(maxRepeating("aaabaaaabaaabaaaabaaaabaaaabaaaaba", "aaaba")); // 5
console.log(maxRepeating("a", "a")); // 1
console.log(maxRepeating("a", "b")); // 0
console.log(maxRepeating("a", "aa")); // 0
