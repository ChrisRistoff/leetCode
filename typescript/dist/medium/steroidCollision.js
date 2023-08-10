/*
We are given an array asteroids of integers representing asteroids in a row.

For each asteroid, the absolute value represents its size, and the sign represents its
direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one
will explode. If both are the same size, both will explode.
Two asteroids moving in the same direction will never meet.

Input: asteroids = [5,10,-5]
Output: [5,10]
Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.
*/
function asteroidCollision(asteroids) {
    const stack = [];
    let length = asteroids.length;
    for (let i = 0; i < length; i++) {
        let cur = asteroids[i];
        let sLen = stack.length - 1;
        if (cur > 0) {
            stack.push(cur);
        }
        else {
            while (sLen >= 0 && stack[sLen] > 0) {
                if (stack[sLen] === cur * -1) {
                    stack.pop();
                    break;
                }
                else if (stack[sLen] < cur * -1) {
                    stack.pop();
                    sLen--;
                }
                else {
                    break;
                }
            }
            if (sLen < 0 || stack[sLen] < 0) {
                stack.push(cur);
            }
        }
    }
    return stack;
}
;
console.log(asteroidCollision([5, 10, -5])); // [5,10]
console.log(asteroidCollision([8, -8])); // []
console.log(asteroidCollision([10, 2, -5])); // [10]
