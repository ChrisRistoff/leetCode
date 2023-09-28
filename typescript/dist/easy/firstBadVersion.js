/*
You are a product manager and currently leading a team to develop a new product.
Unfortunately, the latest version of your product fails the quality check.
Since each version is developed based on the previous version, all the versions after a
bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one,
which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.


Example 1:
Input: n = 5, bad = 4
Output: 4
Explanation:
call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true
Then 4 is the first bad version.

Example 2:
Input: n = 1, bad = 1
Output: 1
*/
/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */
let isBadVersion = function (version) {
    return version >= 5; // For demonstration, assuming versions 5 and above are bad.
};
var solution = function (isBadVersion) {
    return function (n) {
        // Here, you should pass isBadVersion directly
        return firstBadVersion(n, isBadVersion);
    };
};
function firstBadVersion(n, isBadVersion) {
    let left = 1;
    let right = n;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (isBadVersion(mid)) {
            right = mid;
        }
        else {
            left = mid + 1;
        }
    }
    return left;
}
;
console.log(solution(5)(4));
console.log(solution(1)(1));
console.log(solution(2126753390)(1702766719));
/*
var solution = function(isBadVersion: any) {

    return function(n: number): number {

      for (let i = 1; i <= n; i++) {
        if (isBadVersion(i)) {
          return i;
        }
      }

      return -1;
    };
};
*/
