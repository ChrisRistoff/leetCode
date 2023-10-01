/*
Given an integer columnNumber, return its corresponding column title as it appears in an
Excel sheet.

For example:

A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28
...


Example 1:
Input: columnNumber = 1
Output: "A"

Example 2:
Input: columnNumber = 28
Output: "AB"

Example 3:
Input: columnNumber = 701
Output: "ZY"
*/

function convertToTitle(columnNumber: number): string {

  let result: string = '';
  let temp: number = columnNumber;

  while (temp > 0) {
    let remainder: number = temp % 26;
    temp = Math.floor(temp / 26);

    if (remainder === 0) {
      remainder = 26;
      temp--;
    }

    result = String.fromCharCode(remainder + 64) + result;
  }

  return result;
};

// time: O(log n)

console.log(convertToTitle(1)); // A
console.log(convertToTitle(28)); // AB
console.log(convertToTitle(701)); // ZY
