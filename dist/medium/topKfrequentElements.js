/*
Given an integer array nums and an integer k, return the k most frequent elements.
You may return the answer in any order.


Example 1:
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Example 2:
Input: nums = [1], k = 1
Output: [1]


Constraints:
1 <= nums.length <= 105
-104 <= nums[i] <= 104
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.
*/
function topKFrequent(nums, k) {
    let map = new Map();
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1);
        }
        else {
            map.set(nums[i], 1);
        }
    }
    const result = [];
    while (k > 0) {
        let max = null;
        for (let key of map.keys()) {
            if (max === null || map.get(key) > map.get(max)) {
                max = key;
            }
        }
        k--;
        // @ts-ignore
        result.push(max);
        map.delete(max);
    }
    return result;
}
;
// time: O(n * m)
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); // [1,2]
console.log(topKFrequent([1], 1)); // [1]
console.log(topKFrequent([1, 2], 2)); // [1,2]
console.log(topKFrequent([1, 2, 2, 3, 3, 3], 2)); // [3,2]
console.log(topKFrequent([1, 2, 2, 3, 3, 3], 1)); // [3]
