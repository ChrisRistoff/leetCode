/*
Given a string s and a dictionary of strings wordDict, return true if s can be segmented
into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.

Input: s = "leetcode", wordDict = ["leet","code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".

Input: s = "applepenapple", wordDict = ["apple","pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
Note that you are allowed to reuse a dictionary word.
 */
function wordBreak(s, wordDict) {
    let wordSet = new Set(wordDict);
    let length = s.length;
    let dp = new Array(length + 1).fill(false);
    dp[0] = true; // empty string to be true
    for (let i = 1; i <= length; i++) {
        for (let j = 0; j < i; j++) {
            let word = s.substring(j, i);
            if (dp[j] && wordSet.has(word)) {
                dp[i] = true;
                break;
            }
        }
    }
    return dp[length];
}
;
// time complexity: O(n^2)
console.log(wordBreak("leetcode", ["leet", "code"]));
console.log(wordBreak("applepenapple", ["apple", "pen"]));
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]));
