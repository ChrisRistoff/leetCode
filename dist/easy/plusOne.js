/*
You are given a large integer represented as an integer array digits,
where each digits[i] is the ith digit of the integer. The digits are ordered from most significant
to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].
*/
function plusOne(digits) {
    let len = digits.length - 1;
    for (let i = len; i >= 0; i--) {
        digits[i]++;
        if (digits[i] !== 10) {
            return digits;
        }
        else {
            digits[i] = 0;
        }
    }
    if (digits[0] === 0) {
        digits.unshift(1);
    }
    return digits;
}
;
// time complexity: O(N)
console.log(plusOne([9, 9, 9, 9]));
console.log(plusOne([1, 2, 3]));
console.log(plusOne([0]));
