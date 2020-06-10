/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  const outerArr = Array(numRows).fill(null).map((item, index) => {
    const arr = Array(index+1).fill(null)
    arr[0] = 1;
    arr[arr.length-1] = 1;
    return arr;
  })

  for(let [k, v] of outerArr.entries()) {
    if(k<2) { continue; }
    for(let [ik, iv] of v.entries()) {
      if(iv === 1) { continue; }
      const preValue = outerArr[k-1];
      v[ik] = preValue[ik-1] + preValue[ik]
    }
  }

  return outerArr
};
// @lc code=end