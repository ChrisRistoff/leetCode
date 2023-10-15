/*
You are given an integer n.

Each number from 1 to n is grouped according to the sum of its digits.

Return the number of groups that have the largest size.


Example 1:
Input: n = 13
Output: 4
Explanation: There are 9 groups in total,
they are grouped according sum of its digits of numbers from 1 to 13:
[1,10], [2,11], [3,12], [4,13], [5], [6], [7], [8], [9].
There are 4 groups with largest size.

Example 2:
Input: n = 2
Output: 2
Explanation: There are 2 groups [1], [2] of size 1.
*/
function countLargestGroup(n) {
    let map = new Map();
    for (let i = 1; i <= n; i++) {
        let sum = sumOfDigits(i);
        map.set(sum, (map.get(sum) + 1 || 1));
    }
    let max = 0;
    for (let [key, value] of map) {
        if (max < value)
            max = key;
    }
    let result = 0;
    for (let [key, value] of map) {
        if (map.get(key) === max)
            result++;
    }
    return result;
}
;
function sumOfDigits(num) {
    let sum = 0;
    while (num > 0) {
        sum += num % 10; // Add the last digit to sum.
        num = Math.floor(num / 10); // Remove the last digit.
    }
    return sum;
}
console.log(countLargestGroup(13));
console.log(countLargestGroup(2));
