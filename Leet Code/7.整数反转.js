/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const isNegative = x < 0
    const temp = String(Math.abs(x))
    const res = []
    for (let index = temp.length; index >= 0; index--) {
      res.push(temp[index])
    }
    if(isNegative) {
      const n = -Number.parseInt(res.join(""))
      if(n < (-2147483648)) {
        return 0
      } else {
        return n
      }
    } else {
      const n = Number.parseInt(res.join(""))
      if(n > 2147483647) {
        return 0
      } else {
        return n
      }
    }
};
// @lc code=end

console.log(reverse(022))
console.log(reverse(-022))
console.log(reverse(220))
