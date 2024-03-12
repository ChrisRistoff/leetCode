/*
Given an array of integers arr, return true if we can partition the array into three non-empty
parts with equal sums.

Formally, we can partition the array if we can find indexes
i + 1 < j with (arr[0] + arr[1] + ... + arr[i] == arr[i + 1] + arr[i + 2] + ... + arr[j - 1] == arr[j] + arr[j + 1] + ... + arr[arr.length - 1])


Example 1:
Input: arr = [0,2,1,-6,6,-7,9,1,2,0,1]
Output: true
Explanation: 0 + 2 + 1 = -6 + 6 - 7 + 9 + 1 = 2 + 0 + 1

Example 2:
Input: arr = [0,2,1,-6,6,7,9,-1,2,0,1]
Output: false

Example 3:
Input: arr = [3,3,6,5,-2,2,5,1,-9,4]
Output: true
Explanation: 3 + 3 = 6 = 5 - 2 + 2 + 5 + 1 - 9 + 4
*/

function canThreePartsEqualSum(arr: number[]): boolean {
  let sum = arr.reduce((a, b) => a+b, 0)
  const len = arr.length

  if (sum%3 !== 0) {
    return false
  }

  const target = sum / 3
  let partCount = 0
  let currentSum = 0

  for (let i = 0; i<len; i++) {
    currentSum += arr[i]

    if (currentSum === target) {
      partCount++
      currentSum = 0
    }
  }
  return partCount >= 3
};

// time: O(n)

console.log(canThreePartsEqualSum([0,2,1,-6,6,-7,9,1,2,0,1])) // true
console.log(canThreePartsEqualSum([0,2,1,-6,6,7,9,-1,2,0,1])) // false
console.log(canThreePartsEqualSum([3,3,6,5,-2,2,5,1,-9,4])) // true
