"use strict";
/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function(s: string) {
//   let count = 0
//   let newS = s
//   let tempStr = ""
//   if(s === "") return 0
//   if(s.length === 1) return 1
//   while(newS.length > count) {
//     for(let i = 0; i < newS.length; i++) {
//       if(tempStr.indexOf(newS[i]) === -1) {
//         tempStr += newS[i]        
//         if(count < tempStr.length){
//           count = tempStr.length
//         }
//       } else {
//         newS = newS.substr(tempStr.indexOf(newS[i]) + 1)
//         tempStr = ""
//         break
//       } 
//     }
//   }
//   return count
// };
var lengthOfLongestSubstring = function (s) {
    var i = 0, j = 0, max = 0, map = {};
    var n = s.length;
    while (i < n && j < n) {
        if (map[s[j]] === undefined) {
            map[s[j]] = 1;
            j++;
            max = Math.max(max, j - i);
        }
        else {
            delete map[s[j]];
            i++;
        }
    }
    return max;
};
console.log(lengthOfLongestSubstring('pwwkew'));
