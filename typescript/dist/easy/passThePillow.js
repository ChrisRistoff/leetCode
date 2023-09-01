/*
There are n people standing in a line labeled from 1 to n. The first person in the line is holding
a pillow initially. Every second, the person holding the pillow passes it to the next person
standing in the line. Once the pillow reaches the end of the line, the direction changes,
and people continue passing the pillow in the opposite direction.

For example, once the pillow reaches the nth person they pass it to the n - 1th person,
then to the n - 2th person and so on.
Given the two positive integers n and time, return the index of the person holding the pillow
after time seconds.


Example 1:
Input: n = 4, time = 5
Output: 2
Explanation: People pass the pillow in the following way: 1 -> 2 -> 3 -> 4 -> 3 -> 2.
Afer five seconds, the pillow is given to the 2nd person.

Example 2:
Input: n = 3, time = 2
Output: 3
Explanation: People pass the pillow in the following way: 1 -> 2 -> 3.
Afer two seconds, the pillow is given to the 3rd person.
*/
function passThePillow(n, time) {
    let pos = 1;
    let iterat = 1;
    for (let i = 1; i < time + 1; i++) {
        if (pos === n)
            iterat = -1;
        if (pos === 1)
            iterat = 1;
        pos += iterat;
    }
    return pos;
}
;
// time: O(n)
console.log(passThePillow(4, 5)); // 2
console.log(passThePillow(3, 2)); // 3
console.log(passThePillow(5, 10)); // 5
console.log(passThePillow(6, 12)); // 4
console.log(passThePillow(7, 15)); // 7
console.log(passThePillow(8, 20)); // 4
