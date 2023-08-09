/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations
that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons)
is given below. Note that 1 does not map to any letters.

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
*/

function letterCombinations(digits: string): string[] {
  if (!digits.length) return [];
  const map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  }

  const result = [];
  let length = digits.length;
  for (let i = 0; i < length; i++) {
    const digit = digits[i];
    const letters = map[digit];
    if (result.length) {
      const temp = [];
      for (let j = 0; j < result.length; j++) {
        for (let k = 0; k < letters.length; k++) {
          temp.push(result[j] + letters[k]);
        }
      }
      result.length = 0;
      result.push(...temp);
    } else {
      result.push(...letters);
    }
  }
  return result;
}

console.log(letterCombinations('23'))
console.log(letterCombinations('2'))
console.log(letterCombinations(''))
console.log(letterCombinations('234'))
console.log(letterCombinations('9'))
