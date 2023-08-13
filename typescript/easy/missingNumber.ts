/*
Given an array nums containing n distinct numbers in the range [0, n], return the only number
in the range that is missing from the array.

Example 1:
Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3].
2 is the missing number in the range since it does not appear in nums.

Example 2:
Input: nums = [0,1]
Output: 2
Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2].
2 is the missing number in the range since it does not appear in nums.
*/

function missingNumber(nums: number[]): number {

  let actualSum = 0;

  for (let i = 0; i < nums.length; i++) {
    actualSum += nums[i];
  }

  return (nums.length * (nums.length + 1) / 2) - actualSum;
};

// time complexity: O(n)

console.log(missingNumber([3, 0, 1])); // 2
console.log(missingNumber([0, 1])); // 2


function missingNumber2(nums: number[]): number {
  const set = new Set(nums);

  for (let i = 0; i < nums.length + 1; i++) {
    if (!set.has(i)) {
      return i;
    }
  }
};

// time complexity: O(n)

console.log(missingNumber2([3, 0, 1])); // 2
console.log(missingNumber2([0, 1])); // 2
