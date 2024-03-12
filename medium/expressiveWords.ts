/*
Sometimes people repeat letters to represent extra feeling. For example:

"hello" -> "heeellooo"
"hi" -> "hiiii"
In these strings like "heeellooo", we have groups of adjacent letters that are all the same:
"h", "eee", "ll", "ooo".

You are given a string s and an array of query strings words. A query word is stretchy if
it can be made to be equal to s by any number of applications of the following extension operation:
choose a group consisting of characters c, and add some number of characters c to the group so
that the size of the group is three or more.

For example, starting with "hello", we could do an extension on the group "o" to get "hellooo",
but we cannot get "helloo" since the group "oo" has a size less than three. Also,
we could do another extension like "ll" -> "lllll" to get "helllllooo". If s = "helllllooo",
then the query word "hello" would be stretchy because of these two extension operations:
query = "hello" -> "hellooo" -> "helllllooo" = s.
Return the number of query strings that are stretchy.


Example 1:
Input: s = "heeellooo", words = ["hello", "hi", "helo"]
Output: 1
Explanation:
We can extend "e" and "o" in the word "hello" to get "heeellooo".
We can't extend "helo" to get "heeellooo" because the group "ll" is not size 3 or more.

Example 2:
Input: s = "zzzzzyyyyy", words = ["zzyy","zy","zyy"]
Output: 3

Constraints:

1 <= s.length, words.length <= 100
1 <= words[i].length <= 100
s and words[i] consist of lowercase letters.
*/


function expressiveWords(s: string, words: string[]): number {
  const getGroups = (str: string): Map<string, number[]> => {
    let map = new Map<string, number[]>();
    let i = 0;

    while (i < str.length) {
      let j = i;

      while (j < str.length && str[j] === str[i]) {
        j++;
      }
      if (!map.has(str[i])) {
        map.set(str[i], []);
      }

      map.get(str[i])!.push(j - i);
      i = j;
    }
    return map;
  };

  const isStretchy = (word: string): boolean => {
    const wordMap = getGroups(word);
    const sMap = getGroups(s);

    if (wordMap.size !== sMap.size) return false;

    for (let [key, sValues] of sMap.entries()) {
      const wordValues = wordMap.get(key);
      if (!wordValues) return false;

      for (let i = 0; i < sValues.length; i++) {
        if (sValues[i] < 3 && sValues[i] !== wordValues[i]) return false;
        if (sValues[i] >= 3 && wordValues[i] > sValues[i]) return false;
        if (sValues[i] >= 3 && wordValues[i] < 1) return false;
      }
    }
    return true;
  };
  let count = 0;
  for (let word of words) {
    if (isStretchy(word)) count++;
  }
  return count;
};

// time: O(n * m) where n is the length of s and m is the length of words

console.log(expressiveWords("heeellooo", ["hello", "hi", "helo"])); // 1
console.log(expressiveWords("zzzzzyyyyy", ["zzyy", "zy", "zyy"])); // 3
console.log(expressiveWords("abcd", ["abc"])); // 0
console.log(expressiveWords("aaa", ["aaaa"])); // 0
console.log(expressiveWords("aaa", ["aaaaa"])); // 0
