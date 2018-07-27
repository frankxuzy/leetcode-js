"use strict";
// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"
// Write the code that will take a string and make this conversion given a number of rows:
// string convert(string s, int numRows);
// Example 1:
// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// Example 2:
// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    var sLen = s.length;
    var gap = numRows + numRows - 2;
    var newStr = '';
    if (numRows === 1) {
        return s;
    }
    for (var i = 0; i < numRows; i++) {
        for (var j = i; j < sLen; j += gap) {
            var middleColumn = j + gap - 2 * i;
            newStr += s[j];
            if (i != 0 && i != numRows - 1 && middleColumn < sLen) {
                newStr += s[middleColumn];
            }
        }
    }
    return newStr;
};
// function countNumColumn(s: string, numRows: number) {
//   let sLen = s.length, 
//       remainder = sLen % (numRows + numRows - 2) - numRows,
//       integer = (numRows-1)*Math.floor(sLen/(numRows + numRows - 2)),
//       numColumn = 0
//   if(remainder > 0) {
//     numColumn = integer + remainder + 1
//   } else {
//     numColumn = integer + 1
//   }
//   return numColumn
// }
// console.log(countNumColumn('PAYPALISHIRING', 3))
// console.log(countNumColumn('PAYPALISHIRING', 4))
// console.log(convert('PAYPALISHIRING', 3))
console.log(convert('PAYPALISHIRING', 4));
