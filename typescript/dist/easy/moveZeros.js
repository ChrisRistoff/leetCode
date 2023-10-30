/*
Given an integer array nums, move all 0's to the end of it while maintaining
the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.


Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:
Input: nums = [0]
Output: [0]
*/
function moveZeroes(nums) {
    let lastNonZeroFoundAt = 0;
    for (let curr = 0; curr < nums.length; curr++) {
        if (nums[curr] !== 0) {
            let temp = nums[lastNonZeroFoundAt];
            nums[lastNonZeroFoundAt] = nums[curr];
            nums[curr] = temp;
            lastNonZeroFoundAt++;
        }
    }
    return nums;
}
;
console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0, 0, 1]));
console.log(moveZeroes([0, 0, 0, 0, 0, 0, 1, 1, 1]));
console.log(moveZeroes([0, 0]));
