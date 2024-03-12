/*
Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again
by continuously following the next pointer. Internally, pos is used to denote the index of the
node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

Example 1:
Input: head = [3,2,0,-4], pos = 1
Output: true
Expl:There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

Example 2:
Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.
*/

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function hasCycle(head: ListNode | null): boolean {

  if (!head || !head.next) {
    return false // empty list and single node list
  }

  let slow = head
  let fast = head.next

  while (fast && fast.next) {
    if (slow === fast) {
      return true // pointers meet so there is a cycle
    }

    slow = slow.next
    fast = fast.next.next
  }

  return false // pointers never meet so there is no cycle
};

// Time Complexity: O(n)

const list = new ListNode(3)
list.next = new ListNode(2)
list.next.next = new ListNode(0)
list.next.next.next = new ListNode(-4)
list.next.next.next.next = list.next
console.log(hasCycle(list)) // true

const list2 = new ListNode(1)
console.log(hasCycle(list2)) // false

const list3 = new ListNode(1)
list3.next = new ListNode(2)
console.log(hasCycle(list3)) // false

const list4 = new ListNode(1)
list4.next = new ListNode(2)
list4.next.next = new ListNode(3)
list4.next.next.next = new ListNode(4)
list4.next.next.next.next = new ListNode(5)
list4.next.next.next.next.next = new ListNode(0)
console.log(hasCycle(list4)) // false

const list5 = new ListNode(1)
list5.next = new ListNode(2)
list5.next.next = new ListNode(3)
list5.next.next.next = new ListNode(4)
list5.next.next.next.next = new ListNode(5)
list5.next.next.next.next.next = list5.next.next

console.log(hasCycle(list5)) // true
