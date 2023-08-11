/*
You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

Example 1:
Input: flowerbed = [1,0,0,0,1], n = 1
Output: true

Example 2:
Input: flowerbed = [1,0,0,0,1], n = 2
Output: false
*/
function canPlaceFlowers(flowerbed, n) {
    let count = 0;
    const length = flowerbed.length;
    if (length === 1 && flowerbed[0] === 0) {
        count++;
    }
    if (flowerbed[0] === 0 && flowerbed[1] === 0) {
        count++;
        flowerbed[0] = 1;
    }
    for (let i = 1; i < length; i++) {
        if (flowerbed[i] === 0) {
            const prev = flowerbed[i - 1];
            const next = flowerbed[i + 1];
            if (i === length - 1 && prev === 0) {
                count++;
                flowerbed[i] = 1;
            }
            if (prev === 0 && next === 0) {
                count++;
                flowerbed[i] = 1;
            }
        }
    }
    return count >= n;
}
;
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1)); // true
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2)); // false
