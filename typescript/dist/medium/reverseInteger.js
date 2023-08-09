/*
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the
value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

Input: x = 123
Output: 321

Input: x = -123
Output: -321

Input: x = 120
Output: 21
 */
function reverse(x) {
    const string = x.toString();
    const length = string.length;
    let reversed = "";
    if (length === 1)
        return x;
    for (let i = length - 1; i >= 0; i--) {
        if (reversed === "" && string[i] === "0")
            continue;
        if (string[i] === "-") {
            reversed = string[i] + reversed;
            continue;
        }
        reversed += string[i];
    }
    const revNum = parseInt(reversed);
    if (revNum > Math.pow(2, 31) - 1 || revNum < Math.pow(-2, 31))
        return 0;
    return revNum;
}
console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(0));
console.log(reverse(1534236469));
