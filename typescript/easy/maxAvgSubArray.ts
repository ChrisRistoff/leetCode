/*
You are given an integer array nums consisting of n elements, and an integer k.

Find a contiguous subarray whose length is equal to k that has the maximum average value and
return this value. Any answer with a calculation error less than 10-5 will be accepted.



Example 1:
Input: nums = [1,12,-5,-6,50,3], k = 4
Output: 12.75000
Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75

Example 2:
Input: nums = [5], k = 1
Output: 5.00000
*/

function findMaxAverage(nums: number[], k: number): number {
  let currentMax = 0
  const len = nums.length

  if(k===1) {
    return Math.max(...nums)
  }

  for (let i = 0; i<k; i++) {
    currentMax += nums[i]
  }

  let max = currentMax
  for (let i = k; i<len; i++) {
    currentMax = currentMax + nums[i] - nums[i-k]
    if (max < currentMax) {
      max = currentMax
    }
  }

  return max/k
};

// time: O(n)


console.log(findMaxAverage([1,12,-5,-6,50,3], 4)) // 12.75
console.log(findMaxAverage([5], 1)) // 5
console.log(findMaxAverage([0,4,0,3,2], 1)) // 4
console.log(findMaxAverage([0,4,0,3,2], 2)) // 3.5
console.log(findMaxAverage([0,4,0,3,2], 3)) // 2.33333
