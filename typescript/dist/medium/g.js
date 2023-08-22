function longestConsecutive2(nums) {
    let map = new Map();
    let len = nums.length;
    let curSeq = 0;
    let maxSeq = 0;
    for (let i = 0; i < len; i++) {
        let num = nums[i];
        if (!map.has(num)) {
            let left = map.get(num - 1) || 0;
            let right = map.get(num + 1) || 0;
            curSeq = left + right + 1;
            map.set(num, curSeq);
            if (left > 0) {
                map.set(num - left, curSeq);
            }
            if (right > 0) {
                map.set(num + right, curSeq);
            }
            maxSeq = Math.max(maxSeq, curSeq);
        }
    }
    return maxSeq;
}
// time: O(n)
console.log(longestConsecutive2([100, 4, 200, 1, 3, 2])); // 4
console.log(longestConsecutive2([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // 9
