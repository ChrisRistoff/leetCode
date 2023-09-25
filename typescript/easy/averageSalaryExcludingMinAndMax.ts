/*
You are given an array of unique integers salary where salary[i] is the salary of the ith employee.

Return the average salary of employees excluding the minimum and maximum salary.
Answers within 10-5 of the actual answer will be accepted.


Example 1:
Input: salary = [4000,3000,1000,2000]
Output: 2500.00000
Explanation: Minimum salary and maximum salary are 1000 and 4000 respectively.
Average salary excluding minimum and maximum salary is (2000+3000) / 2 = 2500

Example 2:
Input: salary = [1000,2000,3000]
Output: 2000.00000
Explanation: Minimum salary and maximum salary are 1000 and 3000 respectively.
Average salary excluding minimum and maximum salary is (2000) / 1 = 2000
You are given an array of unique integers salary where salary[i] is the salary of the ith employee.
*/

function average(salary: number[]): number {
  const min = Math.min(...salary)
  const max = Math.max(...salary)
  let all = 0

  for (let sal of salary) {
    if (sal !== min && sal !== max) {
      all += sal
    }
  }

  return all / (salary.length - 2)

};

// time: O(n)

console.log(average([4000, 3000, 1000, 2000]))
console.log(average([1000, 2000, 3000]))
console.log(average([6000, 5000, 4000, 3000, 2000, 1000]))
console.log(average([8000, 9000, 2000, 3000, 6000, 1000]))
console.log(average([8000, 9000, 2000, 3000, 6000, 1000, 5000]))
console.log(average([8000, 9000, 2000, 3000, 6000, 1000, 5000, 4000]))
