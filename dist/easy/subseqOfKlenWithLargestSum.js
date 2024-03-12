/*
You are given an integer array nums and an integer k.
You want to find a subsequence of nums of length k that has the largest sum.

Return any such subsequence as an integer array of length k.

A subsequence is an array that can be derived from another array by deleting some or no elements
without changing the order of the remaining elements.


Example 1:
Input: nums = [2,1,3,3], k = 2
Output: [3,3]
Explanation:
The subsequence has the largest sum of 3 + 3 = 6.

Example 2:
Input: nums = [-1,-2,3,4], k = 3
Output: [-1,3,4]
Explanation:
The subsequence has the largest sum of -1 + 3 + 4 = 6.

Example 3:
Input: nums = [3,4,3,3], k = 2
Output: [3,4]
Explanation:
The subsequence has the largest sum of 3 + 4 = 7.
Another possible subsequence is [4, 3].
*/
function maxSubsequence(nums, k) {
    let sorted = nums.map((num, index) => ({ num, index }));
    sorted = sorted.sort((a, b) => b.num - a.num || a.index - b.index);
    const result = sorted.slice(0, k).sort((a, b) => a.index - b.index);
    const final = result.map(item => item.num);
    return final;
}
;
// time: O(nlogn) because of the sort
console.log(maxSubsequence([2, 1, 3, 3], 2));
console.log(maxSubsequence([-1, -2, 3, 4], 3));
console.log(maxSubsequence([3, 4, 3, 3], 2));
console.log(maxSubsequence([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
