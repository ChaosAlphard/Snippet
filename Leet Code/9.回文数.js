/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) { return false }
    let result = 0;
    let value = x;
    while(value !== 0) {
      let pop = value % 10;
      result = result*10+pop;
      value = Math.floor(value / 10)
    }
    return result === x
};
// @lc code=end