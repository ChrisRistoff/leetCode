/*
You are given an integer array coins representing coins of different denominations and an
integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount.
If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.



Example 1:
Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1

Example 2:
Input: coins = [2], amount = 3
Output: -1

Example 3:
Input: coins = [1], amount = 0
Output: 0
*/
function coinChange(coins, amount) {
    let dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    for (let i = 0; i <= amount; i++) {
        let coin = coins[i];
        for (let i = coin; i <= amount; i++) {
            dp[i] = Math.min(dp[i], dp[i - coin] + 1);
        }
    }
    if (dp[amount] === Infinity)
        return -1;
    return dp[amount];
}
;
// time: O(n * m)
console.log(coinChange([1, 2, 5], 11)); // 3
console.log(coinChange([2], 3)); // -1
console.log(coinChange([1], 0)); // 0
