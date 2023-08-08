/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
*/

function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 1) {
    return strs[0];
  }
  if (strs.length === 0) {
    return "";
  }

  let prefix = "";
  let index = 0;
  let char = "";

  while (true) {
    // get the first char of the first string
    char = strs[0][index];

    // if the first string is empty, return prefix
    if (!char) {
      return prefix;
    }

    // check if the char is the same for all strings in the array at the current index
    const length = strs.length;
    for (let i = 1; i < length; i++) {
      if (strs[i][index] !== char) {
        return prefix;
      }
    }

    // if the char is the same for all strings, add it to the prefix and increment the index
    prefix += char;
    index++;
  }
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));


function longestCommonPrefix2(strs: string[]): string {

  let prefix = strs[0];

  const length = strs.length;
  for (let i = 1; i < length; i++) {
    if (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, prefix.length - 1);
      i--;
    }
  }

  return prefix;
}

console.log(longestCommonPrefix2(["flower", "flow", "flight"]));
console.log(longestCommonPrefix2(["dog", "racecar", "car"]));
