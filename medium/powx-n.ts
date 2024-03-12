/*
Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

Example 1:
Input: x = 2.00000, n = 10
Output: 1024.00000

Example 2:
Input: x = 2.10000, n = 3
Output: 9.26100

Example 3:
Input: x = 2.00000, n = -2
Output: 0.25000
Explanation: 2-2 = 1/22 = 1/4 = 0.25
*/


function myPow(x: number, n: number): number {
  if (n === 0) return 1

  if (n<0) {
    x = 1/x
    n = n*-1
  }

  let result = 1

  while (n>0) {
    if (n%2 === 1) {
      result *= x
    }

    x *= x
    n = Math.floor(n/2)
  }

  return result
};

// time: O(logn)

console.log(myPow(2.00000, 10)) // 1024.00000
console.log(myPow(2.10000, 3)) // 9.26100
console.log(myPow(2.00000, -2)) // 0.25000
console.log(myPow(2.00000, 0)) // 1
