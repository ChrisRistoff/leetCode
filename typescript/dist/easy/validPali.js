/* A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome. */
function isItPalindrome(s) {
    // remove all non-alphanumeric characters
    let newStr = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    let strL = newStr.split(" ");
    newStr = strL.join("");
    let revStr = "";
    // reverse the string
    const length = newStr.length;
    for (let i = length - 1; i >= 0; i--) {
        revStr += newStr[i];
    }
    return newStr === revStr;
}
// time complexity: O(n)
console.log(isItPalindrome("A man, a plan, a canal: Panama")); // true
