/*
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?


Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps


Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
 */
function climbStairs(n) {
    if (n < 3)
        return n;
    let prevPrev = 1;
    let prev = 2;
    let current;
    for (let i = 3; i <= n; i++) {
        current = prev + prevPrev;
        prevPrev = prev;
        prev = current;
    }
    return current;
}
;
console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(4));
console.log(climbStairs(5));
