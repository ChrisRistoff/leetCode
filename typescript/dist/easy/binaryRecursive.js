/*
Given an array of integers nums which is sorted in ascending order, and an integer target, write a
function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
*/
function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    return binary(nums, target, left, right);
}
;
function binary(nums, target, left, right) {
    if (left > right)
        return -1;
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target)
        return mid;
    if (nums[mid] > target) {
        return binary(nums, target, left, mid - 1);
    }
    else {
        return binary(nums, target, mid + 1, right);
    }
}
// time complexity: O(log n)
console.log(search([-1, 0, 3, 5, 9, 12], 9)); // 4
console.log(search([-1, 0, 3, 5, 9, 12], 2)); // -1
