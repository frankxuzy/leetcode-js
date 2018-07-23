"use strict";
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    var count = 0;
    var newS = s;
    var tempStr = "";
    if (s === "")
        return 0;
    if (s.length === 1)
        return 1;
    while (newS.length > count) {
        for (var i = 0; i < newS.length; i++) {
            if (tempStr.indexOf(newS[i]) === -1) {
                tempStr += newS[i];
                if (count < tempStr.length) {
                    count = tempStr.length;
                }
            }
            else {
                newS = newS.substr(tempStr.indexOf(newS[i]) + 1);
                tempStr = "";
                break;
            }
        }
    }
    return count;
};
console.log(lengthOfLongestSubstring('ccc'));
