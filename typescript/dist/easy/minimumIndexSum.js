/*
Given two arrays of strings list1 and list2, find the common strings with the least index sum.

A common string is a string that appeared in both list1 and list2.

A common string with the least index sum is a common string such that if it appeared at list1[i]
and list2[j] then i + j should be the minimum value among all the other common strings.

Return all the common strings with the least index sum. Return the answer in any order.



Example 1:

Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"],
list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
Output: ["Shogun"]
Explanation: The only common string is "Shogun".
*/
function findRestaurant(list1, list2) {
    let map = new Map();
    let minIndexSum = Infinity;
    let currentSum = 0;
    let currentRestaurant = [];
    let length = list1.length;
    for (let i = 0; i < length; i++) {
        map.set(list1[i], i);
    }
    length = list2.length;
    for (let i = 0; i < length; i++) {
        if (map.has(list2[i])) {
            currentSum = map.get(list2[i]) + i;
            if (currentSum < minIndexSum) {
                minIndexSum = currentSum;
                currentRestaurant = [list2[i]];
            }
            else if (currentSum === minIndexSum) {
                currentRestaurant.push(list2[i]);
            }
        }
    }
    return currentRestaurant;
}
;
// time complexity: O(n + n) => O(n)
console.log(findRestaurant(["Shogun", "Tapioca Express", "Burger King", "KFC"], ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]));
console.log(findRestaurant(["S", "TEXP", "BK", "KFC"], ["KFC", "BK", "S"]));
