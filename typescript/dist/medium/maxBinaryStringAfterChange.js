/*
You are given a binary string binary consisting of only 0's or 1's.
You can apply each of the following operations any number of times:

Operation 1: If the number contains the substring "00", you can replace it with "10".
For example, "00010" -> "10010"
Operation 2: If the number contains the substring "10", you can replace it with "01".
For example, "00010" -> "00001"
Return the maximum binary string you can obtain after any number of operations.
Binary string x is greater than binary string y if x's decimal representation is
greater than y's decimal representation.


Example 1:
Input: binary = "000110"
Output: "111011"
Explanation: A valid transformation sequence can be:
"000110" -> "000101"
"000101" -> "100101"
"100101" -> "110101"
"110101" -> "110011"
"110011" -> "111011"

Example 2:
Input: binary = "01"
Output: "01"
Explanation: "01" cannot be transformed any further.
*/
function maximumBinaryString(binary) {
    const firstZeroPos = binary.indexOf('0');
    if (firstZeroPos === -1)
        return binary; // No zeros in the string
    const zerosAfterFirst = (binary.slice(firstZeroPos).match(/0/g) || []).length;
    let result = '';
    result += '1'.repeat(firstZeroPos); // Add 1s up to the first 0
    result += '1'.repeat(zerosAfterFirst - 1); // Add 1s for the count of 0s minus 1
    result += '0'; // Add one 0
    result += '1'.repeat(binary.length - result.length); // Fill the rest with 1s
    return result;
}
;
// time: O(n)
console.log(maximumBinaryString('000110')); // '111011'
console.log(maximumBinaryString('01')); // '01'
console.log(maximumBinaryString('011')); // '101'
