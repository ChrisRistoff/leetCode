function isValid(s: string): boolean {
  let stack: string[] = [];
  let map = new Map();

  map.set("(", ")");
  map.set("[", "]");
  map.set("{", "}");

  for (let i = 0; i < s.length; i++) {

    if (map.get(s[i])) {
      stack.push(s[i]);
    } else {
      let last = stack.pop();
      if (map.get(last) !== s[i]) {
        return false;
      }


    }
  }

  return stack.length === 0;
};

// time complexity: O(n)

console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
