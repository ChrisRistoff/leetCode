/*
You are given a positive integer array nums.

The element sum is the sum of all the elements in nums.
The digit sum is the sum of all the digits (not necessarily distinct) that appear in nums.
Return the absolute difference between the element sum and digit sum of nums.

Note that the absolute difference between two integers x and y is defined as |x - y|.


Example 1:
Input: nums = [1,15,6,3]
Output: 9
Explanation:
The element sum of nums is 1 + 15 + 6 + 3 = 25.
The digit sum of nums is 1 + 1 + 5 + 6 + 3 = 16.
The absolute difference between the element sum and digit sum is |25 - 16| = 9.

Example 2:
Input: nums = [1,2,3,4]
Output: 0
Explanation:
The element sum of nums is 1 + 2 + 3 + 4 = 10.
The digit sum of nums is 1 + 2 + 3 + 4 = 10.
The absolute difference between the element sum and digit sum is |10 - 10| = 0.
*/

function differenceOfSum(nums: number[]): number {

  let sum = 0

  for (const num of nums) {
    sum += num
  }

  let digitSum = 0

  for (const num of nums) {
    const curr = String(num)

    if (curr.length > 1) {

      for (let i = 0; i < curr.length; i++) {
        digitSum += Number(curr[i])
      }
    } else {
      digitSum += num
    }
  }

  return sum - digitSum
};

console.log(differenceOfSum([1,15,6,3])) // 9
console.log(differenceOfSum([1,5,6,3])) // 0
