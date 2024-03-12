/*
You are given an array of equal-length strings words. Assume that the length of each string is n.

Each string words[i] can be converted into a difference integer array difference[i] of length
n - 1 where difference[i][j] = words[i][j+1] - words[i][j] where 0 <= j <= n - 2.
Note that the difference between two letters is the difference between their positions in the
alphabet i.e. the position of 'a' is 0, 'b' is 1, and 'z' is 25.

For example, for the string "acb", the difference integer array is [2 - 0, 1 - 2] = [2, -1].
All the strings in words have the same difference integer array, except one.
You should find that string.

Return the string in words that has different difference integer array.


Example 1:
Input: words = ["adc","wzy","abc"]
Output: "abc"
Explanation:
- The difference integer array of "adc" is [3 - 0, 2 - 3] = [3, -1].
- The difference integer array of "wzy" is [25 - 22, 24 - 25]= [3, -1].
- The difference integer array of "abc" is [1 - 0, 2 - 1] = [1, 1].
The odd array out is [1, 1], so we return the corresponding string, "abc".

Example 2:
Input: words = ["aaa","bob","ccc","ddd"]
Output: "bob"
Explanation: All the integer arrays are [0, 0] except for "bob", which corresponds to [13, -13].
*/

function oddString(words: string[]): string {

  // Helper function to convert a word to its difference integer array
  const to_diff_array = (word: string): number[] => {
    let diff: number[] = [];
    for (let i = 0; i < word.length - 1; i++) {
      diff.push(word.charCodeAt(i + 1) - word.charCodeAt(i));
    }
    return diff;
  }

  // Convert each word to its corresponding difference integer array
  const diff_arrays = words.map(to_diff_array);

  // Use a Map to store the frequency of each difference integer array
  const freq: Map<string, number> = new Map();

  for (const arr of diff_arrays) {
    const key = arr.join(',');
    freq.set(key, (freq.get(key) || 0) + 1);
  }

  // Return the word which corresponds to the difference integer array with a frequency of 1
  for (let i = 0; i < diff_arrays.length; i++) {
    const key = diff_arrays[i].join(',');
    if (freq.get(key) === 1) {
      return words[i];
    }
  }

  return '';
};

// time: O(n)

console.log(oddString(["adc", "wzy", "abc"]));
console.log(oddString(["aaa", "bob", "ccc", "ddd"]));
console.log(oddString(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]));
