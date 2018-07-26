"use strict";
// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
// Example 1:
// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:
// Input: "cbbd"
// Output: "bb"
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    var subStrBegin = 0, currentLength = 0, maxLength = 0, substr = '';
    if (s.length < 2) {
        return s;
    }
    for (var i = 0; i < s.length - 1; i++) {
        findPalindrome(i - 1, i + 1);
        findPalindrome(i, i + 1);
    }
    function findPalindrome(start, end) {
        while (start >= 0 && end < s.length && s[start] === s[end]) {
            maxLength = end - start + 1;
            if (maxLength > currentLength) {
                currentLength = maxLength;
                subStrBegin = start;
            }
            start--;
            end++;
        }
    }
    substr = s.substr(subStrBegin, currentLength);
    return substr ? substr : s[0];
};
console.log(longestPalindrome('ab'));
