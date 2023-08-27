/*
You are given an integer array nums. Two players are playing a game with this array:
player 1 and player 2.

Player 1 and player 2 take turns, with player 1 starting first. Both players start the game with a
score of 0. At each turn, the player takes one of the numbers from either end of the array
(i.e., nums[0] or nums[nums.length - 1]) which reduces the size of the array by 1.
The player adds the chosen number to their score.
The game ends when there are no more elements in the array.

Return true if Player 1 can win the game. If the scores of both players are equal,
then player 1 is still the winner, and you should also return true.
You may assume that both players are playing optimally.



Example 1:

Input: nums = [1,5,2]
Output: false
Explanation: Initially, player 1 can choose between 1 and 2.
If he chooses 2 (or 1), then player 2 can choose from 1 (or 2) and 5. If player 2 chooses 5,
then player 1 will be left with 1 (or 2).
So, final score of player 1 is 1 + 2 = 3, and player 2 is 5.
Hence, player 1 will never be the winner and you need to return false.
Example 2:

Input: nums = [1,5,233,7]
Output: true
Explanation: Player 1 first chooses 1. Then player 2 has to choose between 5 and 7.
No matter which number player 2 choose, player 1 can choose 233.
Finally, player 1 has more score (234) than player 2 (12),
so you need to return True representing player1 can win.
*/

function predictTheWinner(nums: number[]): boolean {

  const n = nums.length;

  // 2D DP table where dp[i][j] will store the maximum relative score
  // advantage player 1 has over player 2 for the subarray nums[i...j].
  const dp: number[][] = Array.from({ length: n }, () => Array(n).fill(0));

  // loop through the nums array in reverse to ensure that we have the answers
  // for smaller subarrays before we try to solve for larger subarrays
  for (let i = n - 1; i >= 0; i--) {

    // for a subarray of length 1 the score advantage of player 1 is simply the value of the number
    dp[i][i] = nums[i];

    // arrays > length 1
    for (let j = i + 1; j < n; j++) {

      // if player 1 picks nums[i] their advantage becomes nums[i] minus
      // whatever advantage they would have if they started from i+1 (since Player 2 will make the next move)
      // if Player 1 picks nums[j], their advantage is nums[j] minus
      // the advantage from starting at index i and ending at j-1.
      // player 1 will pick the option that maximizes their advantage.

      dp[i][j] = Math.max(nums[i] - dp[i + 1][j], nums[j] - dp[i][j - 1]);
    }
  }

  // if the relative advantage of player 1 for the entire array (i.e., dp[0][n-1]) is non-negative
  // player 1 can either win or tie the game.

  return dp[0][n - 1] >= 0;
}

// time: O(n^2)

console.log(predictTheWinner([1,5,2])) // false
console.log(predictTheWinner([1,5,233,7])) // true
console.log(predictTheWinner([1,5,2,4,6])) // true
console.log(predictTheWinner([1,5,2,4,6,8])) // true
console.log(predictTheWinner([1,5,2,4,6,8,10])) // true
console.log(predictTheWinner([1,5,2,4,6,8,10,12])) // true
