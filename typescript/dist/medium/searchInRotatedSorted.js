/*
There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot
index k (1 <= k < nums.length) such that the resulting array is
[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed).
For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target,
return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.


Example 1:
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4

Example 2:
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1

Example 3:
Input: nums = [1], target = 0
Output: -1
*/
function search333(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    // find the index of the smallest value using binary search.
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        }
        else {
            right = mid;
        }
    }
    const rotatation = left; // point of rotation
    left = 0;
    right = nums.length - 1;
    // determine which side of the rotation point the target is on
    if (target >= nums[rotatation] && target <= nums[right]) {
        left = rotatation;
    }
    else {
        right = rotatation - 1;
    }
    // binary search
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target)
            return mid;
        if (nums[mid] < target) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }
    return -1;
}
;
console.log(search333([4, 5, 6, 7, 0, 1, 2], 0)); // 4
console.log(search333([4, 5, 6, 7, 0, 1, 2], 3)); // -1
console.log(search333([1], 0)); // -1
console.log(search333([1, 3], 3)); // 1
console.log(search333([3, 1], 1)); // 1
console.log(search333([5, 1, 3], 5)); // 0
