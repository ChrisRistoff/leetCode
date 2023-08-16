/*
Given an array of integers nums sorted in non-decreasing order,
find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.



Example 1:
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

Example 2:
Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]

Example 3:
Input: nums = [], target = 0
Output: [-1,-1]
*/
function searchRange(nums, target) {
    return [binSearch(nums, target, true), binSearch(nums, target, false)];
}
function binSearch(nums, target, first) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        if (nums[mid] === target) {
            if (first) {
                if (nums[mid - 1] !== target) {
                    return mid;
                }
                else {
                    right = mid - 1;
                }
            }
            else {
                if (nums[mid + 1] !== target) {
                    return mid;
                }
                else {
                    left = mid + 1;
                }
            }
        }
        if (nums[mid] > target) {
            right = mid - 1;
            continue;
        }
        if (nums[mid] < target) {
            left = mid + 1;
        }
    }
    return -1;
}
;
// time: O(log n)
console.log(searchRange([5, 7, 7, 8, 8, 10], 8)); // [3,4]
console.log(searchRange([5, 7, 7, 8, 8, 10], 6)); // [-1, -1]
console.log(searchRange([12, 12, 12, 12, 12, 12, 12, 12, 12], 12)); // [0, 8]
console.log(searchRange([1, 2, 3, 4, 5, 6, 7, 8, 9], 5)); // [4, 4]
console.log(searchRange([1, 2, 3, 4, 5, 6, 7, 8, 9], 1)); // [0, 0]
