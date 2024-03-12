/*
You are given an integer money denoting the amount of money (in dollars) that you have and another
integer children denoting the number of children that you must distribute the money to.

You have to distribute the money according to the following rules:

All money must be distributed.
Everyone must receive at least 1 dollar.
Nobody receives 4 dollars.
Return the maximum number of children who may receive exactly 8 dollars if you distribute the
money according to the aforementioned rules. If there is no way to distribute the money, return -1.


Example 1:
Input: money = 20, children = 3
Output: 1
Explanation:
The maximum number of children with 8 dollars will be 1. One of the ways to distribute the money is
- 8 dollars to the first child.
- 9 dollars to the second child.
- 3 dollars to the third child.
It can be proven that no distribution exists such that number of children getting
8 dollars is greater than 1.

Example 2:
Input: money = 16, children = 2
Output: 2
Explanation: Each child can be given 8 dollars.
*/

function distMoney(money: number, children: number): number {

  if(money < children) return -1
  if (money < children + 7) return 0

  console.log(money, "money before")
  money -= 7+children
  console.log(money, "money after")
  children--
  let total = 1

  while (money >= 7 && children !== 0) {
    money -= 7
    children--
    total++
    console.log(money, children, total, "all")
  }

  if (money === 3 && children === 1) total--
  if (children === 0 && money !== 0) total--

  return total
};

// time complexity: O(N)


console.log(distMoney(20, 3)) // 1
console.log(distMoney(16, 2)) // 2
console.log(distMoney(1,2)) // -1
console.log(distMoney(13, 2)) // 1
console.log(distMoney(13, 3)) // 1
console.log(distMoney(17, 2)) // 1
console.log(distMoney(23, 2)) // 1
