/*
You are given a 0-indexed array of strings words and a 2D array of integers queries.

Each query queries[i] = [li, ri] asks us to find the number of strings present in the range li
to ri (both inclusive) of words that start and end with a vowel.

Return an array ans of size queries.length, where ans[i] is the answer to the ith query.

Note that the vowel letters are 'a', 'e', 'i', 'o', and 'u'.


Example 1:
Input: words = ["aba","bcb","ece","aa","e"], queries = [[0,2],[1,4],[1,1]]
Output: [2,3,0]
Explanation: The strings starting and ending with a vowel are "aba", "ece", "aa" and "e".
The answer to the query [0,2] is 2 (strings "aba" and "ece").
to query [1,4] is 3 (strings "ece", "aa", "e").
to query [1,1] is 0.
We return [2,3,0].

Example 2:
Input: words = ["a","e","i"], queries = [[0,2],[0,1],[2,2]]
Output: [3,2,1]
Explanation: Every string satisfies the conditions, so we return [3,2,1].
*/

function vowelStrings(words: string[], queries: number[][]): number[] {

  let vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let map = new Map();
  let count = 0;

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (vowels.has(word[0]) && vowels.has(word[word.length - 1])) {
      count++;
    }
    map.set(i, count);
  }

  console.log(map);

  let result = [];

  for (let query of queries) {
    if (query[0] === 0) {
      result.push(map.get(query[1]));
      continue;
    }
    result.push(map.get(query[1]) - map.get(query[0] - 1));
  }

  return result;
};

// time: O(n + m)

console.log(vowelStrings(["aba", "bcb", "ece", "aa", "e"], [[0, 2], [1, 4], [1, 1]]));
console.log(vowelStrings(["a", "e", "i"], [[0, 2], [0, 1], [2, 2]]));
console.log(vowelStrings(["bzmxvzjxfddcuznspdcbwiojiqf","mwguoaskvramwgiweogzulcinycosovozppl","uigevazgbrddbcsvrvnngfrvkhmqszjicpieahs","uivcdsboxnraqpokjzaayedf","yalc","bbhlbmpskgxmxosft","vigplemkoni","krdrlctodtmprpxwditvcps","gqjwokkskrb","bslxxpabivbvzkozzvdaykaatzrpe","qwhzcwkchluwdnqjwhabroyyxbtsrsxqjnfpadi","siqbezhkohmgbenbkikcxmvz","ddmaireeouzcvffkcohxus","kjzguljbwsxlrd","gqzuqcljvcpmoqlnrxvzqwoyas","vadguvpsubcwbfbaviedr","nxnorutztxfnpvmukpwuraen","imgvujjeygsiymdxp","rdzkpk","cuap","qcojjumwp","pyqzshwykhtyzdwzakjejqyxbganow","cvxuskhcloxykcu","ul","axzscbjajazvbxffrydajapweci"], [[4, 4],[6, 17],[10, 17],[9, 18],[17, 22],[5, 23],[2, 5],[17, 21],[5, 17],[4, 8],[7, 17],[16, 19],[7, 12],[9, 20],[13, 23],[1, 5],[19, 19]]))
