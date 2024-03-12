/*
Given an integer array nums and an integer k, return the kth largest element in the array.

Note that it is the kth largest element in the sorted order, not the kth distinct element.

Can you solve it without sorting?



Example 1:
Input: nums = [3,2,1,5,6,4], k = 2
Output: 5

Example 2:
Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
Output: 4
*/

// 1,2,2,3,3,4,5,5,6
// 1,2,3,4,5,6

function findKthLargest(nums: number[], k: number): number {

  let count = 0;
  let length = nums.length;
  nums.sort((a, b) => b - a);

  if (nums[0] === nums[length - 1]) {
    return nums[0];
  }

  if (k === 1) {
    return nums[0];
  }

  for (let i = 0; i < length; i++) {
    let current = nums[i];
    let next = nums[i + 1];

    count++;

    if (current === next) {
      continue;
    }

    if (count === k) {
      return current;
    }
  }

  return nums[0];
};

// time: O(n log n)

console.log(findKthLargest([3,2,1,5,6,4], 2)); // 5
console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4)); // 4
