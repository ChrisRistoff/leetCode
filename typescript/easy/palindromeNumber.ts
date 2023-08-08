// Given an integer x, return true if x is a palindrome, and false otherwise.

function isPalindrome(x: number): boolean {
  const str = x.toString();
  let reversed = "";

  const length = str.length;
  for (let i = length-1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed === str;
}

console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(10)); // false
console.log(isPalindrome(-101)); // false
console.log(isPalindrome(123321)) // true
