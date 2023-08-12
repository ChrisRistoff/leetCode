/*
Given a non-empty array of integers nums, every element appears twice except for one.
Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

Example 1:
Input: nums = [2,2,1]
Output: 1

Example 2:
Input: nums = [4,1,2,1,2]
Output: 4

Example 3:
Input: nums = [1]
Output: 1
*/
function singleNumber(nums) {
    let numSet = new Set();
    for (let num of nums) {
        if (numSet.has(num)) {
            numSet.delete(num);
        }
        else {
            numSet.add(num);
        }
    }
    return Array.from(numSet)[0];
}
console.log(singleNumber([2, 2, 1])); // 1
console.log(singleNumber([4, 1, 2, 1, 2])); // 4
console.log(singleNumber([1])); // 1
function singleNumber2(nums) {
    let count;
    for (let i = 0; i < nums.length; i++) {
        count ^= nums[i];
    }
    return count;
}
console.log(singleNumber2([2, 2, 1])); // 1
console.log(singleNumber2([4, 1, 2, 1, 2])); // 4
console.log(singleNumber2([1])); // 1
