/*
Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


Example 1:
Input: rowIndex = 3
Output: [1,3,3,1]

Example 2:
Input: rowIndex = 0
Output: [1]

Example 3:
Input: rowIndex = 1
Output: [1,1]
*/
function getRow(rowIndex) {
    let row = new Array(rowIndex + 1).fill(0);
    row[0] = 1;
    for (let i = 1; i <= rowIndex; i++) {
        row[i] = row[i - 1] * (rowIndex - i + 1) / i;
    }
    return row;
}
;
// time complexity: O(n)
console.log(getRow(3));
console.log(getRow(0));
console.log(getRow(1));
