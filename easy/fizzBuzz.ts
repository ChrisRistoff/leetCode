/*
Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.


Example 1:
Input: n = 3
Output: ["1","2","Fizz"]

Example 2:
Input: n = 5
Output: ["1","2","Fizz","4","Buzz"]

Example 3:
Input: n = 15
Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
*/

function fizzBuzz(n: number): string[] {

  let answer: string[] = [];

  for (let i = 1; i<n+1; i++) {
    let str = ""
    if (i%3 === 0) str += "Fizz";
    if (i%5 === 0) str += "Buzz";
    if (str === "") answer.push(i.toString());
    else answer.push(str);
  }

  return answer;
};

// time complexity: O(n)

console.log(fizzBuzz(15));
console.log(fizzBuzz(5));
console.log(fizzBuzz(3));
