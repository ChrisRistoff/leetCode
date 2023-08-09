/*
You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true
*/

function searchMatrix(matrix: number[][], target: number): boolean {

  let left: number = 0;
  let right: number = matrix.length - 1;

  while(left <= right) {
    const mid: number = Math.floor((left + right) / 2)
    const min: number = matrix[mid][0]
    const max: number = matrix[mid][matrix[mid].length-1]

    if (min <= target && max >= target) {
      return binarySearch(matrix[mid], target)
    }

    if (max < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return false
};

function binarySearch(arr: number[], target: number): boolean {
  let left: number = 0;
  let right: number = arr.length - 1;

  while (left <= right) {
    const mid: number = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return true;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false
}

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3)) // true
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13)) // false
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 30)) // true
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 1)) // true
console.log(searchMatrix([[1]], 1)) // true
console.log(searchMatrix([[1]], 2)) // false
console.log(searchMatrix([[1], [2], [3]], 2)) // true
