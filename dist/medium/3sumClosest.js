/*
Given an integer array nums of length n and an integer target,
find three integers in nums such that the sum is closest to target.

Return the sum of the three integers.

You may assume that each input would have exactly one solution.


Example 1:
Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

Example 2:
Input: nums = [0,0,0], target = 1
Output: 0
Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).
*/
function threeSumClosest(nums, target) {
    const len = nums.length;
    let closest = Infinity;
    nums.sort((a, b) => a - b);
    for (let i = 0; i < len; i++) {
        let left = i + 1;
        let right = len - 1;
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if (Math.abs(target - closest) > Math.abs(target - sum)) {
                closest = sum;
            }
            if (sum < target) {
                left++;
            }
            else if (sum > target) {
                right--;
            }
            else {
                return sum;
            }
        }
    }
    return closest;
}
;
// time: O(n^2)
console.log(threeSumClosest([-1, 2, 1, -4], 1)); // 2
console.log(threeSumClosest([0, 0, 0], 1)); // 0
console.log(threeSumClosest([1, 1, 1, 0], -100)); // 2
console.log(threeSumClosest([1, 2, 4, 8, 16, 32, 64, 128], 82)); // 82
console.log(threeSumClosest([1, 2, 4, 8, 16, 32, 64, 128], 82)); // 82
