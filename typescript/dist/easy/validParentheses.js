function isValid(s) {
    let stack = [];
    let map = {
        "(": ")",
        "[": "]",
        "{": "}",
    };
    for (let i = 0; i < s.length; i++) {
        // if the current character is a closing bracket
        if (map[s[i]]) {
            // push it to the stack
            stack.push(s[i]);
        }
        else {
            // if the stack is empty, return false
            if (!stack.length)
                return false;
            // if the current character is not equal to the popped character
            if (map[stack.pop()] !== s[i])
                return false;
        }
    }
    // if the stack is not empty, return false
    // because there are unclosed brackets
    // otherwise, return true
    // because all brackets are closed
    // and the stack is empty
    return !stack.length;
}
;
console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
