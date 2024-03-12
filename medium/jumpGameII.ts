/*
You are given a 0-indexed array of integers nums of length n.
You are initially positioned at nums[0].

Each element nums[i] represents the maximum length of a forward jump from index i.
In other words, if you are at nums[i], you can jump to any nums[i + j] where:

0 <= j <= nums[i] and
i + j < n
Return the minimum number of jumps to reach nums[n - 1].
The test cases are generated such that you can reach nums[n - 1].



Example 1:
Input: nums = [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2.
Jump 1 step from index 0 to 1, then 3 steps to the last index.

Example 2:
Input: nums = [2,3,0,1,4]
Output: 2
*/

function jump(nums: number[]): number {
  let count: number = 0;
  let n: number = 0;
  const len: number = nums.length - 1;

  while (n < len) {
    let max: number = 0;
    const length: number = n + nums[n];

    if (length >= len) {
      count++;
      break;
    }

    for (let i = n; i <= length; i++) {
      if (nums[i] + i > max) {
        max = nums[i] + i;
        n = i;
      }
    }

    count++;
  }
  return count;
};

// time: O(n) because we are only looping through the array once

console.log(jump([2,3,1,1,4])); // 2
console.log(jump([2,3,0,1,4])); // 2
console.log(jump([1,2,3])); // 2
console.log(jump([1,2,1,1,1])); // 3
console.log(jump([1,1,1,1])); // 3
console.log(jump([1,1,1,1,1])); // 4
console.log(jump([1,1,1,1,1,1])); // 5
