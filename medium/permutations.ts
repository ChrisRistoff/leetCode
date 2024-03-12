/*
Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.



Example 1:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
*/

function permutate(nums: number[]): number[][] {

  const n: number = nums.length;
  const result: number[][] = [nums.slice()];
  const c: number[] = new Array(n).fill(0);
  let i: number = 1;

  while (i < n) {
    if (c[i] < i) {

      if (i % 2 === 0) {
        [nums[0], nums[i]] = [nums[i], nums[0]];

      } else {
        [nums[c[i]], nums[i]] = [nums[i], nums[c[i]]];
      }

      result.push(nums.slice());
      c[i] += 1;
      i = 1;

    } else {
      c[i] = 0;
      i += 1;

    }
  }
  return result;
}

// time complexity: O(n factorial)

console.log(permutate([1, 2, 3]));
