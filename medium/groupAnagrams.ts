/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
typically using all the original letters exactly once.


Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:
Input: strs = [""]
Output: [[""]]

Example 3:
Input: strs = ["a"]
Output: [["a"]]
*/

function groupAnagrams(strs: string[]): string[][] {
  const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101]
  const letVal = Object.fromEntries(
    [...'abcdefghijklmnopqrstuvwxyz'].map((
      letter, index) => [letter, primes[index]]));

  let map = new Map()
  const len = strs.length

  for (let i = 0; i<len; i++) {
    let num = 1
    for (let j=0; j<strs[i].length; j++) {
      num *= letVal[strs[i][j]]
    }

    if (map.has(num)) {
      map.get(num).push(strs[i])
    } else {
      map.set(num, [strs[i]])
    }
  }

  const result = []

  for (let key of map.keys()) {
    result.push(map.get(key))
  }

  return result

};

// time: O(n)

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
console.log(groupAnagrams([""]))
console.log(groupAnagrams(["a"]))
