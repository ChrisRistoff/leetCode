/*
Given an integer array arr, return true if there are three consecutive odd numbers in the array.
Otherwise, return false.

Example 1:
Input: arr = [2,6,4,1]
Output: false
Explanation: There are no three consecutive odds.

Example 2:
Input: arr = [1,2,34,3,4,5,7,23,12]
Output: true
Explanation: [5,7,23] are three consecutive odds.
*/
function threeConsecutiveOdds(arr) {
    const len = arr.length - 2;
    for (let i = 0; i < len; i++) {
        const curr = arr[i] % 2;
        const next = arr[i + 1] % 2;
        const nextNext = arr[i + 2] % 2;
        if (curr !== 0 && next !== 0 && nextNext !== 0) {
            return true;
        }
    }
    return false;
}
;
// time: O(n)
console.log(threeConsecutiveOdds([1, 2, 34, 3, 4, 5, 7, 23, 12])); // true
console.log(threeConsecutiveOdds([2, 6, 4, 1])); // false
console.log(threeConsecutiveOdds([1, 2, 34, 3, 4, 5, 7, 23, 12, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])); // true
console.log(threeConsecutiveOdds([1, 2, 34, 3, 4, 5, 7, 23, 12, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])); // false
console.log(threeConsecutiveOdds([1, 2, 34, 3, 4, 5, 7, 23, 12, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])); // false
