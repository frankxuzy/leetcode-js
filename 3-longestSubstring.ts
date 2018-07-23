/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s: string) {
  let count = 0
  let newS = s
  let tempStr = ""
  if(s === "") return 0
  if(s.length === 1) return 1
  while(newS.length > count) {
    for(let i = 0; i < newS.length; i++) {
      if(tempStr.indexOf(newS[i]) === -1) {
        tempStr += newS[i]        
        if(count < tempStr.length){
          count = tempStr.length
        }
      } else {
        newS = newS.substr(tempStr.indexOf(newS[i]) + 1)
        tempStr = ""
        break
      } 
    }
  }
  return count
};

console.log(lengthOfLongestSubstring('ccc'))