/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.


Example 1:
Input: nums = [3,2,3]
Output: 3

Example 2:
Input: nums = [2,2,1,1,1,2,2]
Output: 2
*/
function majorityElement(nums) {
    let map = new Map();
    let majority = nums.length / 2;
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (map.has(num)) {
            map.set(num, map.get(num) + 1);
        }
        else {
            map.set(num, 1);
        }
    }
    for (let [key, value] of map) {
        if (value > majority) {
            return key;
        }
    }
    return -1;
}
;
console.log(majorityElement([3, 2, 3])); // 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2
